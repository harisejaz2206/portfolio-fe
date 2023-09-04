import React, { useState } from 'react';
import InputField from '../globals/inputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import { Toast } from '../../utils/toast';
import DynamicModal from '../globals/modal/DynamicModal';

const RequestEmailSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const RequestEmail = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { email: '' },
        validationSchema: RequestEmailSchema,
        onSubmit: (values) => {
            console.log(values);
            setModalOpen(true);
            // Toast.fire({
            //     icon: "success",
            //     title: "Email sent! Check your email to reset your password.",
            // });
        },
    });

    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen">
            {/* Logo */}
            {/* <img src="https://img.freepik.com/free-vector/supermarket-logo-concept_23-2148467758.jpg?w=1380&t=st=1693562833~exp=1693563433~hmac=7000d89d804c1aa7a8e1aa8d1911d7d22f97238838f14519cf53d5bc795aeeef" alt="Logo" className="mb-4" /> */}

            <h2 className="text-4xl text-gray-700 mb-2 font-semibold tracking-wide">Forgot Your Password?</h2>
            <h3 className="text-xl text-gray-600 mb-6 font-medium tracking-wide">Enter your registered email to reset your password</h3>

            <form
                className="w-1/4 p-6 rounded-lg shadow-lg"
                onSubmit={formik.handleSubmit}
            >
                <div className="mb-6 w-full">
                    <InputField
                        size="sm"
                        type="email"
                        name="email"
                        placeholder="Email"
                        formik={formik}
                        className="rounded-full w-full"
                    />
                </div>
                <button
                    className=" bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-4 rounded-full w-full"
                    type="submit"
                >
                    Reset Password
                </button>
            </form>

            {/* Back to Login Button */}
            <button
                className="text-sm text-gray-500 mt-4"
                onClick={() => navigate('/login')}
            >
                Back to <span className="text-blue-500 font-bold">Login</span>
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
                    routerPath="/login"  // or wherever you want to navigate
                />
            )}
        </div>
    );
};

export default RequestEmail;
