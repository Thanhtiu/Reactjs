import React from 'react';

function ListCate() {
    return (
        <div className='row m-auto'>
            <div className='col-lg-12'>
                <div className='card'>
                    <div className='card-header'>Danh sách</div>
                    <div className='card-body'>
                        <div className='table-responsive pt-3'>
                            <table className='table table-bordered text-center'>
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
                                    <tr>
                                        <td className='align-middle text-center'>1</td>
                                        <td className='align-middle text-center'>J97</td>
                                        <td className='align-middle text-center'><img src="https://media.baoquangninh.vn/upload/image/202308/medium/2114869_1e4c4eb3eb44aa1362885c7d76eb976b.jpg" alt="avata" height={75} width={75}></img></td>
                                        <td className='align-middle text-center'>1</td>
                                        <td className='align-middle text-center'>1</td>
                                        <td className='align-middle text-center'>1</td>
                                        <td className='align-middle text-center'>
                                            <button className='btn btn-success'><i class="bi bi-pencil-square"></i></button>
                                            <button className='btn btn-danger mx-2'><i class="bi bi-trash3"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCate;