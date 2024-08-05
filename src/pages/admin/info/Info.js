import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Info = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching user info...");
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:4200/api/customers/${id}`);
        console.log("User info received:", response.data.data);
        setUserInfo(response.data.data);
      } catch (err) {
        console.error('Failed to fetch user info:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserInfo();
  }, [id]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container-fluid" id="container-wrapper">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 font-weight-bold text-warning">Thông Tin</h1>
        <ol className="breadcrumb">
        
        </ol>
      </div>

      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100 border-bottom-danger">
            <div className="card-body bg-gray-400">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar text-center">
                    <a href="#" data-toggle="modal" data-target="#informationModal">
                      <img
                        src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${userInfo[0].images}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`}
                        alt="User Avatar"
                        className='rounded-3'
                        width={150}
                      />
                      <p className="text-center text-body text-muted text-center">Phóng to ảnh</p>
                    </a>
                  </div>
                  <h5 className="user-name text-warning text-center">{userInfo ? userInfo[0].full_name : 'Loading...'}</h5>
                  {/* Uncomment if email is needed */}
                  {/* <h6 className="user-email">{userInfo ? userInfo.email : 'Loading...'}</h6> */}
                </div>
                <div className="about">
                  {/* Uncomment if "About" section is needed */}
                  {/* <h5 className="mb-2 text-primary">About</h5>
                  <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body bg-gray-300">
              <form >
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="mb-3 text-warning">Thông Tin Tài Khoản</h4>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Tài Khoản</label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        name="username"
                        id="fullName"
                        disabled
                        readOnly
                        value={userInfo ? userInfo[0].username : 'Loading...'}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="full_Name">Họ và tên</label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="full_Name"
                        name="full_name"
                        value={userInfo ? userInfo[0].full_name : 'Loading...'}
                      />
                      <span className="err text-danger"></span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="information">Gmail</label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="information"
                        name="information"
                        value={userInfo ? userInfo[0].email : 'Loading...'}
                      />
                      <span className="err text-danger"></span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="confirm_pass">Mật khẩu của bạn</label>
                      <input
                        type="password"
                        className="form-control bg-transparent"
                        name="confirm_pass"
                        id="confirm_pass"
                      />
                      <span className="err text-danger"></span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label className="font-weight-bold col-form-label">Giới tính</label>
                      <div className="form-group p-2 rounded-right rounded-left border  d-flex">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio3"
                            value="Nam"
                            name="gender"
                            className="custom-control-input"
                            defaultChecked={userInfo && userInfo[0].gender == '0'}
                          />
                          <label className="custom-control-label" htmlFor="customRadio3">Nam</label>
                        </div>
                        <div className="custom-control custom-radio ml-3">
                          <input
                            type="radio"
                            id="customRadio4"
                            value="Nữ"
                            name="gender"
                            className="custom-control-input"
                            defaultChecked={userInfo && userInfo.gender == '1'}
                          />
                          <label className="custom-control-label" htmlFor="customRadio4">Nữ</label>
                        </div>
                      </div>
                      <span className="err text-danger"></span>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="password">Mật khẩu mới</label>
                      <input
                        type="password"
                        className="form-control bg-transparent"
                        id="password"
                        name="password"
                        placeholder="Nhập Để Đổi Mật Khẩu Hoặc Bỏ Trống"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="hidden"
                        className="form-control"
                        id="password_old"
                        name="password_old"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="image">Ảnh đại diện</label>
                      <input
                        type="file"
                        className="form-control bg-transparent"
                        name="image"
                        id="image"
                      />
                      <input
                        type="hidden"
                        className="form-control p-1"
                        name="image_old"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="confim_password">Xác nhận mật khẩu mới</label>
                      <input
                        type="password"
                        className="form-control bg-transparent"
                        id="confim_password"
                        name="confim_password"
                        placeholder="Xác Nhận Mật Khẩu Mới"
                      />
                      <span className="err text-danger"></span>
                    </div>
                  </div>
                </div>
                <hr className="tabl-light border-top" />
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button type="submit" id="submit" name="update_admin" className="btn btn-danger">
                        Cập nhật
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Profile Image */}
      <div className="modal fade" id="informationModal" tabIndex="-1" role="dialog" aria-labelledby="informationModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="informationModalLabel">Ảnh Đại Diện</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <img className="img-fluid" src={userInfo ? userInfo.images : 'https://via.placeholder.com/150'} alt="Profile" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
