import React from "react";

function InsertCate() {
  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">Thêm thể loại</div>
          <div className="card-body">
            <form className="form" enctype="multipart/form-data">
              <div className="row">
                <div className="col-sm-6">
                  <label>Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Tiêu đề..."/>
                </div>
                <div className="col-sm-6">
                  <label>Hình ảnh</label>
                  <input
                    type="file"
                    className="form-control"
                    id="images"
                    name="images"/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-12">
                  <label>Mô tả</label>
                  <textarea
                    className="form-control"
                    rows="12"
                    id="description"
                    name="description"></textarea>
                </div>
              </div>
              <div className="text-end mt-3">
                <button type="button" id="btn" className="btn btn-success">
                  Thêm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertCate;
