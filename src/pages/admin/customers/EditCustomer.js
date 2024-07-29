import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const customers = [
  {
    id: 1,
    images: 'https://image.tienphong.vn/w890/uploads/2018/04/5ad19e492c733-61b98cc4253583eef527420d81bab0ba-600x450.jpg',
    username: 'nancy',
    full_name: 'Nancy',
    email: 'nancy@example.com',
    role: 'user',
    gender: '1',
    password: 'password123',
  },
  {
    id: 2,
    images: 'https://ss-images.saostar.vn/wwebp1200/2024/5/3/pc/1714738770441/vwpzo28bwb1-vc5cwalzyk2-z7sod5vif93.jpg',
    username: 'bachloc',
    full_name: 'Bạch Lộc',
    email: 'bachloc@example.com',
    role: 'admin',
    gender: '1',
    password: 'password456',
  }
];

const EditCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({
    username: '',
    full_name: '',
    email: '',
    role: '',
    gender: '',
    password: '',
    images: '',
  });

  useEffect(() => {
    const customerData = customers.find((customer) => customer.id === parseInt(id));
    if (customerData) {
      setCustomer(customerData);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  };


  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">Chỉnh sửa khách hàng</div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="username" className="fw-bold col-form-label">Tài Khoản</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="username"
                        value={customer.username}
                        onChange={handleInputChange}
                        placeholder="Tài khoản...."
                        autoFocus
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="full_name" className="fw-bold col-form-label">Họ và tên</label>
                      <input
                        type="text"
                        name="full_name"
                        className="form-control"
                        id="full_name"
                        value={customer.full_name}
                        onChange={handleInputChange}
                        placeholder="Họ Và Tên..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="email" className="fw-bold col-form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        value={customer.email}
                        onChange={handleInputChange}
                        placeholder="Gmail..."
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="fw-bold col-form-label">Vai trò</label>
                      <div className="border p-3 rounded">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="roleUser"
                            value="user"
                            checked={customer.role === 'user'}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor="roleUser">Người dùng</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="roleAdmin"
                            value="admin"
                            checked={customer.role === 'admin'}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor="roleAdmin">Admin</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="fw-bold col-form-label">Giới tính</label>
                      <div className="border p-3 rounded">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderMale"
                            value="0"
                            checked={customer.gender === '0'}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor="genderMale">Nam</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderFemale"
                            value="1"
                            checked={customer.gender === '1'}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor="genderFemale">Nữ</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="password" className="fw-bold col-form-label">Mật khẩu</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        onChange={handleInputChange}
                        placeholder="Mật Khẩu..."
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="confirm_password" className="fw-bold col-form-label">Xác nhận mật khẩu</label>
                      <input
                        type="password"
                        name="confirm_password"
                        className="form-control"
                        id="confirm_password"
                        onChange={handleInputChange}
                        placeholder="Xác Nhận Mật Khẩu..."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <label htmlFor="img" className="fw-bold col-form-label">Hình ảnh</label>
                  <input
                    type="file"
                    name="images"
                    className="form-control"
                    id="img"
                    accept="image/*"
                    onChange={(e) => setCustomer({ ...customer, images: URL.createObjectURL(e.target.files[0]) })}
                  />
                  <img
                    style={{ width: 'auto', height: '280px' }}
                    src={customer.images}
                    alt="Image preview"
                    className="img-thumbnail mt-2"
                  />
                </div>
              </div>
              <div className="text-end mt-3">
                <button type="button" id="btn" className="btn btn-primary mx-2">
                  Lưu thay đổi
                </button>
                <button type="reset" id="btn" className="btn btn-warning">
                  Nhập lại
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
