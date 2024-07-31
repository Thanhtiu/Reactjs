import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../firebase/axiosConfig';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { DialogService } from '../../../services/common/DialogService';

function InsertPost() {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const [fileImg, setFileImg] = useState(null);
    const [fileAudio, setFileAudio] = useState(null);
    const [imgPreview, setImgPreview] = useState('');
    const [audioPreview, setAudioPreview] = useState('');
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
            }

            data.customers_id = 7;
            delete data.confirm_password;
            console.log('Data to be sent:', data);
            await axiosInstance.post('/api/post', data);
        DialogService.success('Thêm thành công')
            reset();
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
                    <div className='card-header'>Thêm bài đăng</div>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <label htmlFor="title" className="fw-bold col-form-label">Tiêu đề</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="title"
                                        name="title"
                                        placeholder="Tiêu đề..."
                                        {...register('title', { required: 'Tiêu đề là bắt buộc' })}
                                    />
                                    {errors.title && <span className='text-danger'>{errors.title.message}</span>}
                                </div>
                                <div className='col-sm-3'>
                                    <label htmlFor="images" className="fw-bold col-form-label">Hình ảnh</label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        id="images"
                                        name="images"
                                        accept="image/*"
                                        onChange={onFileChange}
                                    />
                                    {imgPreview && <img src={imgPreview} alt="Image preview" style={{ width: '100%', height: 'auto' }} className="img-thumbnail mt-2" />}
                                    {errors.images && <span className='text-danger'>{errors.images.message}</span>}
                                </div>
                                <div className='col-sm-3'>
                                    <label htmlFor="audio" className="fw-bold col-form-label">Audio</label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        id="audio"
                                        name="audio"
                                        accept="audio/*"
                                        onChange={onFileChange}
                                    />
                                    {audioPreview && <audio controls src={audioPreview} className="mt-2" />}
                                    {errors.audio && <span className='text-danger'>{errors.audio.message}</span>}
                                </div>
                                <div className='col-sm-3'>
                                    <label htmlFor="categories_id" className="fw-bold col-form-label">Loại</label>
                                    <select
                                        className='form-control'
                                        name="categories_id"
                                        id="categories_id"
                                        {...register('categories_id', { required: 'Loại là bắt buộc' })}
                                    >
                                        <option value="" disabled selected>Vui lòng chọn loại!</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.categories_id && <span className='text-danger'>{errors.categories_id.message}</span>}
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-sm-12'>
                                    <label htmlFor="description" className="fw-bold col-form-label">Mô tả</label>
                                    <textarea
                                        className='form-control'
                                        rows="6"
                                        id="description"
                                        name="description"
                                        {...register('description')}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='text-end mt-3'>
                                <button type="submit" className='btn btn-success' disabled={isUploading}>
                                    {isUploading ? 'Uploading...' : <i className="bi bi-plus"></i>} Thêm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InsertPost;
