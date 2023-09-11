import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { FaFacebook, FaGoogle, FaPhone } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Toast } from '../utils/toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../store/rootReducer';
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

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('login');
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);

  const handleSuccess = (result: any) => {
    console.log("result", result);
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
      role: 'user',
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
    <div className='flex justify-center items-center  h-screen bg-gray-100'>
      <div className='bg-white rounded-lg shadow-md mt-8 flex w-full max-w-4xl'>
        <div className='w-1/3 bg-red-900'>
          <img src="/marijuana.png" alt="marijuana" className='ml-56' />
          <h1 className='text-4xl text-yellow-400 font-bold text-center'>Dotbrand</h1>
          <img src="/Frame 20.png" alt='pharmacy' className='w-auto h-auto ' />
          <div className='text-white'>
            <h2 className='text-xl ml-6 mb-2'>Login to</h2>
            <p className='relative left-6'>
              <span className='absolute top-1/2 transform -translate-y-1/2'>
                <div className='bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center'>
                  <TiTick className='text-white' />
                </div>
              </span>
              <span className='ml-6 text-sm'>Manage your orders</span>
            </p>
            <p className='relative left-6'>
              <span className='absolute top-1/2 transform -translate-y-1/2'>
                <div className='bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center'>
                  <TiTick className='text-white' />
                </div>
              </span>
              <span className='ml-6 text-sm'>Get Exclusive Deals and Offers</span>
            </p>
            <p className='relative left-6'>
              <span className='absolute top-1/2 transform -translate-y-1/2'>
                <div className='bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center'>
                  <TiTick className='text-white' />
                </div>
              </span>
              <span className='ml-6 text-sm'>Get Personalized Recommendations</span>
            </p>
          </div>

          <img src="/Group 253.png" alt="bottle" className='h-auto w-auto ml-24' />
        </div>

        <div className='w-2/3 p-14 bg-gray-100'>
          <h1 className='text-4xl font-bold mb-4 text-red-900 text-center'>Dotbrand</h1>
          <form className="space-y-2 md:space-y-4 mt-14" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black dark:text-red">
                Email or Phone Number
              </label>
              <InputField
                formik={formik}  // If you're using Formik
                placeholder="Email"
                name="email"
                type="email"
                className="mt-2 sm:mt-0"
              />
            </div>
            <div className="flex flex-col space-y-1 relative">
              <label
                htmlFor="password"
                className="text-sm font-medium text-black dark:text-red">
                Password
              </label>
              <InputField
                size='sm'
                type="password"
                name="password"
                placeholder="Password"
                className=""
                formik={formik}
              />
              {/* <AiFillEyeInvisible className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" /> */}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <input type="checkbox" />
                <label htmlFor="Remember" className='ml-2'>Remember Me</label>
              </div>
              <a href="/request-email" className="text-sm font-medium text-red-900 hover:underline">Forgot password?</a>
            </div>
            <a href="/signup">
              <button
                type="submit"
                className="w-full bg-red-900 text-white font-medium rounded-lg text-sm px-4 py-2.5 mt-4 text-center">
                {loading ? (
                  "Loading..."
                ) : (
                  "Login"
                )}
              </button>

            </a>
            <div className='text-center'>
              <p>OR</p>
              <div className="flex space-x-4 mt-4 ml-32">
                <p>Login With  |</p>
                <a href="https://facebook.com" className='text-blue-600'>
                  <FaFacebook className="w-7 h-7 border border-gray-600 rounded-full p-1" />
                </a>
                <a href="https://google.com" className="text-red-400">
                  <FaGoogle className="w-7 h-7 border border-gray-600 rounded-full p-1" />
                </a>
                <a href="/phone" className="text-gray-700">
                  <FaPhone className="w-7 h-7 border border-gray-600 rounded-full p-1" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
