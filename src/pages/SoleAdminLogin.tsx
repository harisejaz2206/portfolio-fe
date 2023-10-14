import { useFormik } from 'formik';
import React, {useEffect} from 'react';
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
import Typewriter from 'typewriter-effect';

type FormData = {
  email: string;
  password: string;
  role: string;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SoleAdminLogin: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();

  const handleSuccess = (result: any) => {
    const token = result.payload.payload.token.accessToken;
    HttpService.setToken(token);
    localStorage.setItem('token', token);
    navigate(result.payload.payload.user ? '/sole-admin' : '/haris');
    Toast.fire({
      icon: 'success',
      title: 'Logged In Successfully',
    });
  };

  const formik = useFormik<FormData>({
    initialValues: {
      email: '',
      password: '',
      role: 'sole-admin',
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(login(values))
        .then((result) => handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik }))
        .catch(handleError);
    },
  });

  return (
    <div className="flex h-screen">
     <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-950 w-1/3 min-h-screen flex flex-col items-center justify-center text-white">
  <div className="text-center mb-8">
    <img
      src="/logo192.png" // Replace with your logo image source
      alt="Company Logo"
      className="w-16 h-16 mb-2 -mt-8"
    />
  </div>
  <div className="text-center">
    <h1 className="text-3xl font-bold text-white mb-2">
      <span className="text-white">
      <Typewriter
          options={{
            strings: ['Welcome Back!', 'Sole-Chain Admin'],
            autoStart: true, // Start typing automatically
            loop: true, // Loop the animation
            delay: 100, // Delay between each character typing
            deleteSpeed: 50, // Speed of character deletion
          }}
        />
      </span>
    </h1>
   <div className="text-md text-gray-200 mb-8 mt-auto">
    <p>
      <span className="ml-2 block">
      Your Rx for Seamless Management
      </span>
    </p>
    </div>
  </div>
</div>
      {/* Right-side login form */}
<div className="w-3/5 bg-white flex items-center justify-center">
  <div className="max-w-md w-full p-6">
    <form onSubmit={formik.handleSubmit}>
      <div className="-mb-2">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold">
          Email Address:
        </label>
        <InputField
          formik={formik}
          placeholder="Email"
          name="email"
          type="email"
          className="rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full p-2"
        />
      </div>
      <div className="-mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold">
          Password:
        </label>
        <InputField
          formik={formik}
          placeholder="Password"
          name="password"
          type="password"
          className="rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full p-2"
        />
      </div>
      <div className="mb-4 text-right mr-1 text-sm">
        <a className="text-indigo-600 underline" href="/forgot-password">
          Forgot your password?
        </a>
      </div>
      <div className="mb-1">
       
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-full transition-colors duration-300"
        >
          Log In
        </button>
       
      </div>
    </form>
  </div>
</div>
    </div>
  );
};

export default SoleAdminLogin;
