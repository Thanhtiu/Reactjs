import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Home() {
  const chartContainer = useRef(null); // Ref to hold the chart canvas

  useEffect(() => {
    const months = new Array(12).fill('').map((_, index) => `Tháng ${index + 1}`);
    const lineChartData = {
      labels: months, // Correctly assigning the months array to labels
      datasets: [{
        label: 'Bài đăng',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Số khách hàng',
        data: [0, 5, 55, 55, 14, 14, 56],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      }]
    };

    // Get canvas context
    const ctx = chartContainer.current.getContext('2d');

    // Initialize chart
    const chart = new Chart(ctx, {
      type: 'line',
      data: lineChartData,
    });

    return () => {
      chart.destroy(); // Clean up chart on component unmount
    };
  }, []); // Empty dependency array ensures useEffect runs once

  return (
    <div className="container-fluid" id="container-wrapper">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 font-weight-bold text-warning">Trang chủ</h1>
        <ol className="breadcrumb">
          {/* Breadcrumb items if needed */}
        </ol>
      </div>

      <div className="row mb-3">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Tổng sản phẩm</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800" id="count_products">0</div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    {/* Additional text if needed */}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Tổng đơn đặt hàng</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800" id="total-orders">0</div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    {/* Additional text if needed */}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-shopping-cart fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Tổng người dùng</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    {/* Additional text if needed */}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-info"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Tổng bình luận</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">0</div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    {/* Additional text if needed */}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-comments fa-2x text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12 col-md-12 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Thống kê số lượng
                  </div>
                  <canvas ref={chartContainer}></canvas>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    {/* Additional text if needed */}
                  </div>
                </div>
                <div className="col-auto">
                  {/* Icon or content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Quay lại</button>
              <a href="../LTShop/index.html" className="btn btn-primary">Đăng xuất</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
