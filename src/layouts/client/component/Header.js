import React from 'react';
import { Link } from 'react-router-dom';

function Header({ userId, user, categories }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand me-lg-5 me-0" to="/">
          <img src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-24T11%3A57%3A02.662Z.png?alt=media&token=ad47e197-8b3b-42c2-937e-5f8dc783be85" className="logo-image img-fluid" alt="templatemo pod talk" />
        </Link>

        <div className="custom-search">
          <form action="/client/search" method="get" className="custom-form search-form flex-fill me-3" role="search">
            <div className="input-group input-group-lg">
              <input name="message" type="search" className="form-control" id="message" placeholder="Tìm Kiếm..." aria-label="Search" />
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
                <li><Link className="dropdown-item" to="/client/menu/product">Thể Loại</Link></li>
                {/* Additional dropdown items */}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/client/contact">Liên hệ</Link>
            </li>
          </ul>

          <div className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle btn custom-btn custom-border-btn smoothscroll rounded-end-5 rounded-start-5" to="#"
              id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fs-4 bi bi-person-circle"></i>
            </Link>
            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
              <li><Link className="dropdown-item" to="/client/form/login">Đăng nhập</Link></li>
              <li><Link className="dropdown-item" to="/client/form/signup">Đăng ký</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
