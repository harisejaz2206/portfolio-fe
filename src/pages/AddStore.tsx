import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useFormik } from "formik";
import * as Yup from 'yup';
import InputField from "../components/globals/inputField"; // Import the InputField component

type FormData = {
  storeName: string;
  multiAdminName: string;
  multiAdminEmail: string;
  multiAdminPassword: string;
}

const AddStoreSchema = Yup.object().shape({
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
  const formik = useFormik<FormData>({
    initialValues: {
      storeName: '',
      multiAdminName: '',
      multiAdminEmail: '',
      multiAdminPassword: '',
    },
    validationSchema: AddStoreSchema,
    onSubmit: values => {
      console.log("Submitting form with values: ", values);
      // Handle form submission here
    },
  });

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[90%] mt-2">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Store
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Store Name */}
          <div>
            <label
              htmlFor="storeName"
              className="block text-sm font-medium text-gray-700"
            >
              Store Name
            </label>
            <InputField
              formik={formik}
              placeholder="Enter store name"
              name="storeName"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          {/* Multi Admin Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Multi Admin Details
            </h2>
            {/* Multi Admin Name */}
            <div>
              <label
                htmlFor="multiAdminName"
                className="block text-sm font-medium text-gray-700"
              >
                Multi Admin Name
              </label>
              <InputField
                formik={formik}
                placeholder="Enter multi admin name"
                name="multiAdminName"
                type="text"
                className="mt-2 sm:mt-0"
              />
            </div>

            {/* Multi Admin Email */}
            <div>
              <label
                htmlFor="multiAdminEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Multi Admin Email
              </label>
              <InputField
                formik={formik}
                placeholder="Enter multi admin email"
                name="multiAdminEmail"
                type="text"
                className="mt-2 sm:mt-0"
              />
            </div>

            {/* Multi Admin Password */}
            <div>
              <label
                htmlFor="multiAdminPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Multi Admin Password
              </label>
              <InputField
                formik={formik}
                placeholder="Enter multi admin password"
                name="multiAdminPassword"
                type="password"
                className="mt-2 sm:mt-0"
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
              disabled={!formik.isValid}
              className={`text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center ${!formik.isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {formik.isSubmitting ? (
                <div className="loader">Loading...</div>
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
