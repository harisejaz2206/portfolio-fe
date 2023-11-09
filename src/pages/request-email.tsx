import React, { useState } from 'react';
import InputField from '../components/globals/inputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
import DynamicModal from '../components/globals/modal/DynamicModal';

import Typewriter from 'typewriter-effect';
import { Toast } from '../utils/toast';
import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '../store/rootReducer';
import { forgotpassword } from '../app/features/auth/auth.thunk';
import { handleApiResponse } from '../utils/handleApiResponse';
import { handleError } from '../utils/catchErrorToast';
import { resourceLimits } from 'worker_threads';

const RequestEmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const LeftSideDiv = () => (
  <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-600 via-red-900 to-red-900 w-1/3 min-h-screen flex flex-col items-center justify-center text-white">
    <div className="text-center  mb-4">
      <img src="/logo.png" alt="Company Logo" className="w-20 h-20  rounded-full mx-auto" />
    </div>
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white mb-2">
        <span className="text-white">
          <Typewriter
            options={{
              strings: ['Dot Brand ©', 'Hi there!'],
              autoStart: true, // Start typing automatically
              loop: true, // Loop the animation
              delay: 100, // Delay between each character typing
              deleteSpeed: 50, // Speed of character deletion
            }}
          />
        </span>
      </h1>
      <div className="text-md text-white mb-8 mt-auto">
        <p>
          <span className="ml-2 block">
            Prescriptions, Delivered Your Way
          </span>
        </p>
      </div>
    </div>
  </div>
);

const RequestEmail = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppThunkDispatch>();

  const handleSuccess = (result: any) => {
    const status = result.meta.requestStatus === "fulfilled" ? true : false;
    // navigate(status ? '/super-admin/stores' : '/haris');
    // Toast.fire({
    //   icon: "success",
    //   title: "Store created successfully",
    // });
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: RequestEmailSchema,
    onSubmit: async (values) => {
      await dispatch(forgotpassword(values))
        .then((result) => {
          if (result.meta.requestStatus === "fulfilled") {
            setModalOpen(true);
          }
          handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik })
        })
        .catch((error) => {
          console.log('API call failed', error);
          handleError(error);
        })
    },
  });

  return (
    <div className="flex h-screen">
      <LeftSideDiv />

      <div className="w-2/3 bg-white flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <div className="text-center -mt-[30%]">
            <h2 className="text-2xl font-bold text-red-800 mb-2 ">
              Forgot your password?
            </h2>
            <h4 className="text-lg  text-gray-600 mb-12 font-semibold">
              Please enter you registered email below
            </h4>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="-mb-2">
              <label htmlFor="email" className="block text-red-800 text-sm font-bold">
                Email Address:
              </label>
              <InputField
                size="sm"
                type="email"
                name="email"
                placeholder="Email"
                formik={formik}
                className="rounded-md border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 w-full p-2"
              />
            </div>
            <button
              className={`bg-red-800 text-white rounded-lg py-2 hover:bg-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50 w-full transition-colors duration-300`}
              type="submit"
            >
              Reset Password
            </button>
          </form>
          <button
            className="text-sm text-gray-500 mt-4  cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Back to <span className="text-red-700 font-bold hover:underline">Login</span>
          </button>
          {isModalOpen && (
            <DynamicModal
              title="Email Sent!"
              description="Check your email to reset your password."
              action="Close"
              btnWidth={true}
              open={isModalOpen}
              setOpen={setModalOpen}
              successIcon={true}
              routerPath="/login"
            />
          )}
        </div>
      </div>


    </div>
  );
};

export default RequestEmail;
