import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../firebase/axiosConfig'; 
import { DialogService } from "../../../services/common/DialogService";

import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
const CustomerList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;
 
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axiosInstance.get('/api/customers');
        setData(response.data.data);
        setFilteredData(response.data.data);
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
    const item = 'customers'; 
  
    DialogService.showConfirmationDialog(item, id)
      .then((confirmed) => {
        if (confirmed) {
          setData(data.filter(item => item.id !== id));
          DialogService.success('Xóa khách hàng thành công !!!');
        } 
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          DialogService.error('Khách hàng này không thể xóa.');
        } else {
          console.error('Error deleting customer:', error);
          DialogService.error('Đã xảy ra lỗi khi cố gắng xóa khách hàng.');
        }
      });
  };
  
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
    const lowercasedTerm = term.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.username.toLowerCase().includes(lowercasedTerm) ||
        item.images.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredData(filtered);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
            Danh sách
            <Search onSearch={handleSearch} />
          </div>
          <div className="card-body">
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
                  {currentItems.map((item, index) => (
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
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
