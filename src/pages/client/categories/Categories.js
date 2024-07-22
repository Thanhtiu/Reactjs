import React from 'react';
import { Link } from 'react-router-dom';
function Categories() {
    return (
        <main>
            <header className="site-header d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 text-center">

                            <h2 className="mb-0">Ẩm thực</h2>
                        </div>
                    </div>
                </div>
            </header>
            <section className="trending-podcast-section section-padding pt-0">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12">
                            <div className="section-title-wrap mb-5 mt-3">
                                <h4 className="section-title">Chủ đề thịnh hành</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-4 mt-4 mb-lg-0">
                            <div className="custom-block custom-block-full">
                                <div className="custom-block-image-wrap">
                                    <Link to="/categories-detail">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-23T14%3A40%3A34.669Z.jpg?alt=media&token=e56f877d-977a-4081-9d6e-4ad5e65c5b7e"
                                            className="custom-block-image img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="custom-block-info">
                                    <h5 className="mb-2">
                                        <Link to="/categories-detail">
                                            Thức ăn nhanh
                                        </Link>
                                    </h5>
                                    <div className="profile-block d-flex">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-23T16%3A36%3A16.088Z.jpg?alt=media&token=3fcf238e-0058-40c0-b15d-5867d5586cf5"
                                            className="profile-block-image " alt="" />
                                        <p>
                                            Denek
                                            <strong>Người đăng</strong>
                                        </p>
                                    </div>
                                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                                        <a href="#" className="bi-headphones me-1">
                                            <span>1</span>
                                        </a>
                                        <a href="#" className="bi-heart me-1">
                                            <span>1</span>
                                        </a>
                                        <a href="#" className="bi-chat me-1">
                                            <span>1</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="social-share d-flex flex-column ms-auto">
                                    <a href="#" className="badge ms-auto">
                                        <i className="bi-heart"></i>
                                    </a>

                                    <a href="#" className="badge ms-auto">
                                        <i className="bi-bookmark"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default Categories;