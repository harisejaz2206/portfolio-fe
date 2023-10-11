import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { AppThunkDispatch } from '../store/rootReducer';
import { useNavigate } from 'react-router-dom';
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

const SoleAdminLogin: React.FC = () => {

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
      role: 'sole-admin'
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold">Sole Admin Login</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address:</label>
            <InputField formik={formik} placeholder="Email" name="email" type="email" className="rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <InputField formik={formik} placeholder="Password" name="password" type="password" className="rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full p-2" />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-opacity-50">
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

};

export default SoleAdminLogin;
