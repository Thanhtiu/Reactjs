import React from "react"

function InsertCustomers() {
    return (
        <div className="row m-auto">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">Thêm khách hàng</div>
                    <div className="card-body">
                        <form >
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label for="username" className="fw-bold col-form-label">Tài Khoản</label>
                                            <input type="text" formControlName="username"
                                                className="form-control" id="username" name="username" placeholder="Tài khoản...." autofocus />
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="full_name" className="fw-bold col-form-label">Họ và tên</label>
                                            <input type="text" formControlName="full_name"
                                                className="form-control" id="full_name" name="full_name" placeholder="Họ Và Tên..." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label for="email" className="fw-bold col-form-label">Email</label>
                                            <input type="email" formControlName="email"
                                                className="form-control" id="email" name="email" placeholder="Gmail..." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="fw-bold col-form-label">Vai trò</label>
                                            <div className="border p-3 rounded">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="role" formControlName="role" id="roleUser" value="user" />
                                                    <label className="form-check-label" for="roleUser">Người dùng</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="role" formControlName="role" id="roleAdmin" value="admin" />
                                                    <label className="form-check-label" for="roleAdmin">Admin</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="fw-bold col-form-label">Giới tính</label>
                                            <div className="border p-3 rounded">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" formControlName="gender" id="genderMale" value="0" />
                                                    <label className="form-check-label" for="genderMale">Nam</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" formControlName="gender" id="genderFemale" value="1" />
                                                    <label className="form-check-label" for="genderFemale">Nữ</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label for="password" className="fw-bold col-form-label">Mật khẩu</label>
                                            <input type="password" formControlName="password"
                                                className="form-control" id="password" name="password" placeholder="Mật Khẩu..." />
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="confirm_password" className="fw-bold col-form-label">Xác nhận mật khẩu</label>
                                            <input type="password" formControlName="confirm_password"
                                                className="form-control" id="confirm_password" name="confirm_password" placeholder="Xác Nhận Mật Khẩu..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <label for="img" className="fw-bold col-form-label">Hình ảnh</label>
                                    <input type="file" formControlName="images"
                                        className="form-control" id="img" accept="image/*" name="image" />
                                    <img style={{ width: 'auto', height: '280px' }} src="https://cdn.diemnhangroup.com/hocspaonline.edu.vn/2023/11/tieu-su-tiktoker-le-bong-1.jpg" alt="Image preview" className="img-thumbnail mt-2" />
                                    {/* <progress className="w-100"  max="100"></progress> */}
                                </div>
                            </div>
                            <div className="text-end mt-3">
                                <button type="button" id="btn" className="btn btn-primary mx-2">
                                    <i className="bi bi-plus"></i> Thêm mới
                                </button>
                                <button type="reset" id="btn" className="btn btn-warning">
                                    Nhập lại
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InsertCustomers;