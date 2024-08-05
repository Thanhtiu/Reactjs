import React, { useEffect, useState } from "react";
import axios from "axios";
import './CommentList.css';

function CommentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/comment");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComment();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bình luận này?")) {
      try {
        await axios.delete(`http://localhost:4200/api/comment/${id}`);
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        alert("Xóa bình luận thành công");
      } catch (error) {
        console.error("Error deleting comment:", error);
        alert("Xóa bình luận thất bại");
      }
    }
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
                    <th>Bài đăng</th>
                    <th>Khách hàng</th>
                    <th>Hình ảnh</th>
                    <th>Nội dung</th>
                    <th>Số sao</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((comment, index) => (
                    <tr key={comment.id}>
                      <td className="align-middle text-center">{index + 1}</td>
                      <td className="align-middle text-center">
                        <img
                          src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${comment.images}?alt=media`}
                          alt="avatar"
                          height={75}
                          width={75}
                        />
                      </td>
                      <td className="align-middle text-center">{comment.title}</td>
                      <td className="align-middle text-center">{comment.customer_username}</td>
                      <td className="align-middle text-center">
                        <img
                          src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${comment.customer_images}?alt=media`}
                          alt="avatar"
                          height={75}
                          width={75}
                        />
                      </td>
                      <td className="align-middle text-center">{comment.contents}</td>
                      <td className="align-middle text-center">
                        <div className="rating">
                          {[...Array(5)].map((star, i) => (
                            <React.Fragment key={i}>
                              <input
                                type="radio"
                                id={`star-${i + 1}-${comment.id}`}
                                name={`star-radio-${comment.id}`}
                                value={`star-${i + 1}`}
                                checked={i + 1 === comment.rating}
                                readOnly
                              />
                              <label htmlFor={`star-${i + 1}-${comment.id}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                                </svg>
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </td>
                      <td className="align-middle text-center ">
                        <div className="d-flex">
                         
                          <button className="btn btn-outline-danger mx-2" onClick={() => handleDelete(comment.id)}>
                            <i className="bi bi-trash3"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
