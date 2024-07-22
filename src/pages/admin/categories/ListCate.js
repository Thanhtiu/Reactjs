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
                                        <th>Tên</th>
                                        <th>Hình ảnh</th>
                        
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='align-middle text-center'>1</td>
                                        <td className='align-middle text-center'>Món chiên</td>
                                        <td className='align-middle text-center'><img src="https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F2024-06-24T11%3A54%3A23.083Z.jpg?alt=media&token=e6d4d27f-265d-44c8-a217-0d684df697a2" alt="avata" height={75} width={75}></img></td>
                                    
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