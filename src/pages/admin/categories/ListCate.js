import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";

const ListCate = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/categories");
        setData(response.data.data);
        setFilteredData(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/cate/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa thể loại này?")) {
      try {
        await axios.delete(`http://localhost:4200/api/categories/${id}`);
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setFilteredData(updatedData);
        alert("Xóa thể loại thành công");
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Xóa thể loại thất bại");
      }
    }
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
