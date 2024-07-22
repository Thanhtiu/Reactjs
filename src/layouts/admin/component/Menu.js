import React from 'react';
import { Link } from "react-router-dom";
function Menu() {
    return (
        <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
            {/* Sidebar Brand */}
            <Link to='/admin' className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon">
                    <img src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-24T11%3A57%3A02.662Z.png?alt=media&token=ad47e197-8b3b-42c2-937e-5f8dc783be85" alt="LTShop Logo" />
                </div>
                <div className="sidebar-brand-text mx-3">ADMIN</div>
            </Link>
            <hr className="sidebar-divider my-0" />

            {/* Home */}
            <li className="nav-item">
                <Link to='/admin' className="nav-link" >
                    <i className="bi bi-houses-fill"></i>
                    <span>Trang chủ</span>
                </Link>
            </li>
            <hr className="sidebar-divider" />

            {/* Quản lý */}
            <div className="sidebar-heading">
                Quản lý
            </div>
            
            {/* Dropdown - Loại */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseBootstrap"
                    aria-expanded="false" aria-controls="collapseBootstrap">
                    <i class="far fa-fw fa-window-maximize"></i>

                    <span>Loại</span>
                    
                </a>
                <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Quản lý loại</h6>
                        <Link to='/admin/cate/insert' className="collapse-item">Thêm loại</Link>
                        <Link to='/admin/cate/list' className="collapse-item" >Danh sách</Link>
                    </div>
                </div>
                
            </li>

            {/* Dropdown - Sản phẩm */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseForm"
                    aria-expanded="false" aria-controls="collapseForm">
                    <i className="bi bi-box2-fill"></i>
                    <span>Sản phẩm</span>
                </a>
                <div id="collapseForm" className="collapse" aria-labelledby="headingForm"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Quản lý sản phẩm</h6>
                        <Link className="collapse-item" to="../admin/products/insert.html">Thêm sản phẩm</Link>
                        <a className="collapse-item" href="../admin/products/list.html">Danh sách</a>
                    </div>
                </div>
            </li>

            {/* Dropdown - Khách hàng */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseTable"
                    aria-expanded="false" aria-controls="collapseTable">
                    <i className="bi bi-person-check-fill"></i>
                    <span>Khách hàng</span>
                </a>
                <div id="collapseTable" className="collapse" aria-labelledby="headingTable"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Quản lý khách hàng</h6>
                        <a className="collapse-item" href="../admin/customers/insert.html">Thêm khách hàng</a>
                        <a className="collapse-item" href="../admin/customers/list.html">Danh sách khách hàng</a>
                    </div>
                </div>
            </li>

            {/* Hóa đơn */}
            <li className="nav-item">
                <a className="nav-link" href="../admin/orders/list.html">
                    <i className="bi bi-building"></i>
                    <span>Hóa đơn</span>
                </a>
            </li>
            
            {/* Divider */}
            <hr className="sidebar-divider" />
        </ul>
    );
}

export default Menu;
