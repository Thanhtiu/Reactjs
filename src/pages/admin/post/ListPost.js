import React, { useEffect, useState } from 'react';
import axios from "axios";
import axiosInstance from '../firebase/axiosConfig';
import { useNavigate } from 'react-router-dom';
function ListPost() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axiosInstance.get('/api/post');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin/edit/post/${id}`);
    };
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa thể loại này?")) {
            try {
                await axiosInstance.delete(`/api/post/${id}`);
                setData(data.filter(item => item.id !== id));
                alert("Xóa thể loại thành công");
            } catch (error) {
                console.error("Error deleting category:", error);
                alert("Xóa thể loại thất bại");
            }
        }
    };
    return (
        <div className='row m-auto'>
            <div className='col-lg-12'>
                <div className='card'>
                    <div className='card-header'>Danh sách</div>
                    <div className='card-body'>
                        <div className='table-responsive pt-3'>
                            <table className='table table-striped table-bordered text-center'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tiêu đề</th>
                                        <th>Hình ảnh</th>
                                        <th>Tổng yêu thích</th>
                                        <th>Tổng bình luận</th>
                                        <th>Tổng chia sẻ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className='align-middle text-center'>{index + 1}</td>
                                            <td className='align-middle text-center'>{item.title}</td>
                                            <td className='align-middle text-center'>
                                                <img src={`https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F${encodeURIComponent(item.images)}?alt=media&token=c6dc72e8-a1b0-41bb-b1f5-84f63f7397e9`} alt="avata" height={75} width={75} className='rounded-circle'></img>
                                            </td>
                                            <td className='align-middle text-center'>{item.total_favorites}</td>
                                            <td className='align-middle text-center'>{item.total_comments}</td>
                                            <td className='align-middle text-center'>{item.total_shares}</td>
                                            <td className='align-middle text-center'>
                                                <button className='btn btn-success' onClick={() => handleEdit(item.id)}><i className="bi bi-pencil-square"></i></button>
                                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}><i className="bi bi-trash3"></i></button>
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
    )
}

export default ListPost;