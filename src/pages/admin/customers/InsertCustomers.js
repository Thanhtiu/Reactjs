import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../firebase/axiosConfig'; // Import axios configuration
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function InsertCustomers() {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [imgUpload, setImgUpload] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async (data) => {
        setErrorMessage(''); // Reset error message before submitting
        setSuccessMessage(''); // Reset success message before submitting

        if (file) {
            const fileExtension = file.name.split('.').pop();
            const currentDate = new Date();
            const newFileName = `${currentDate.toISOString().replace(/[:.]/g, '-')}.${fileExtension}`;
            const path = `upload/${newFileName}`;

            const storageRef = ref(storage, path);
            setIsUploading(true);

            try {
                await uploadBytes(storageRef, file);
                const url = await getDownloadURL(storageRef);
                setImgUpload(url);
                // Lấy tên file từ URL
                const fileName = path.split('/').pop();
                data.images = fileName;
                
                // Set default values
                data.isticket = "active"; // Set default value for isticket
                delete data.confirm_password; // Remove confirm_password before sending
                await axiosInstance.post('/api/customers', data); 
                setSuccessMessage('Thêm khách hàng thành công');
                setTimeout(() => {
                    navigate("/admin/customers/list");
                }, 1000);
                reset();
            } catch (error) {
                setErrorMessage('Upload failed');
            } finally {
                setIsUploading(false);
            }
        } else {
            setErrorMessage('Không được bỏ trống ảnh');
        }
    };

    return (
        <div className="row m-auto">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">Thêm khách hàng</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} 
                            {successMessage && <div className="alert alert-success">{successMessage}</div>} 
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="username" className="fw-bold col-form-label">Tài Khoản</label>
                                            <input type="text"
                                                className="form-control" id="username" placeholder="Tài khoản...." autoFocus
                                                {...register('username', { required: 'Tài Khoản là bắt buộc' })} />
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
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="password" className="fw-bold col-form-label">Mật khẩu</label>
                                            <input type="password"
                                                className="form-control" id="password" placeholder="Mật Khẩu..."
                                                {...register('password', { required: 'Mật khẩu là bắt buộc' })} />
                                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="confirm_password" className="fw-bold col-form-label">Xác nhận mật khẩu</label>
                                            <input type="password"
                                                className="form-control" id="confirm_password" placeholder="Xác Nhận Mật Khẩu..."
                                                {...register('confirm_password', {
                                                    required: 'Xác nhận mật khẩu là bắt buộc',
                                                    validate: value =>
                                                        value === watch('password') || 'Mật khẩu xác nhận không khớp'
                                                })} />
                                            {errors.confirm_password && <span className="text-danger">{errors.confirm_password.message}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="img" className="fw-bold col-form-label">Hình ảnh</label>
                                    <input type="file"
                                        className="form-control" id="img" accept="image/*" name="image" onChange={onFileChange} />
                                    <img style={{ width: 'auto', height: '280px' }} src={file ? URL.createObjectURL(file) : "https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F1710475554435-linhpc06747-anh_dai_dien.jpg?alt=media&token=5262bcb7-bd00-4681-8cbd-92716c566d91"} alt="Image preview" className="img-thumbnail mt-2" />
                                </div>
                            </div>
                            <div className="text-end mt-3">
                                <button type="submit" className="btn btn-primary mx-2" disabled={isUploading}>
                                    <i className="bi bi-plus"></i> Thêm mới
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

export default InsertCustomers;
