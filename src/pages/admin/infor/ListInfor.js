import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../firebase/axiosConfig';

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get('/api/customers'); // Adjust the URL as needed

                // Log response to check its structure
                console.log('API response:', response);

                // Adjust based on actual API response structure
                // For example, if the data is inside response.data.data
                setUserInfo(response.data.data[0]); // or response.data.data
            } catch (err) {
                console.error('Error fetching user info:', err);
                setError('Error fetching user info');
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    const handleEdit = () => {
        navigate('/pages/profile/edit');
    };

    if (loading) {
        return <div>Loading...</div>; // Handle loading state
    }

    if (error) {
        return <div>{error}</div>; // Handle error state
    }

    if (!userInfo) {
        return <div>No user information available</div>; // Handle empty state
    }

    return (
        <div className="row justify-content-center">
            <div className="row">
                <div className="row mx-0 text-center">
                    <h2>Hồ Sơ</h2>
                    <div className="p-4">
                        <ul className="nav nav-tabs nav-tabs-bordered" role="tablist">
                            <li className="nav-item" role="presentation">
                                <Link to="/admin/infor/list" className="nav-link btn active card status-basic shape-rectangle nb-transition">
                                    Tổng quan
                                </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    onClick={handleEdit}
                                    className="nav-link btn card status-basic shape-rectangle nb-transition"
                                >
                                    Sửa hồ sơ
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4 bg-transparent border">
                                <div className="card-body text-center">
                                    <img
                                        src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${userInfo.images}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`}
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: '140px' }}
                                    />
                                    <h5 className="my-3">{userInfo.username}</h5>
                                    <p className="mb-4">Lập trình web (Front-end)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 text-start">
                            <div className="card mb-4 bg-transparent border">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Tài khoản:</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="mb-0">{userInfo.username}</p>
                                        </div>
                                    </div>
                                    <hr className="border" />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Họ và tên:</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="mb-0">{userInfo.full_name}</p>
                                        </div>
                                    </div>
                                    <hr className="border" />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email:</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="mb-0">{userInfo.email}</p>
                                        </div>
                                    </div>
                                    <hr className="border" />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Giới tính:</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {userInfo.gender === 0 && <p className="mb-0">Nam</p>}
                                            {userInfo.gender === 1 && <p className="mb-0">Nữ</p>}
                                        </div>
                                    </div>
                                    <hr className="border" />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">
                                                <i className="fs-3">GitHub</i>
                                            </p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="mb-0">https://github.com/tranvanchilinh1003/Podcasts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
