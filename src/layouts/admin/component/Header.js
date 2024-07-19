import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  // State for each dropdown
  const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);
  const [isEnvelopeDropdownOpen, setIsEnvelopeDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Toggle function for each dropdown
  const toggleBellDropdown = () => {
    setIsBellDropdownOpen(!isBellDropdownOpen);
    // Close other dropdowns
    setIsEnvelopeDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleEnvelopeDropdown = () => {
    setIsEnvelopeDropdownOpen(!isEnvelopeDropdownOpen);
    // Close other dropdowns
    setIsBellDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    // Close other dropdowns
    setIsBellDropdownOpen(false);
    setIsEnvelopeDropdownOpen(false);
  };

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsBellDropdownOpen(false);
    setIsEnvelopeDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
      <button
        id="sidebarToggleTop"
        className="btn btn-link rounded-circle mr-3"
        onClick={closeAllDropdowns}
      >
        <i className="fa fa-bars"></i>
      </button>
      <ul className="navbar-nav ml-auto">
        {/* Bell Dropdown */}
        <li className={`nav-item dropdown no-arrow ${isBellDropdownOpen ? 'show' : ''}`}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            onClick={toggleBellDropdown}
            aria-haspopup="true"
            aria-expanded={isBellDropdownOpen ? 'true' : 'false'}
          >
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter"></span>
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              isBellDropdownOpen ? 'show' : ''
            }`}
          >
            <h6 className="dropdown-header"></h6>
            <a className="dropdown-item text-center small text-gray-500" href="#">
              Xem tất cả
            </a>
          </div>
        </li>

        {/* Envelope Dropdown */}
        <li className={`nav-item dropdown no-arrow mx-1 ${isEnvelopeDropdownOpen ? 'show' : ''}`}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            onClick={toggleEnvelopeDropdown}
            aria-haspopup="true"
            aria-expanded={isEnvelopeDropdownOpen ? 'true' : 'false'}
          >
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-warning badge-counter"></span>
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              isEnvelopeDropdownOpen ? 'show' : ''
            }`}
          >
            <h6 className="dropdown-header">Thư</h6>
            <a className="dropdown-item text-center small text-gray-500" href="#">
              Xem thêm tin nhắn
            </a>
          </div>
        </li>

        {/* Profile Dropdown */}
        <li className={`nav-item dropdown no-arrow ${isProfileDropdownOpen ? 'show' : ''}`}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            onClick={toggleProfileDropdown}
            aria-haspopup="true"
            aria-expanded={isProfileDropdownOpen ? 'true' : 'false'}
          >
            <img
              className="img-profile rounded-circle"
              src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-24T11%3A57%3A02.662Z.png?alt=media&token=ad47e197-8b3b-42c2-937e-5f8dc783be85"
              style={{ maxWidth: "60px" }}
              alt="profile"
            />
            <span className="ml-2 d-none d-lg-inline text-white small">Admin</span>
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              isProfileDropdownOpen ? 'show' : ''
            }`}
          >
            <a className="dropdown-item font-weight-bold" href="./infor.html">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-info"></i>
              Thông tin
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item font-weight-bold"
              href="javascript:void(0);"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-danger"></i>
              Đăng xuất
            </a>
          </div>
        </li>
      </ul>

      {/* Logout Modal */}
      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelLogout">Xác Nhận!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Bạn muốn thoát?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary" data-dismiss="modal">
                Quay lại
              </button>
              <a href="../LTShop/index.html" className="btn btn-primary">
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
