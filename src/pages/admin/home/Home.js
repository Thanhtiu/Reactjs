import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

function Home() {
  const chartContainer = useRef(null);
  const [chartData, setChartData] = useState({
    labels: new Array(12).fill('').map((_, index) => `Tháng ${index + 1}`),
    datasets: [
      {
        label: 'Bài đăng',
        data: new Array(12).fill(0), 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Số khách hàng',
        data: new Array(12).fill(0), 
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
  
    Promise.all([
      fetch('http://localhost:4200/api/data_post'), 
      fetch('http://localhost:4200/api/data_customers') 
    ])
    .then(([postsResponse, customersResponse]) => Promise.all([
      postsResponse.json(),
      customersResponse.json()
    ]))
    .then(([postsData, customersData]) => {
      const months = new Array(12).fill('').map((_, index) => `Tháng ${index + 1}`);
      const postCounts = new Array(12).fill(0);
      const customerCounts = new Array(12).fill(0);

      postsData.forEach(item => {
        postCounts[item.month - 1] = item.post_count;
      });

  
      customersData.forEach(item => {
        customerCounts[item.month - 1] = item.customer_count; 
      });

      setChartData({
        labels: months,
        datasets: [
          {
            ...chartData.datasets[0],
            data: postCounts,
          },
          {
            ...chartData.datasets[1],
            data: customerCounts,
          },
        ],
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []); 

  useEffect(() => {
    const ctx = chartContainer.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: chartData,
    });

    return () => {
      chart.destroy(); 
    };
  }, [chartData]);

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
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Tổng bài đăng</div>
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
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Tổng thể loại</div>
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
