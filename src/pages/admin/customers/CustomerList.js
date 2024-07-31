import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../firebase/axiosConfig'; 
import { DialogService } from "../../../services/common/DialogService";

const CustomerList = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axiosInstance.get('/api/customers');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        setErrorMessage('Error fetching customers');
      }
    };

    fetchCustomers();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/customers/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/customers/${id}`);
      setData(data.filter(item => item.id !== id));
      setSuccessMessage('Xóa khách hàng thành công !!!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 1000); 
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Khách hàng này không thể xóa.');
      } else {
        console.error('Error deleting customer:', error);
        setErrorMessage('Đã xảy ra lỗi khi cố gắng xóa khách hàng.');
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 1000); 
  
    }
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
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            <div className="table-responsive pt-3">
              <table className="table table-striped table-bordered text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Ảnh đại diện</th>
                    <th>Tài khoản</th>
                    <th>Họ và Tên</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td className='align-middle text-center'>{index + 1}</td>
                      <td className='align-middle text-center'>
                        <img
                          src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${item.images}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`}
                          width="80px"
                          height="80px"
                          alt=""
                          className="rounded-circle"
                        />
                      </td>
                      <td className='align-middle text-center'>{item.username}</td>
                      <td className='align-middle text-center'>{item.full_name}</td>
                      <td className='align-middle text-center'>{item.email}</td>
                      <td className='align-middle text-center'>
                        <button
                          className="btn btn-success mx-2"
                          onClick={() => handleEdit(item.id)}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="bi bi-trash3"></i>
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
