import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../auth/AuthContext'; 
import './login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Get navigate from useNavigate hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data);
  
      navigate('/admin');
    } catch (error) {
    
    }
  };

  return (
    <div className="container container_login mt-5">
      <div className="heading">Đăng nhập</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <input
            {...register("username", {
              required: "Vui lòng nhập tài khoản",
              minLength: {
                value: 6,
                message: "Tài khoản phải trên 6 kí tự"
              }
            })}
            className="input"
            type="text"
            placeholder="Tài khoản"
            aria-label="username"
            name='username'
          />
          {errors.username && <span className="text-danger messages">{errors.username.message}</span>}
        </div>

        <div className="form-group">
          <input
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
              minLength: {
                value: 8,
                message: "Mật khẩu phải trên 8 kí tự"
              }
            })}
            className="input"
            type="password"
            placeholder="Mật khẩu"
            aria-label="password"
            name="password"
          />
          {errors.password && <span className="text-danger messages">{errors.password.message}</span>}
        </div>

        <span className="forgot-password">
          <Link to="/auth/emailer" aria-label="Forgot Password">
            Quên mật khẩu
          </Link>
        </span>

        <input
          className="login-button"
          type="submit"
          value="Đăng nhập"
          aria-label="Đăng nhập"
        />
      </form>
    </div>
  );
};

export default Login;
