import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import * as Yup from 'yup';
import { Toast } from '../utils/toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '../store/rootReducer';
import { login, signup } from '../app/features/auth/auth.thunk';
import { handleApiResponse } from '../utils/handleApiResponse';
import { handleError } from '../utils/catchErrorToast';
import InputField from '../components/globals/inputField';
import { useFormik } from "formik";
import { HttpService } from "../app/services/base.service";
import DynamicModal from "../components/globals/modal/DynamicModal";
import TypeWriter from "typewriter-effect";

type FormData = {
  name: string;
  email: string;
  password: string;
}

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
      'Password must contain an uppercase letter, a lowercase letter, and a special character'
    )
    .required('Password is required'),
});


const SignUpPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("signup");
  const [isModalOpen, setModalOpen] = useState(false);
  // const [signupPayload, setSignupPayload] = useState<any>()
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();

  const handleSuccess = (result: any) => {
    console.log("result", result);
    const token = result.payload.payload.token.accessToken;
    console.log("token", token);
    HttpService.setToken(token);
    localStorage.setItem('token', token);
    navigate(result.payload.payload.user ? '/' : '/haris');
    // setSignupPayload(result.payload.payload);
    setModalOpen(true);
  };
  const formik = useFormik<FormData>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    validateOnBlur: true,
    onSubmit: values => {
      dispatch(signup(values))
        .then((result) => handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik }))
        .catch(handleError)
    },
  });



  return (
    <div className="flex justify-center items-center h-max ">
      <div className="bg-white rounded-lg mt-auto shadow-md flex w-full max-w-4xl mb-2 ">
        <div className="w-1/3 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-600 via-red-900 to-red-900">
          <img src="/marijuana.png" alt="marijuana" className="ml-56" />
          <h1 className="text-4xl text-yellow-400 font-bold text-center">
            DotBrand
          </h1>
          <img src="/Frame 20.png" alt="" className="w-auto h-auto" />
          <div className="text-white ">
            <p className="relative left-6 flex items-center">
              <span className="absolute top-1/2 transform -translate-y-1/2">
                <div className="bg-yellow-400 w-4 h-4 -ml-2 rounded-full flex items-center justify-center">
                  <TiTick className="text-white" />
                </div>
              </span>
              <span className="ml-4 text-md">
              <TypeWriter
        options={{
          strings: [
            "Manage your orders",
            "Get Exclusive Deals and Offers",
            "Get Personalized Recommendations",
          ],
          autoStart: true,
          loop: true,
          cursor: "|", // Use an underscore as the cursor
          delay: 75, // Delay between typing each character
          deleteSpeed: 20, // Speed of deleting characters
        }}
      />
              </span>
           
            </p>
          </div>
        </div>

        <div className="w-2/3 p-14 bg-gray-100">
          <h1 className="text-4xl font-bold mb-4 text-red-900 text-center">
            DotBrand
          </h1>
          <div className="grid grid-cols-2 bg-white border border-gray-200 rounded p-1 mb-2">
            <button
              className={`rounded p-1 ${activeTab === "login" ? "bg-red-900 text-white" : "text-black"
                }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`rounded p-1 ${activeTab === "signup" ? "bg-red-900 text-white" : "text-black"
                }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
          <form className="space-y-2 md:space-y-4 mt-14" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-black dark:text-black"
              >
                Name
              </label>
              <InputField
                placeholder="Please enter your full name"
                name="name"
                type="text"
                className="mt-2 sm:mt-0"
                formik={formik}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black dark:text-black"
              >
                Email
              </label>
              <InputField
                placeholder="Please enter your email e.g. example@email.com"
                name="email"
                type="email"
                className="mt-2 sm:mt-0"
                formik={formik}
              />
            </div>
            <div className="flex flex-col space-y-1 relative">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 dark:text-black"
              >
                Password
              </label>
              <InputField
                size='sm'
                type="password"
                name="password"
                placeholder="Please enter your password"
                className=""
                formik={formik}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <input type="checkbox" />
                <label htmlFor="Remember" className="ml-2">
                  Remember Me
                </label>
              </div>
              <a
                href="/request-email"
                className="text-md font-medium text-red-900 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <a href="/login">
              <button
                type="submit"
                className="w-full bg-red-900 text-white font-medium rounded-lg text-sm px-4 py-2.5 mt-4 text-center"
              >
                Sign up
              </button>
              {isModalOpen && (
                <DynamicModal
                  title="Email Sent!"
                  description="You have successfully signed up!."
                  action="Close"
                  btnWidth={true}
                  open={isModalOpen}
                  setOpen={setModalOpen}
                  successIcon={true}
                  routerPath="/login"  // or wherever you want to navigate
                />
              )}
            </a>
            <div className="text-center">
              <p>OR</p>
              <div className="flex space-x-4 mt-4 ml-32">
                <p>Login With |</p>
                <a href="https://facebook.com" className="text-blue-600">
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
};

export default SignUpPage;
