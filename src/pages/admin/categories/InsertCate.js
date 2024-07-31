import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../firebase/axiosConfig";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function InsertCate() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    if (file) {
      const fileExtension = file.name.split('.').pop();
      const currentDate = new Date();
      const newFileName = `${currentDate.toISOString().trim()}.${fileExtension}`;
      const path = `upload/${newFileName}`;

      const storageRef = ref(storage, path);
      setIsUploading(true);

      try {
        await uploadBytes(storageRef, file);
        // const url = await getDownloadURL(storageRef);
        
        // Chỉ lưu tên tệp vào cơ sở dữ liệu
        data.images = newFileName;

        console.log('Data to be sent:', data);
        await axiosInstance.post('/api/categories', data);
        alert('Thêm thể loại thành công');
        reset();
        setFile(null);
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed');
      } finally {
        setIsUploading(false);
      }
    } else {
      alert('No file selected');
    }
  };

  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">Thêm thể loại</div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <div className="row">
                <div className="col-sm-8">
                  <div className="form-group">
                    <label htmlFor="name" className="fw-bold col-form-label">Tên thể loại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Tên thể loại..."
                      {...register('name', { required: 'Tên thể loại không được để trống' })}
                    />
                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="description" className="fw-bold col-form-label">Mô tả</label>
                    <textarea
                      className="form-control"
                      rows="9"
                      id="description"
                      {...register('description')}
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="images" className="fw-bold col-form-label">Hình ảnh</label>
                    <input
                      type="file"
                      className="form-control"
                      id="images"
                      accept="image/*"
                      onChange={onFileChange}
                    />
                    {errors.images && <small className="text-danger">{errors.images.message}</small>}
                    {file && (
                      <img
                        style={{ width: 'auto', height: '280px' }}
                        src={URL.createObjectURL(file)}
                        alt="Image preview"
                        className="img-thumbnail mt-2"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button type="submit" className="btn btn-success mx-2" disabled={isUploading}>
                  {isUploading ? 'Uploading...' : <><i className="bi bi-plus"></i> Thêm mới</>}
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
