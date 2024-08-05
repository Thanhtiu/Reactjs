import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Post() {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [showAll, setShowAll] = useState(false); // State to control whether to show all posts
    const [showAllPosts, setShowAllPosts] = useState(false); // State to control the view of all posts

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get("http://localhost:4200/api/post_home_client");
                setData(response.data.data);
                setFilteredData(response.data.data); // Ensure this is also defined if used
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPost();
    }, []);

    const fetchAllPosts = async () => {
        try {
            const response = await axios.get("http://localhost:4200/api/get_All");
            setAllData(response.data.data);
            setShowAllPosts(true);
        } catch (error) {
            console.error("Error fetching all posts:", error);
        }
    };

    const handleLikeClick = (event) => {
        event.preventDefault();
    
    };

    const handleToggleClick = () => {
        if (showAllPosts) {
          
            setShowAllPosts(false);
        } else {
        
            fetchAllPosts();
        }
        setShowAll(!showAll); 
    };

    const postsToDisplay = showAllPosts ? allData : data.slice(0, 6); 

    return (
        <section className="trending-podcast-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="section-title-wrap mb-5 mt-3">
                            <h4 className="section-title">Chủ đề thịnh hành</h4>
                        </div>
                    </div>

                    {postsToDisplay.map((post) => (
                        <div className="col-lg-4 col-12 mb-4 mb-lg-0 mt-2" key={post.id}>
                            <div className="custom-block custom-block-full">
                                <div className="custom-block-image-wrap">
                                    <Link to={`/getId_post/${post.id}`}>
                                        <img
                                            src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${post.images}?alt=media`}
                                            className="custom-block-image img-fluid"
                                            alt={post.title}
                                        />
                                    </Link>
                                </div>

                                <div className="custom-block-info">
                                    <h5 className="mb-2">
                                        <a href={`/getId_post/${post.id}`}>
                                            {post.title}
                                        </a>
                                    </h5>

                                    <div className="profile-block d-flex">
                                        <img
                                            src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${post.images_customers}?alt=media`}
                                            style={{ height: '50px' }}
                                            className="profile-block-image img-fluid"
                                            alt={post.username}
                                        />
                                        <p>
                                            {post.username}
                                            <strong>Chuyên gia</strong> {/* Update based on your data */}
                                        </p>
                                    </div>

                                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                                        <a href="#" className="bi-headphones me-1">
                                            <span>{post.view}</span>
                                        </a>
                                        <a href="#" className="bi-heart me-1" onClick={handleLikeClick}>
                                            <span>{post.likes}</span>
                                        </a>
                                        <div id="message"></div>
                                        <a href="#" className="bi-chat me-1">
                                            <span>{post.comments}</span>
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
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={handleToggleClick} className="shadow rounded-5">
                        <span>{showAllPosts ? "Đóng lại" : "Xem tất cả"}</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Post;
