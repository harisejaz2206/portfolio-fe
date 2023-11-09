import React, { useEffect, useState } from 'react';
import InputField from '../components/globals/inputField';
import Button from '../components/globals/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ThemeBox from '../components/globals/themeBox';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../store/rootReducer';
import { selectError, selectLoading, selectMessage, selectUser } from "../app/features/auth/auth.selector";
import { resetpassword, forgotpassword } from '../app/features/auth/auth.thunk';
import { handleApiResponse } from '../utils/handleApiResponse';
import { handleError } from '../utils/catchErrorToast';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';  // Importing from React Router
import DynamicModal from '../components/globals/modal/DynamicModal';


const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            'Password must contain an uppercase letter, a lowercase letter, and a special character'
        )
        .required('Password is required'),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
});

const ResetPassword = () => {
    const navigate = useNavigate();  // Replacing useRouter
    // const { token } = useSearchParams();  // If token is a URL parameter
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch<AppThunkDispatch>();
    const message = useSelector(selectMessage);
    const userObject = useSelector(selectUser);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    // console.log(searchParams.get('token'));


    const [isModalOpen, setModalOpen] = useState(false);

    const handleSuccess = (result: any) => {
        const status = result.meta.requestStatus === "fulfilled" ? true : false;
        // navigate(status ? '/super-admin/stores' : '/haris');
        // Toast.fire({
        //   icon: "success",
        //   title: "Store created successfully",
        // });
    };

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpassword: ''
        },
        validationSchema: ResetPasswordSchema,
        validateOnBlur: true,
        onSubmit: async (values) => {
            try {
                const result = await dispatch(resetpassword({ password: values.password, token: searchParams.get('token')! }));
                if (result.meta.requestStatus === "fulfilled") {
                    setModalOpen(true);
                }
                handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik });
                setModalOpen(true);
            } catch (error) {
                console.log('API call failed', error);
                handleError(error);
            }
        },
    });


    return (
        <>
            <div className="flex flex-col w-full h-screen">
                {/* <div className="w-full p-4 sm:py-8 sm:px-6 bg-red-600 text-center text-white">
                    <h1 className="font-anton text-medium sm:text-2xl text-xl uppercase">Experience the persuasive magic of ai ads</h1>
                </div> */}
                <div className="flex flex-grow items-center justify-center">
                    <ThemeBox className="lg:max-w-[920px] lg:min-w-[920px] p-8 m-3 md:m-0 bg-red-100">
                        <figure className="mx-auto text-center mb-4 sm:mb-6">
                            {/* <img className="mx-auto w-[130px] sm:w-[180px]" src="/assets/images/logo.svg" alt="Logo" width={180} height={48} /> */}
                        </figure>
                        <div className="w-full mb-6">
                            <h1 className="text-center font-bold text-black text-xl md:text-2xl mb-2">
                                Password</h1>
                            <p className="text-center text-[#808080] text-xs">Please enter your new password to reset your account</p>
                        </div>
                        <div className="w-full max-w-[370px] mx-auto">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="w-full mb-2">
                                    <InputField
                                        size="sm"
                                        type="password"
                                        name="password"
                                        placeholder="New Password"
                                        className=''
                                        formik={formik}
                                    />
                                </div>
                                <div className="w-full mb-2">
                                    <InputField
                                        size="sm"
                                        type="password"
                                        name="confirmpassword"
                                        placeholder="Confirm New Password"
                                        className=''
                                        formik={formik}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-900 text-white font-medium rounded-lg text-sm px-4 py-2.5 mt-4 text-center"
                                >
                                    Reset Password
                                </button>
                            </form>
                        </div>
                        <div className="w-full mt-4 text-center">
                            <span className="text-sm text-[#808080]">Back to <Link to="/login" className="text-red-600 text-sm font-medium">Log In</Link></span>

                        </div>
                    </ThemeBox>
                </div>
            </div>
            <DynamicModal
                title="Password Successfully Reset!"
                description="Your account password is successfully reset, please login now."
                action="OK"
                open={isModalOpen}
                setOpen={setModalOpen}
            // routerPath="/login"
            />
        </>
    );
};

export default ResetPassword;