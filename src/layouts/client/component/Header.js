import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthClient } from '../../../pages/client/login/AuthContext'; 
import { DialogService } from '../../../services/common/DialogService';
function Header() {
  const [categories, setCategories] = useState([]);
  const { isLoggedIn, customer, logout } = useAuthClient();
  const navigate = useNavigate();

  useEffect(() => {
      const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/categories"); 
        setCategories(response.data.data); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [isLoggedIn, customer]);

  const handleLogout = () => {

      DialogService.success('Đăng xuất thành công');
      setTimeout(() => {
        logout(); 
        navigate('/login')
      }, 1500);

  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand me-lg-5 me-0" to="/">
          <img src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2Ficon.png?alt=media&token=a5846c3a-f685-4365-a3d7-9a1e8152f14e" className="logo-image img-fluid" alt="templatemo pod talk" />
        </Link>

        <div className="custom-search">
          <form action="/client/search" method="get" className="custom-form search-form flex-fill me-3" role="search">
            <div className="input-group input-group-lg">
              <input name="message" type="search" className="border-0 p-2 rounded-start" id="message" placeholder="Tìm Kiếm..." aria-label="Search" />
              <button type="submit" className="input-group-text" id="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
          <div className="dropdown list-inline bg-gradient rounded-3" id="searchSuggestions">
            <ul id="suggestionList" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* Your dropdown content here */}
            </ul>
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex align-items-center" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Trang chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Về chúng tôi</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/client/menu/product" id="navbarLightDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">Thể loại</Link>
              <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link className="dropdown-item" to={`/categories/${category.id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Liên hệ</Link>
            </li>
          </ul>

          <div className="nav-item dropdown">
            {isLoggedIn ? (
              <>
                <Link className="nav-link dropdown-toggle btn custom-btn custom-border-btn smoothscroll rounded-end-5 rounded-start-5" to="#"
                  id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {customer && (
                    <img
                      className="img-profile rounded-circle"
                      src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${customer[0].images}?alt=media`}
                      style={{ maxWidth: "30px" }}
                      alt="profile"
                    />
                  )}
                </Link>
                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/account">{customer[0].username}</Link></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button></li>
                </ul>
              </>
            ) : (
              <>
                <Link className="nav-link dropdown-toggle btn custom-btn custom-border-btn smoothscroll rounded-end-5 rounded-start-5" to="#"
                  id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fs-4 bi bi-person-circle"></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/login">Đăng nhập</Link></li>
                  <li><Link className="dropdown-item" to="/register">Đăng ký</Link></li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
