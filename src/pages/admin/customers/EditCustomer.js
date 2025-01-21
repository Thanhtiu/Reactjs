import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../firebase/axiosConfig'; // Import axios configuration
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { DialogService } from '../../../services/common/DialogService';

function EditCustomer() {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [imgUpload, setImgUpload] = useState('');
    const [oldImage, setOldImage] = useState('');
    const [oldPassword, setOldPassword] = useState(''); // New state to store old password

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axiosInstance.get(`/api/customers/${id}`);
                const customerData = response.data.data[0];
                setValue('username', customerData.username);
                setValue('full_name', customerData.full_name);
                setValue('email', customerData.email);
                setValue('role', customerData.role);
                setValue('gender', customerData.gender.toString());
                setOldImage(customerData.images); 
                setOldPassword(customerData.password); // Set old password
                if (customerData.images) {
                    const url = `https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${customerData.images}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`;
                    setImgUpload(url);
                }
            } catch (error) {
                console.error('Error fetching customer:', error);
                DialogService.error('Lỗi khi tải dữ liệu khách hàng.');
            }
        };
        fetchCustomer();
    }, [id, setValue]);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async (data) => {
        setIsUploading(true);
        
        if (file) {
            const fileExtension = file.name.split('.').pop();
            const currentDate = new Date();
            const newFileName = `${currentDate.toISOString().replace(/[:.]/g, '-')}.${fileExtension}`;
            const path = `upload/${newFileName}`;
        
            const storageRef = ref(storage, path);
        
            try {
                await uploadBytes(storageRef, file);
                const url = await getDownloadURL(storageRef);
                setImgUpload(url);
                data.images = newFileName;
            } catch (error) {
                console.error('Upload thất bại:', error);
                DialogService.error('Upload thất bại. Vui lòng thử lại.');
                setIsUploading(false);
                return;
            }
        } else {
            data.images = oldImage; // Giữ lại hình ảnh cũ nếu không có hình mới
        }
        
        data.isticket = 'active'; // Đặt giá trị mặc định
        data.date = new Date().toISOString(); // Thêm ngày hiện tại vào cột data
        
        // Ensure password is not null if not provided by user
        data.password = data.password || oldPassword; 
        
        console.log('Data to submit:', data); // Log dữ liệu gửi đến server
        
        try {
            const response = await axiosInstance.patch(`/api/customers/${id}`, data);
            if (response.status === 200) {
                DialogService.success('Cập nhật khách hàng thành công');
                setTimeout(() => {
                    navigate("/admin/customers/list");
                }, 1000);
            }
        } catch (error) {
            console.error('Cập nhật thất bại:', error.response ? error.response.data : error.message);
            if (error.response && error.response.status === 400) {
                DialogService.error('Username hoặc email đã tồn tại.');
            } else {
                DialogService.error('Cập nhật thất bại. Vui lòng thử lại.');
            }
        } finally {
            setIsUploading(false);
        }
    };
    

    return (
        <div className="row m-auto">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">Chỉnh sửa khách hàng</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="username" className="fw-bold col-form-label">Tài Khoản</label>
                                            <input type="text"
                                                className="form-control" id="username" placeholder="Tài khoản...." autoFocus
                                                {...register('username', { required: 'Tài Khoản là bắt buộc' })} disabled/>
                                            {errors.username && <span className="text-danger">{errors.username.message}</span>}
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="full_name" className="fw-bold col-form-label">Họ và tên</label>
                                            <input type="text"
                                                className="form-control" id="full_name" placeholder="Họ Và Tên..."
                                                {...register('full_name', { required: 'Họ và tên là bắt buộc' })} />
                                            {errors.full_name && <span className="text-danger">{errors.full_name.message}</span>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label htmlFor="email" className="fw-bold col-form-label">Email</label>
                                            <input type="email"
                                                className="form-control" id="email" placeholder="Gmail..."
                                                {...register('email', { required: 'Email là bắt buộc' })} />
                                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="fw-bold col-form-label">Vai trò</label>
                                            <div className="border p-3 rounded">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="role" id="roleUser" value="user"
                                                        {...register('role', { required: 'Vai trò là bắt buộc' })} />
                                                    <label className="form-check-label" htmlFor="roleUser">Người dùng</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="role" id="roleAdmin" value="admin"
                                                        {...register('role', { required: 'Vai trò là bắt buộc' })} />
                                                    <label className="form-check-label" htmlFor="roleAdmin">Admin</label>
                                                </div>
                                            </div>
                                            {errors.role && <span className="text-danger">{errors.role.message}</span>}
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="fw-bold col-form-label">Giới tính</label>
                                            <div className="border p-3 rounded">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" id="genderMale" value="0"
                                                        {...register('gender', { required: 'Giới tính là bắt buộc' })} />
                                                    <label className="form-check-label" htmlFor="genderMale">Nam</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="1"
                                                        {...register('gender', { required: 'Giới tính là bắt buộc' })} />
                                                    <label className="form-check-label" htmlFor="genderFemale">Nữ</label>
                                                </div>
                                            </div>
                                            {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                                        </div>
                                    </div>
                     
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="img" className="fw-bold col-form-label">Hình ảnh</label>
                                    <input type="file"
                                        className="form-control" id="img" accept="image/*" name="image" onChange={onFileChange} />
                                    <img
                                        style={{ width: 'auto', height: '200px' }}
                                        src={file ? URL.createObjectURL(file) : imgUpload}
                                        alt="Image preview"
                                        className="img-thumbnail mt-2"
                                    />
                                </div>
                            </div>
                            <div className="text-end mt-3">
                                <button type="submit" className="btn btn-primary mx-2" disabled={isUploading}>
                                    <i className="bi bi-save"></i> Lưu thay đổi
                                </button>
                                <button type="reset" className="btn btn-warning" onClick={() => reset()}>
                                    Nhập lại
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCustomer;
