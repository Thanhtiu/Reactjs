import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../firebase/axiosConfig";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { DialogService } from '../../../services/common/DialogService';

function EditCate() {
  const { id } = useParams(); // Lấy ID từ URL
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const [fileImg, setFileImg] = useState(null);
  const [currentImgName, setCurrentImgName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axiosInstance.get(`/api/categories/${id}`);
        const category = response.data.data[0]; // Chọn phần tử đầu tiên trong mảng

        // Log dữ liệu nhận được từ API để kiểm tra
        console.log('Category data:', category);

        // Thiết lập giá trị mặc định cho form
        setValue('name', category.name || '');
        setValue('description', category.description || '');
        setCurrentImgName(category.images || '');
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    if (id) {
      fetchCategoryData();
    }
  }, [id, setValue]);

  const onFileChange = (e) => {
    setFileImg(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    setIsUploading(true);
    try {
      let imgName = currentImgName;

      if (fileImg) {
        const fileExtension = fileImg.name.split('.').pop();
        const currentDate = new Date();
        imgName = `${currentDate.toISOString().trim()}.${fileExtension}`;
        const path = `upload/${imgName}`;

        const imgRef = ref(storage, path);
        await uploadBytes(imgRef, fileImg);
      }

      // Gửi dữ liệu tới backend
      await axiosInstance.patch(`/api/categories/${id}`, {
        ...data,
        images: imgName
      });

      DialogService.success('Cập nhật thể loại thành công');
      navigate('/admin/cate/list');
    } catch (error) {
      console.error('Cập nhật thất bại:', error);
      DialogService.error('Lỗi khi sửa thể loại');
    } finally {
      setIsUploading(false);
    }
  };

  const getFirebaseImageURL = (imgName) => {
    const baseUrl = "https://firebasestorage.googleapis.com/v0/b/podcast-ba34e.appspot.com/o/upload%2F";
    return `${baseUrl}${imgName}?alt=media`;
  };

  return (
    <div className="row m-auto">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">Sửa thể loại</div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <div className="row">
                <div className="col-sm-8">
                  <div className="form-group">
                    <label htmlFor="name" className="fw-bold col-form-label">Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Tên thể loại..."
                      {...register('name', { required: 'Tên không được để trống' })}
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
                    <img
                      style={{ width: 'auto', height: '280px' }}
                      src={fileImg ? URL.createObjectURL(fileImg) : getFirebaseImageURL(currentImgName) || "https://via.placeholder.com/150"}
                      alt="Image preview"
                      className="img-thumbnail mt-2"
                    />
                  </div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button type="submit" className="btn btn-success mx-2" disabled={isUploading}>
                  {isUploading ? 'Uploading...' : <i className="bi bi-check2"></i>} Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCate;
