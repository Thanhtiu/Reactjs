import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CommentList.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

function CommentList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/comment");

        // Ensure data is handled correctly
        if (response.data && Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          setData([]); // If the data field is not an array, default to empty
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("Failed to fetch comments."); // Set error message if the request fails
      } finally {
        setLoading(false); // Set loading to false when the request is done
      }
    };

    fetchComment();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/comment/edit/${id}`);
  };

  if (loading) {
    return <Spinner/>

  }

  if (error) {
    return <div>{error}</div>; // Display error state
  }

  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">Danh sách</div>
          <div className="card-body">
            {data.length === 0 ? (
              <div className="text-center">
                <p><strong>Không có comment</strong></p>
              </div>
            ) : (
              <div className="table-responsive pt-3">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Hình ảnh</th>
                      <th>Bài đăng</th>
                      <th>Số lượng</th>
                      <th>Mới nhất</th>
                      <th>Cũ nhất</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((comment, index) => (
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
                          {comment.title}
                        </td>
                        <td className="align-middle text-center">
                          {comment.so_luong}
                        </td>
                        <td className="align-middle text-center">
                          {formatDate(comment.moi_nhat)}
                        </td>
                        <td className="align-middle text-center">
                          {formatDate(comment.cu_nhat)}
                        </td>
                        <td className="align-middle text-center">
                          <div className="d-flex">
                            <button
                              className="btn btn-outline-success mx-2"
                              onClick={() => handleEdit(comment.id)}
                            >
                              <i className="bi bi-pencil-square"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
