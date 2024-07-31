import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../firebase/axiosConfig';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const [fileImg, setFileImg] = useState(null);
    const [fileAudio, setFileAudio] = useState(null);
    const [currentImgURL, setCurrentImgURL] = useState('');
    const [currentAudioURL, setCurrentAudioURL] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState([]); 

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const response = await axiosInstance.get('/api/categories');
                setCategories(response.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchPostData = async () => {
            if (id) {
                try {
                    const response = await axiosInstance.get(`/api/post/${id}`);
                    const postData = response.data.data[0];

                    setValue('title', postData.title);
                    setValue('description', postData.description);
                    setValue('categories_id', postData.categories_id);
                    setCurrentImgURL(postData.images || '');
                    setCurrentAudioURL(postData.audio || '');
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchPostData();
    }, [id, setValue]);

    const onFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            if (name === 'images') {
                setFileImg(files[0]);
            } else if (name === 'audio') {
                setFileAudio(files[0]);
            }
        }
    };

    const onSubmit = async (data) => {
        setIsUploading(true);

        try {

            if (fileImg) {
                const imgExtension = fileImg.name.split('.').pop();
                const currentDate = new Date();
                const imgFileName = `${currentDate.toISOString().trim()}.${imgExtension}`;
                const imgPath = `upload/${imgFileName}`;
                const imgRef = ref(storage, imgPath);
                await uploadBytes(imgRef, fileImg);
                const imgUrl = await getDownloadURL(imgRef);


                const imgFileNameFromUrl = imgPath.split('/').pop();
                data.images = imgFileNameFromUrl;
            } else {

                data.images = currentImgURL;
            }


            if (fileAudio) {
                const audioExtension = fileAudio.name.split('.').pop();
                const currentDate = new Date();
                const audioFileName = `${currentDate.toISOString().trim()}.${audioExtension}`;
                const audioPath = `audio/${audioFileName}`;
                const audioRef = ref(storage, audioPath);
                await uploadBytes(audioRef, fileAudio);
                const audioUrl = await getDownloadURL(audioRef);
                const audioFileNameFromUrl = audioPath.split('/').pop();
                data.audio = audioFileNameFromUrl;
            } else {
                data.audio = currentAudioURL;
            }
            data.customers_id = 7;
            delete data.confirm_password;

            console.log('Data to be sent:', data);
            await axiosInstance.patch(`/api/post/${id}`, data);
            alert('Cập nhật bài đăng thành công');
            navigate(`/admin/list/post`);
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className='row m-auto'>
            <div className='col-lg-12'>
                <div className='card'>
                    <div className='card-header'>{id ? 'Cập nhật bài đăng' : 'Thêm bài đăng'}</div>
                    <div className='card-body'>
                        <form className='form' encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <label htmlFor="title">Tiêu đề</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="title"
                                        name="title"
                                        placeholder="Tiêu đề..."
                                        {...register('title', { required: true })}
                                    />
                                    {errors.title && <span className='text-danger'>Vui lòng nhập tiêu đề!</span>}
                                </div>
                                <div className='col-sm-3'>
                                    <label htmlFor="images">Hình ảnh</label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        id="images"
                                        name="images"
                                        accept="image/*"
                                        onChange={onFileChange}
                                    />
                                    {errors.images && <span className='text-danger'>Vui lòng chọn ảnh!</span>}
                                    
                                </div>
                                <div className='col-sm-3'>
                                    <label htmlFor="audio">Audio</label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        id="audio"
                                        name="audio"
                                        accept="audio/*"
                                        onChange={onFileChange}
                                    />
                                    {errors.audio && <span className='text-danger'>Vui lòng chọn audio!</span>}
                                   
                                </div>
                                <div className='col-sm-3'>
                                    <label htmlFor="categories_id">Loại</label>
                                    <select
                                        className='col-12 form-control'
                                        name="categories_id"
                                        id="categories_id"
                                        {...register('categories_id', { required: true })}
                                    >
                                        <option value="" disabled>Vui lòng chọn loại!</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.categories_id && <span className='text-danger'>Vui lòng chọn một thể loại!</span>}
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-sm-12'>
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea
                                        className='form-control'
                                        rows="6"
                                        id="description"
                                        name="description"
                                        placeholder="Mô tả..."
                                        {...register('description')}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='text-end mt-3'>
                                <button type="submit" className='btn btn-success' disabled={isUploading}>
                                    {isUploading ? 'Uploading...' : <i className="bi bi-plus"></i>} {id ? 'Cập nhật' : 'Thêm'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPost;
