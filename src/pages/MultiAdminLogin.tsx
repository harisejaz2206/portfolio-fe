import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { AppThunkDispatch } from '../store/rootReducer';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../utils/toast';
import { login } from '../app/features/auth/auth.thunk';
import { handleApiResponse } from '../utils/handleApiResponse';
import { handleError } from '../utils/catchErrorToast';
import InputField from '../components/globals/inputField';
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

const MultiAdminLogin: React.FC = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();

  const handleSuccess = (result: any) => {
    const token = result.payload.payload.token.accessToken;
    console.log("token", token);
    HttpService.setToken(token);
    localStorage.setItem('token', token);
    navigate(result.payload.payload.user ? '/admin/' : '/haris');
    Toast.fire({
      icon: "success",
      title: "Logged In Successfully",
    });
  };

  const formik = useFormik<FormData>({
    initialValues: {
      email: '',
      password: '',
      role: 'multi-admin',
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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-6 bg-white rounded-lg">
        <div className="mb-8 text-center">
          <img
            src="/dotbrand-admin.png"
            alt="Your Brand Logo"
            className="mx-auto h-20 mb-4"
          />
          <p className="text-red-600 text-lg font-bold">Multi admin login</p>
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
          <div className="mb-8 text-center">
            <button type="submit" className="w-full px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-600 focus:outline-none">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );

};

export default MultiAdminLogin;
