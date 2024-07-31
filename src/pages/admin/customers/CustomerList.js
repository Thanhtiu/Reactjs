import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const navigate = useNavigate();
  const customers = [
    {
      id: 1,
      images: 'https://image.tienphong.vn/w890/uploads/2018/04/5ad19e492c733-61b98cc4253583eef527420d81bab0ba-600x450.jpg',
      username: 'nancy',
      full_name: 'Nancy',
      email: 'nancy@example.com'
    },
    {
      id: 2,
      images: 'https://ss-images.saostar.vn/wwebp1200/2024/5/3/pc/1714738770441/vwpzo28bwb1-vc5cwalzyk2-z7sod5vif93.jpg',
      username: 'bachloc',
      full_name: 'Bạch Lộc',
      email: 'bachloc@example.com'
    }
  ];

  const handleEdit = (id) => {
    navigate(`/admin/customers/edit/${id}`);
  };

  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            Danh sách
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-body">
            <div className="table-responsive pt-3">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Ảnh đại diện</th>
                    <th>Tài khoản</th>
                    <th>Họ và Tên</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((item, index) => (
                    <tr key={item.id}>
                      <td className='align-middle text-center'>{index + 1}</td>
                      <td className='align-middle text-center'>
                        <img
                          src={item.images}
                          width="80px"
                          height="80px"
                          alt=""
                          className="rounded-circle"
                        />
                      </td>
                      <td className='align-middle text-center'>{item.username}</td>
                      <td className='align-middle text-center'>{item.full_name}</td>
                      <td className='align-middle text-center'>{item.email}</td>
                      <td className="align-middle text-center">
                        <button
                          className="btn btn-success mx-2"
                          onClick={() => handleEdit(item.id)}
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn btn-danger mx-2">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mt-3">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
