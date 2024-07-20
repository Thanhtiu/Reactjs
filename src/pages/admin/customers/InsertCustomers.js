import React from "react"

function InsertCustomers() {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">Thêm khách hàng</div>
                    <div class="card-body">
                        <form >
                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label for="username" class="fw-bold col-form-label">Tài Khoản</label>
                                            <input type="text" formControlName="username"
                                                class="form-control" id="username" name="username" placeholder="Tài khoản...." autofocus />
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="full_name" class="fw-bold col-form-label">Họ và tên</label>
                                            <input type="text" formControlName="full_name"
                                                class="form-control" id="full_name" name="full_name" placeholder="Họ Và Tên..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <label for="email" class="fw-bold col-form-label">Email</label>
                                            <input type="email" formControlName="email"
                                                class="form-control" id="email" name="email" placeholder="Gmail..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label class="fw-bold col-form-label">Vai trò</label>
                                            <div class="border p-3 rounded">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="role" formControlName="role" id="roleUser" value="user" />
                                                    <label class="form-check-label" for="roleUser">Người dùng</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="role" formControlName="role" id="roleAdmin" value="admin" />
                                                    <label class="form-check-label" for="roleAdmin">Admin</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="fw-bold col-form-label">Giới tính</label>
                                            <div class="border p-3 rounded">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gender" formControlName="gender" id="genderMale" value="0" />
                                                    <label class="form-check-label" for="genderMale">Nam</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gender" formControlName="gender" id="genderFemale" value="1" />
                                                    <label class="form-check-label" for="genderFemale">Nữ</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label for="password" class="fw-bold col-form-label">Mật khẩu</label>
                                            <input type="password" formControlName="password"
                                                class="form-control" id="password" name="password" placeholder="Mật Khẩu..." />
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="confirm_password" class="fw-bold col-form-label">Xác nhận mật khẩu</label>
                                            <input type="password" formControlName="confirm_password"
                                                class="form-control" id="confirm_password" name="confirm_password" placeholder="Xác Nhận Mật Khẩu..." />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <label for="img" class="fw-bold col-form-label">Hình ảnh</label>
                                    <input type="file" formControlName="images"
                                        class="form-control" id="img" accept="image/*" name="image" />
                                    <img style={{ width: 'auto', height: '280px' }} src="https://cdn.diemnhangroup.com/hocspaonline.edu.vn/2023/11/tieu-su-tiktoker-le-bong-1.jpg" alt="Image preview" class="img-thumbnail mt-2" />
                                    {/* <progress class="w-100"  max="100"></progress> */}
                                </div>
                            </div>
                            <div class="text-end mt-3">
                                <button type="button" id="btn" class="btn btn-primary mx-2">
                                    <i class="bi bi-plus"></i> Thêm mới
                                </button>
                                <button type="reset" id="btn" class="btn btn-warning">
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