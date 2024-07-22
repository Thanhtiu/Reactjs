import React from 'react';

function Register() {
  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-0">Đăng ký</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section section-padding" id="section_2">
        <div className="container">
          <div className="login-box m-auto" id="bg-login">
            <h2>Đăng ký</h2>
            <form action="/client/form/insertUser" method="post" className="form needs-validation" noValidate>
              <div className="user-box">
                <input type="text" name="username" id="username" required />
                <label>Tài khoản</label>
                <span className="text-danger messageerr" style={{ fontSize: '13px' }}></span>
              </div>
              <div className="user-box">
                <input type="text" name="full_name" id="full_name" required />
                <label>Họ tên</label>
                <span className="text-danger messageerr" style={{ fontSize: '13px' }}></span>
              </div>
              <div className="user-box">
                <input type="email" name="email" id="email" required />
                <label>Email</label>
                <span className="text-danger messageerr" style={{ fontSize: '13px' }}></span>
              </div>
              <div className="user-box">
                <input type="password" name="password" id="password" required />
                <label>Mật khẩu</label>
                <span className="text-danger messageerr" style={{ fontSize: '13px' }}></span>
              </div>
              <div className="user-box">
                <input type="password" name="confirm_password" id="confirm_password" required />
                <label>Xác nhận mật khẩu</label>
                <span className="text-danger messageerr" style={{ fontSize: '13px' }}></span>
              </div>
              <div className="text-right d-flex justify-content-sm-end">
                <button className="btn-signup bg-transparent" type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Đăng ký
                </button>
              </div>
              <div className="text-center mt-5">
                <p className="text-white">
                  Đăng nhập ngay! <a className="text-info" href="/login">Đăng nhập</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
