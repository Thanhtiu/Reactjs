import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import { DialogService } from '../../../services/common/DialogService';

const ListCate = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4200/api/categories");
      setData(response.data.data);
      setFilteredData(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {

    fetchCategories();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/cate/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const item = 'categories';
    DialogService.showConfirmationDialog(item, id)
        .then((confirmed) => {
            if (confirmed) {
                setData(data.filter(item => item.id !== id));
                DialogService.success('Xóa thể loại thành công !!!');
                fetchCategories();
            } 
        })
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                DialogService.error('Thể loại này không thể xóa.');
            } else {
                console.error('Error deleting categories:', error);
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
        item.name.toLowerCase().includes(lowercasedTerm) ||
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
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Hình ảnh</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${encodeURIComponent(
                            item.images
                          )}?alt=media`}
                          width="80px"
                          height="80px"
                          alt=""
                          className="rounded-circle"
                        />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-success mx-2"
                          onClick={() => handleEdit(item.id)}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button
                          className="btn btn-outline-danger mx-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="bi bi-trash"></i>
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

export default ListCate;
