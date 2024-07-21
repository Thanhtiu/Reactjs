import React from 'react';

function Home() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="text-center mb-5 pb-2">
              <h1 className="text-white">Foodcast Forum</h1>
              <p className="text-white">Nghe nó ở khắp mọi nơi. Khám phá podcast yêu thích của bạn.</p>
              <a href="#section_2" className="btn custom-btn smoothscroll mt-3">Bắt đầu nghe</a>
            </div>

            <div className="owl-carousel owl-theme">
              <div className="owl-carousel-info-wrap item">
                <img src="/styles/images/profile/chef-9.jpg" className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                  <h4 className="mb-2">Gordon Ramsay <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid" alt="" /></h4>
                  <span className="badge">Đầu bếp</span>
                  <span className="badge">Ban giám khảo</span>
                </div>
                <div className="social-share">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-linkedin"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-whatsapp"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="owl-carousel-info-wrap item">
                <img src="/styles/images/profile/chef2.jpg" className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                  <h4 className="mb-2">Dương Huy Khải <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid" alt="" /></h4>
                  <span className="badge">Đầu bếp</span>
                </div>
                <div className="social-share">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-twitter"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-facebook"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="owl-carousel-info-wrap item">
                <img src="/styles/images/profile/chef-5.jpg" className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                  <h4 className="mb-2">Michelin <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid" alt="" /></h4>
                  <span className="badge">Đầu bếp</span>
                  <span className="badge">Quản lý</span>
                </div>
                <div className="social-share">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-twitter"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-facebook"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="owl-carousel-info-wrap item">
                <img src="/styles/images/profile/chef-6.jpg" className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                  <h4 className="mb-2">Lâm Hương</h4>
                  <span className="badge">Đầu bếp</span>
                </div>
                <div className="social-share">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-twitter"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-facebook"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="owl-carousel-info-wrap item">
                <img src="/styles/images/profile/chef-7.jpg" className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                  <h4 className="mb-2">Schuttrump <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid" alt="" /></h4>
                  <span className="badge">Đầu bếp</span>
                  <span className="badge">Chủ nhà hàng</span>
                </div>
                <div className="social-share">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-instagram"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-youtube"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="owl-carousel-info-wrap item">
                <img src="/styles/images/profile/chef-8.jpg" className="owl-carousel-image img-fluid" alt="" />
                <div className="owl-carousel-info">
                  <h4 className="mb-2">Jack Lee <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid" alt="" /></h4>
                  <span className="badge">Chủ nhà hàng</span>
                </div>
                <div className="social-share">
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-instagram"></a>
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-youtube"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
