import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import { useFormik } from "formik";
import * as Yup from 'yup';
import InputField from "../components/globals/inputFieldStore"; // Import the InputField component
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectStoreLoading } from "../app/features/store/store.selector";
import { Toast } from "../utils/toast";
import { addStore } from "../app/features/store/store.thunk";
import { handleApiResponse } from "../utils/handleApiResponse";
import { handleError } from "../utils/catchErrorToast";
import { ClockLoader } from "react-spinners";

interface StoreData {
  storeName: string;
  multiAdminName: string;
  multiAdminEmail: string;
  multiAdminPassword: string;
}

const CreateStoreSchema = Yup.object().shape({
  storeName: Yup.string()
    .required('Store Name is required'),
  multiAdminName: Yup.string()
    .required('Multi Admin Name is required'),
  multiAdminEmail: Yup.string()
    .email('Invalid email')
    .required('Multi Admin Email is required'),
  multiAdminPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Must contain 8 characters, one uppercase, one lowercase, one number, and one special character'
    )
    .required('Multi Admin Password is required'),
});

const AddStore: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectStoreLoading);

  const handleSuccess = (result: any) => {
    const status = result.meta.requestStatus === "fulfilled" ? true : false;
    navigate(status ? '/super-admin/stores' : '/haris');
    Toast.fire({
      icon: "success",
      title: "Store created successfully",
    });
  };
  const formik = useFormik<StoreData>({
    initialValues: {
      storeName: '',
      multiAdminName: '',
      multiAdminEmail: '',
      multiAdminPassword: '',
    },
    validationSchema: CreateStoreSchema,
    onSubmit: async (values) => {
      await dispatch(addStore(values))
        .then((result) => {
          Toast.fire({
            icon: "success",
            title: "Store successfully created",
          });
          console.log(result.meta.requestStatus === "fulfilled");
          handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik })
        })
        .catch((error) => {
          console.log('API call failed', error);
          handleError(error);
        })
    },
  });

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[70%] mt-2 mb-2">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Add Store
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Store Name */}
          <div>
            <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
              Store Name
            </label>
            <InputField
              formik={formik}
              placeholder="Enter store name"
              name="storeName"
              type="text"
              className="mt-2 sm:mt-0 w-[60%]"
            />
          </div>

          {/* Multi Admin Details (Grouping) */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Multi Admin Details
            </h2>

            {/* Multi Admin Name */}
            <div>
              <label htmlFor="multiAdminName" className="block text-sm font-medium text-gray-700">
                Multi Admin Name
              </label>
              <InputField
                formik={formik}
                placeholder="Enter multi admin name"
                name="multiAdminName"
                type="text"
                className="mt-2 sm:mt-0 w-[50%]"
              />
            </div>

            {/* Multi Admin Email */}
            <div>
              <label htmlFor="multiAdminEmail" className="block text-sm font-medium text-gray-700">
                Multi Admin Email
              </label>
              <InputField
                formik={formik}
                placeholder="Enter multi admin email"
                name="multiAdminEmail"
                type="text"
                className="mt-2 sm:mt-0 w-[50%]"
              />
            </div>

            {/* Multi Admin Password */}
            <div>
              <label htmlFor="multiAdminPassword" className="block text-sm font-medium text-gray-700">
                Multi Admin Password
              </label>
              <InputField
                formik={formik}
                placeholder="Enter multi admin password"
                name="multiAdminPassword"
                type="password"
                className="mt-2 sm:mt-0 w-[50%]"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-x-4 flex justify-between">
            <Link to="/super-admin/stores">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={!formik.isValid || loading!}
              className={`text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center ${!formik.isValid || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <ClockLoader color="#ffffff" loading={true} size={15} />
              ) : (
                <><FaPlusCircle className="mr-1" /> Add Store</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStore;
