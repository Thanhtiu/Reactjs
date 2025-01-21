import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CommentList.css";
import { useParams, useNavigate } from "react-router-dom";
import { DialogService } from '../../../services/common/DialogService';

// Format date function
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

// CommentDetail component
function CommentDetail() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(`http://localhost:4200/api/comment/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComment();
  }, [id]);

  const handleDelete = async (id) => {
    const item = 'comment';
    DialogService.showConfirmationDialog(item, id)
      .then((confirmed) => {
        if (confirmed) {
          setData(data.filter(item => item.id !== id));
          DialogService.success('Xóa bình luận thành công !!!');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          DialogService.error('Bình luận này không thể xóa.');
        } else {
          console.error('Error deleting categories:', error);
          DialogService.error('Đã xảy ra lỗi khi cố gắng xóa khách hàng.');
        }
      });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        viewBox="0 0 24 24"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.87L12 15.77 7.82 21l1.18-6.87-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">Danh sách</div>
          <div className="card-body">
            <div className="table-responsive pt-3">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Hình ảnh</th>
                    <th>Khách hàng</th>
                    <th>Ngày bình luận</th>
                    <th>Số sao</th>
                    <th>Nội dung</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">Không có bình luận</td>
                    </tr>
                  ) : (
                    data.map((comment, index) => (
                      <tr key={comment.id}>
                        <td className="align-middle text-center">{index + 1}</td>
                        <td className="align-middle text-center">
                          <img
                            src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${comment.images}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`}
                            alt="avatar"
                            height={75}
                            width={75}
                          />
                        </td>
                        <td className="align-middle text-center">
                          {comment.username}
                        </td>
                        <td className="align-middle text-center">
                          {formatDate(comment.date)}
                        </td>
                        <td className="align-middle text-center">
                          <div className="rating-stars">
                            {renderStars(comment.rating)}
                          </div>
                        </td>
                        <td className="align-middle text-center">
                          {comment.contents}
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex">
                            <button
                              className="btn btn-outline-danger mx-2"
                              onClick={() => handleDelete(comment.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;
