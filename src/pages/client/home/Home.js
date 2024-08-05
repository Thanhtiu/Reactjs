import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';
import monnuong from '../../../assets/client/styles/images/food/mon nuong.jpg';
import xao from '../../../assets/client/styles/images/food/mon xao.jpg';
import nuoc from '../../../assets/client/styles/images/food/mon nuoc.jpg';
import elsa from '../../../assets/client/styles/images/profile/woman-posing-black-dress-medium-shot.jpg';
import taylor from '../../../assets/client/styles/images/profile/smartboy.jpg';
import william from '../../../assets/client/styles/images/profile/handsome-asian-man-listening-music-through-headphones.jpg';
import verified from '../../../assets/client/styles/images/verified.png';
import { Link } from 'react-router-dom';
import Post from '../post/Post'

function Home() {
  
  return (
    <div>
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
                  <img src="/styles/images/profile/chef-9.jpg" className="owl-carousel-image img-fluid" alt=""/>

                    <div className="owl-carousel-info">
                      <h4 className="mb-2">Gordon Ramsay
                        <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid"
                          alt=""/>

                      </h4>

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
                  <img src="/styles/images/profile/chef2.jpg" className="owl-carousel-image img-fluid" alt=""/>

                    <div className="owl-carousel-info">
                      <h4 className="mb-2">
                        Dương Huy Khải
                        <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid"
                          alt=""/>
                      </h4>

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
                  <img src="/styles/images/profile/chef-5.jpg" className="owl-carousel-image img-fluid" alt=""/>

                    <div className="owl-carousel-info">
                      <h4 className="mb-2">
                        Michelin
                        <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid"
                          alt=""/>
                      </h4>

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
                  <img src="/styles/images/profile/chef-6.jpg" className="owl-carousel-image img-fluid" alt=""/>

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
                  <img src="/styles/images/profile/chef-7.jpg" className="owl-carousel-image img-fluid" alt=""/>

                    <div className="owl-carousel-info">
                      <h4 className="mb-2">Schuttrump
                        <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid"
                          alt=""/>
                      </h4>

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
                  <img src="/styles/images/profile/chef-8.jpg" className="owl-carousel-image img-fluid" alt=""/>

                    <div className="owl-carousel-info">
                      <h4 className="mb-2">
                        Jack Lee
                        <img src="/styles/images/verified.png" className="owl-carousel-verified-image img-fluid"
                          alt=""/>
                      </h4>

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

     {/* categories */}
     <Post />
     

    

    {/* <section className="topics-section section-padding pb-0" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Chủ đề</h4>
            </div>
          </div>

          {categories.map((cate) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0" key={cate.id}>
              <div className="custom-block custom-block-overlay">
                <a href={`/client/menu/product/${cate.id}`} className="custom-block-image-wrap">
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${cate.images}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`}
                    className="custom-block-image img-fluid"
                    alt={cate.name}
                  />
                </a>
                <div className="custom-block-info custom-block-overlay-info">
                  <h5 className="mb-1">
                    <a href={`/client/menu/product/${cate.id}`}>
                      {cate.name}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section> */}

   

    

     
    </div>
  );
}

export default Home;
