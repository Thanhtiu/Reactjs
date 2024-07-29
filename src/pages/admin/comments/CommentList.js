import React from "react";
import './CommentList.css'

function CommentList() {
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
                    <th>Số sao</th>
                    <th>Nội dung</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle text-center">1</td>
                    <td className="align-middle text-center">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-24T11%3A54%3A23.083Z.jpg?alt=media&token=e6d4d27f-265d-44c8-a217-0d684df697a2"
                        alt="avatar"
                        height={75}
                        width={75}
                      />
                    </td>
                    <td className="align-middle text-center">Gà rán ngon</td>
                    <td className="align-middle text-center">Linhdark</td>
                    <td className="align-middle text-center">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-23T14%3A43%3A55.384Z.webp?alt=media&token=229547f6-4628-4089-bfde-007ab6775948"
                        alt="avatar"
                        height={75}
                        width={75}
                      />
                    </td>
                    <td className="align-middle text-center">
                      <div className="rating">
                        <input type="radio" id="star-1" name="star-radio" value="star-1" />
                        <label htmlFor="star-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                          </svg>
                        </label>
                        <input type="radio" id="star-2" name="star-radio" value="star-2" />
                        <label htmlFor="star-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                          </svg>
                        </label>
                        <input type="radio" id="star-3" name="star-radio" value="star-3" />
                        <label htmlFor="star-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                          </svg>
                        </label>
                        <input type="radio" id="star-4" name="star-radio" value="star-4" />
                        <label htmlFor="star-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                          </svg>
                        </label>
                        <input type="radio" id="star-5" name="star-radio" value="star-5" />
                        <label htmlFor="star-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
                          </svg>
                        </label>
                      </div>
                    </td>
                    <td className="align-middle">Bài đăng này oki đó!!!!!!!</td>
                    <td className="align-middle text-center ">
                        <div className="d-flex">
                      <button className="btn btn-outline-warning">
                      <i class="bi bi-exclamation-circle"></i>
                      </button>
                      <button className="btn btn-outline-danger mx-2">
                        <i className="bi bi-trash3"></i>
                      </button>
                      </div>
                    </td>
                  </tr>
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
