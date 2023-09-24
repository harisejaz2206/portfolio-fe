import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/globals/inputField";
import { Formik, useFormik } from "formik";
import { HttpService } from "../app/services/base.service";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { Toast } from "../utils/toast";
import * as Yup from 'yup';
import { handleApiResponse } from "../utils/handleApiResponse";
import { handleError } from "../utils/catchErrorToast";
import { selectOutletLoading } from "../app/features/outlet/outlet.selector";
import { addOutlet } from "../app/features/outlet/outlet.thunk";

type FormData = {
  outletName: string;
  adminName: string;
  adminEmail: string;
  adminPassword: string;
  adminNumber: string;
  address: string;
  latitude: string;
  longitude: string;
  taxType: string;
  taxValue: string;
}

const CreateOutletSchema = Yup.object().shape({
  outletName: Yup.string()
    .required('Outlet name is required'),
  adminName: Yup.string()
    .required('Admin name is required'),
  adminEmail: Yup.string()
    .email('Invalid email')
    .required('Admin email is required'),
  adminPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
    )
    .required('Admin password is required'),
  adminNumber: Yup.string()
    .required('Admin number is required'),
  address: Yup.string()
    .required('Address is required'),
  latitude: Yup.string()
    .matches(
      /^-?([1-8]?[1-9]|[1-9]0)\.\d{1,15}$/,
      'Latitude must be a number between -90.000000000000000 and 90.000000000000000'
    )
    .required('Latitude is required'),
  longitude: Yup.string()
    .matches(
      /^-?((\d|([1-9]\d)|(1[0-7]\d)|180)\.\d{1,15})$/,
      'Longitude must be a number between -180.000000000000000 and 180.000000000000000'
    )
    .required('Longitude is required'),
  taxType: Yup.string()
    .required('Tax type is required'),
  taxValue: Yup.string()
    .matches(/^(\d+(\.\d{1,2})?%)$/, "Tax details must be a percentage like 4% or 3.5%")
    .required('Tax details are required')
});


const CreateOutletForm: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectOutletLoading);

  const handleSuccess = (result: any) => {
    const status = result.meta.status == "fulfilled" ? true : false;
    navigate(status ? '/admin/outlets' : '/haris');
    Toast.fire({
      icon: "success",
      title: "Outlet created successfully",
    });
  };

  const formik = useFormik<FormData>({
    initialValues: {
      outletName: '',
      adminName: '',
      adminEmail: '',
      adminPassword: '',
      adminNumber: '',
      address: '',
      latitude: '',
      longitude: '',
      taxType: '',
      taxValue: ''
    },
    validationSchema: CreateOutletSchema,
    validateOnBlur: true,
    onSubmit: values => {
      console.log("Submitting form with values: ", values);  // Debug line 1
      dispatch(addOutlet(values))
        .then((result) => {
          console.log('API call successful', result);  // Debug line
          Toast.fire({
            icon: "success",
            title: "Outlet successfully created",
          });
          handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik })
        })
        .catch((error) => {
          console.log('API call failed', error);  // Debug line
          // handleError(error);
        })
    },
  });

  return (
    <div className="bg-gray-100 h-auto flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[98%]">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Outlet
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Outlet Name */}
          <div>
            <label
              htmlFor="outletName"
              className="block text-sm font-medium text-gray-700"
            >
              Outlet Name
            </label>
            <InputField
              formik={formik}
              placeholder="Enter outlet name"
              name="outletName"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          {/* Admin Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Outlet Admin Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Admin Name */}
              <div>
                <label
                  htmlFor="adminName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Admin Name
                </label>

                <InputField
                  formik={formik}
                  placeholder="Enter admin name"
                  name="adminName"
                  type="text"
                  className="mt-2 sm:mt-0"
                />
              </div>

              {/* Admin Email */}
              <div>
                <label
                  htmlFor="adminEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Admin Email
                </label>
                <InputField
                  formik={formik}
                  placeholder="Enter admin email"
                  name="adminEmail"
                  type="text"
                  className="mt-2 sm:mt-0"
                />

              </div>

              {/* Admin Password */}
              <div>
                <label
                  htmlFor="adminPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Admin Password
                </label>
                <InputField
                  formik={formik}
                  placeholder="Enter admin password"
                  name="adminPassword"
                  type="password"
                  className="mt-2 sm:mt-0"
                />
              </div>

              {/* Admin Phone Number */}
              <div>
                <label
                  htmlFor="adminNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Admin Phone Number
                </label>
                <InputField
                  formik={formik}
                  placeholder="Enter admin phone number"
                  name="adminNumber"
                  type="text"
                  className="mt-2 sm:mt-0"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <InputField
              formik={formik}
              placeholder="Enter address"
              name="address"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="longitude"
              className="block text-sm font-medium text-gray-700"
            >
              Longitude
            </label>
            <InputField
              formik={formik}
              placeholder="Enter longitude"
              name="longitude"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          <div>
            <label
              htmlFor="latitude"
              className="block text-sm font-medium text-gray-700"
            >
              Latitude
            </label>
            <InputField
              formik={formik}
              placeholder="Enter latitude"
              name="latitude"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          {/* Tax Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Tax Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Tax Type */}
              <div>
                <label
                  htmlFor="taxType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tax Type
                </label>
                <InputField
                  formik={formik}
                  placeholder="Enter tax type"
                  name="taxType"
                  type="text"
                  className="mt-2 sm:mt-0"
                />
              </div>

              {/* Tax Details */}
              <div>
                <label
                  htmlFor="taxValue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tax Details
                </label>
                <InputField
                  formik={formik}
                  placeholder="Enter tax details"
                  name="taxValue"
                  type="text"
                  className="mt-2 sm:mt-0"
                />
              </div>
            </div>
          </div>

          {/* Add Tax Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="text-indigo-600 bg-white hover:underline hover:text-indigo-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center"
            >
              <FaPlusCircle className="mr-1" /> Add Tax
            </button>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            {/* <Link to="/admin/outlets"> */}
            <button
              type="submit"
              disabled={!formik.isValid || loading!} // Disable button if form is not valid or loading
              className={`text-indigo-600 bg-white hover:underline hover:text-indigo-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center ${!formik.isValid || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="loader">Loading...</div>  // Replace with your loading indicator
              ) : (
                "Create Outlet"
              )}
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateOutletForm;
