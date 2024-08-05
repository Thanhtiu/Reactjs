import React from 'react';
import './home.css';
import monnuong from '../../../assets/client/styles/images/food/mon nuong.jpg';
import xao from '../../../assets/client/styles/images/food/mon xao.jpg';
import nuoc from '../../../assets/client/styles/images/food/mon nuoc.jpg';
import elsa from '../../../assets/client/styles/images/profile/woman-posing-black-dress-medium-shot.jpg';
import taylor from '../../../assets/client/styles/images/profile/smartboy.jpg';
import william from '../../../assets/client/styles/images/profile/handsome-asian-man-listening-music-through-headphones.jpg';
import verified from '../../../assets/client/styles/images/verified.png';





const posts = [
  {
    id: 1,
    title: "Gà rán",
    images: "2024-06-23T16:13:59.096Z.jpg",
    images_customers: "chef-2.jpg",
    username: "Dương Huy Khải",
    audio: "audio2.mp3",
    view: 456,
    total_comments: 20,
  },
  {
    id: 2,
    title: "Gà rán",
    images: "2024-06-23T16:13:59.096Z.jpg",
    images_customers: "chef-2.jpg",
    username: "Dương Huy Khải",
    audio: "audio2.mp3",
    view: 456,
    total_comments: 20,
  },

];

const categories = [
  {
    id: 1,
    name: "Món rán",
    images: "2024-06-23T16:13:59.096Z.jpg",
  }
];

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

      <section className="latest-podcast-section section-padding pb-0" id="section_2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Ẩm thực</h4>
            </div>
          </div>

          <div className="row">
            {posts.map((post) => (
              <div className="col-lg-6 col-12 mb-4" key={post.id}>
                <div className="custom-block d-flex" style={{ height: '300px' }}>
                  <div className="">
                    <div className="custom-block-icon-wrap">
                      <div className="section-overlay"></div>
                      <a href={`/client/menu/post_details/${post.id}`} className="custom-block-image-wrap">
                        <img
                          src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${post.images}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`}
                          className="custom-block-image img-podcast img-fluid"
                          alt={post.title}
                        />
                        <a href="#" className="custom-block-icon">
                          <i className="bi-play-fill"></i>
                        </a>
                      </a>
                    </div>
                  </div>
                  <div className="custom-block-info">
                    <div className="custom-block-top d-flex mb-1"></div>
                    <h5 className="mb-2">
                      <a href={`/client/menu/post_details/${post.id}`}>{post.title}</a>
                    </h5>
                    <div className="profile-block d-flex">
                      <img
                        src={william} style={{height: '50px'}}
                        className="profile-block-image img-fluid"
                        alt={post.username}
                      />
                      <p>
                        <img src={verified} className="verified-image img-fluid" alt="Verified" />
                        <strong>{post.username}</strong>
                      </p>
                    </div>
                    <div className="">
                      <audio
                        controls
                        loop
                        src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/audio%2F${post.audio}?alt=media&token=73f7ac89-bf7a-4245-805b-b37323ff0bf9`}
                      ></audio>
                    </div>
                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                      <p className="bi-headphones me-1">
                        <span>{post.view}</span>
                      </p>
                      <a href="#" className="bi-heart me-1">
                        <span>{post.total_comments}</span>
                      </a>
                      <a href={`/client/menu/post_details/${post.id}`} className="bi-chat me-1">
                        <span>{post.total_comments}</span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column ms-auto">
                    <a href="#" className="badge ms-auto">
                      <i className="bi bi-bookmark"></i>
                    </a>
                    <a href="#" className="badge ms-auto">
                      <i className="bi bi-share-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="#">
            <button className="shadow rounded-5">
              <span>Xem tất cả</span>
            </button>
          </a>
        </div>
      </div>
    </section>
    <section className="topics-section section-padding pb-0" id="section_3">
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
    </section>

      <section className="trending-podcast-section section-padding pt-0">
        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-12">
              <div className="section-title-wrap mb-5 mt-3">
                <h4 className="section-title">Chủ đề thịnh hành</h4>
              </div>
            </div>

            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
              <div className="custom-block custom-block-full">
                <div className="custom-block-image-wrap">
                  <a href="#">
                    <img src={monnuong} className="custom-block-image img-fluid"
                      alt="" />
                  </a>
                </div>

                <div className="custom-block-info">
                  <h5 className="mb-2">
                    <a href="#">
                      Món nướng
                    </a>
                  </h5>

                  <div className="profile-block d-flex">
                    <img src={elsa} style={{height: '50px'}}
                      className="profile-block-image img-fluid" alt="" />

                    <p>Elsa
                      <strong>Chuyên gia</strong>
                    </p>
                  </div>

                  <p className="mb-0">Chuyên gia bình phẩm về những món đồ nướng</p>

                  <div className="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" className="bi-headphones me-1">
                      <span>100k</span>
                    </a>


                    <a href="#" className="bi-heart me-1" onclick="handleLikeClick(event)">
                      <span>0</span>
                    </a>
                    <div id="message"></div>


                    <a href="#" className="bi-chat me-1">
                      <span>924k</span>
                    </a>
                  </div>
                </div>

                <div className="social-share d-flex flex-column ms-auto">
                  <a href="#" className="badge ms-auto">
                    <i className="bi-heart"></i>
                  </a>

                  <a href="#" className="badge ms-auto">
                    <i className="bi bi-share-fill"></i>

                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
              <div className="custom-block custom-block-full">
                <div className="custom-block-image-wrap">
                  <a href="#">
                    <img src={xao} className="custom-block-image img-fluid" alt="" />
                  </a>
                </div>

                <div className="custom-block-info">
                  <h5 className="mb-2">
                    <a href="#">
                      Món xào
                    </a>
                  </h5>

                  <div className="profile-block d-flex">
                    <img src={taylor} style={{height: '50px'}} className="profile-block-image img-fluid"
                      alt="" />

                    <p>
                      Taylor
                      <img src="" className="verified-image img-fluid" alt="" />
                      <strong>Chuyên gia</strong>
                    </p>
                  </div>

                  <p className="mb-0">Chuyên gia bình phẩm về những món xào</p>

                  <div className="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" className="bi-headphones me-1">
                      <span>100k</span>
                    </a>

                    <a href="#" className="bi-heart-fill me-1 text-danger">
                      <span>2.5k</span>
                    </a>

                    <a href="#" className="bi-chat me-1">
                      <span>924k</span>
                    </a>
                  </div>
                </div>

                <div className="social-share d-flex flex-column ms-auto">
                  <a href="#" className="badge ms-auto">
                    <i className="bi-heart"></i>
                  </a>

                  <a href="#" className="badge ms-auto">
                    <i className="bi bi-share-fill"></i>

                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="custom-block custom-block-full">
                <div className="custom-block-image-wrap">
                  <a href="#">
                    <img src={nuoc} className="custom-block-image img-fluid" alt="" />
                  </a>
                </div>

                <div className="custom-block-info">
                  <h5 className="mb-2">
                    <a href="#">
                      Món nước
                    </a>
                  </h5>

                  <div className="profile-block d-flex">
                    <img src={william} style={{height: '50px'}}
                      className="profile-block-image img-fluid" alt="" />

                    <p>
                      William
                      <img src="images/verified.png" className="verified-image img-fluid" alt="" />
                      <strong>Vlogger</strong>
                    </p>
                  </div>

                  <p className="mb-0">Chuyên gia về quay vlog ẩm thực những món nước</p>

                  <div className="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" className="bi-headphones me-1">
                      <span>100k</span>
                    </a>

                    <a href="#" className="bi-heart me-1">
                      <span>2.5k</span>
                    </a>

                    <a href="#" className="bi-chat me-1">
                      <span>924k</span>
                    </a>
                  </div>
                </div>

                <div className="social-share d-flex flex-column ms-auto">
                  <a href="#" className="badge ms-auto">
                    <i className="bi-heart"></i>
                  </a>

                  <a href="#" className="badge ms-auto">
                    <i className="bi bi-share-fill"></i>

                  </a>
                </div>
              </div>
            </div>





          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
