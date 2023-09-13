import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { AppThunkDispatch } from '../store/rootReducer';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from '../utils/toast';
import { login } from '../app/features/auth/auth.thunk';
import { handleApiResponse } from '../utils/handleApiResponse';
import { handleError } from '../utils/catchErrorToast';
import InputField from '../components/globals/inputField';
import { selectLoading } from '../app/features/auth/auth.selector';
import { HttpService } from '../app/services/base.service';

type FormData = {
  email: string;
  password: string;
  role: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const SuperAdminLogin: React.FC = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading)


  const handleSuccess = (result: any) => {
    const token = result.payload.payload.token.accessToken;
    console.log("token", token);
    HttpService.setToken(token);
    localStorage.setItem('token', token);
    navigate(result.payload.payload.user ? '/' : '/haris');

    Toast.fire({
      icon: "success",
      title: "Logged In Successfully",
    });
  };

  const formik = useFormik<FormData>({
    initialValues: {
      email: '',
      password: '',
      role: 'super-admin',
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    onSubmit: values => {
      dispatch(login(values))
        .then((result) => handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik }))
        .catch(handleError)
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-black mb-8 tracking-wide text-shadow-lg border-custom">
          Dotbrand - Engineering Your E-Pharmacy Revolution
        </h1>
        <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white border border-gray-300 bg-gradient-to-br from-gray-100 to-white">
          <div className="mb-8 text-center">
            <img
              src="/dotbrand-admin.png"
              alt="Your Brand Logo"
              className="mx-auto h-20 mb-4"
            />
            <p className="text-red-600 text-lg font-bold">Super Admin Login</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-8">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
              <InputField formik={formik} placeholder="Email" name="email" type="email" />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
              <InputField size='sm' type="password" name="password" placeholder="Password" formik={formik} />
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                <label htmlFor="rememberMe" className="text-gray-600">Remember me</label>
              </div>
              <a href="/request-email" className="text-sm font-medium text-red-900 hover:underline">Forgot password?</a>
            </div>
            <div className="w-full mt-4 text-center">
            </div>
            <div className="mb-8 text-center">
              <button type="submit" className="w-full px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 focus:outline-none">
                {loading ? (
                  "Loading..."
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <span className="text-sm text-[#808080]">Back to <Link to="/login" className="text-red-600 text-sm font-medium justify-center">Log In</Link></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
