import React from 'react';

function Login() {
  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-2">Đăng nhập</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section section-padding" id="section_2">
        <div className="container">
          <div className="login-box m-auto" id="bg-login">
            <h2 className="mb-5">Đăng nhập</h2>
            <form className="form needs-validation" noValidate method="post" action="/client/form/loginUser">
              <div className="user-box">
                <input type="text" name="username" id="username" required />
                <label>Tài khoản</label>
                <div id="usernameFeedback" className="text-danger messageerr" style={{ fontSize: '13px' }}></div>
              </div>
              <div className="user-box">
                <input type="password" name="password" id="password" required />
                <label>Mật khẩu</label>
                <div id="passwordFeedback" className="text-danger messageerr" style={{ fontSize: '13px' }}></div>
              </div>
              <div className="text-right d-flex justify-content-sm-end">
                <button className="btn_submit bg-transparent" type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Đăng nhập
                </button>
              </div>
              <div className="text-center mt-5">
                <p className="text-white">
                  Bạn đã có tài khoản chưa? <a className="text-sm-start" href="/register">Đăng ký</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
