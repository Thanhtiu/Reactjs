import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for redirection
import { useAuth } from '../../../auth/AuthContext'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { DialogService } from '../../../services/common/DialogService';

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  const [isBellDropdownOpen, setIsBellDropdownOpen] = useState(false);
  const [isEnvelopeDropdownOpen, setIsEnvelopeDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const [userId, setUserId] = useState(null); 
  const [customerInfo, setUserInfo] = useState([]);
  
  const toggleBellDropdown = () => {
    setIsBellDropdownOpen(!isBellDropdownOpen);

    setIsEnvelopeDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleEnvelopeDropdown = () => {
    setIsEnvelopeDropdownOpen(!isEnvelopeDropdownOpen);
  
    setIsBellDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

    setIsBellDropdownOpen(false);
    setIsEnvelopeDropdownOpen(false);
  };


  const closeAllDropdowns = () => {
    setIsBellDropdownOpen(false);
    setIsEnvelopeDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const logOut = async () => {
    try {
      DialogService.success('Đăng xuất thành công');
      setTimeout(() => {
        logout(); 
      }, 1500);
    } catch (error) {
      console.error('Đăng xuất thất bại:', error);
    }
  };

  React.useEffect(() => {
    const info = localStorage.getItem('userInfo');

    if (info) {
      try {
        const userInfoArray = JSON.parse(info);

        if (Array.isArray(userInfoArray) && userInfoArray.length > 0) {
          const userInfo = userInfoArray[0]; 
          setUserId(userInfo.id);
          setUserInfo(userInfo) 
        } else {
          console.error('Dữ liệu không đúng định dạng hoặc mảng trống');
        }
      } catch (error) {
        console.error('Lỗi phân tích JSON:', error);
      }
    } else {
      console.error('Không có thông tin lưu trữ');
    }
  }, []);

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
              src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${customerInfo.images}?alt=media&token=ad47e197-8b3b-42c2-937e-5f8dc783be85`}
              style={{ maxWidth: "60px" }}
              alt="profile"
            />
            <span className="ml-2 d-none d-lg-inline text-white small">{customerInfo.full_name}</span>
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              isProfileDropdownOpen ? 'show' : ''
            }`}
          >
            <Link className="dropdown-item font-weight-bold" to={`/admin/info/${userId}`}>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-info"></i>
              Thông tin
            </Link>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item font-weight-bold"
              href="#"
              onClick={() => logOut()} // Call logOut function
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-danger"></i>
              Đăng xuất
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
