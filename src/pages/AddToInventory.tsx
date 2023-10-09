import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useFormik } from "formik";
import * as Yup from 'yup';
import InputField from "../components/globals/inputField"; // Import the InputField component

type FormData = {
  name: string;
  category: string;
  quantity: number;
}

const AddToInventorySchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  category: Yup.string()
    .required('Category is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .min(1, 'Quantity must be at least 1')
    .integer('Quantity must be an integer'),
});

const AddToInventory: React.FC = () => {
  const formik = useFormik<FormData>({
    initialValues: {
      name: '',
      category: '',
      quantity: 0,
    },
    validationSchema: AddToInventorySchema,
    onSubmit: values => {
      console.log("Submitting form with values: ", values);
      // Handle form submission here
    },
  });

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md  p-8 w-[90%]">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add to Inventory
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <InputField
              formik={formik}
              placeholder="Enter name"
              name="name"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <InputField
              formik={formik}
              placeholder="Enter category"
              name="category"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <InputField
              formik={formik}
              placeholder="Enter quantity"
              name="quantity"
              type="number"
              className="mt-2 sm:mt-0"
            />
          </div>

           {/* Buttons */}
           <div className="mt-6 space-x-4 flex justify-between">
            <Link to="/multi-admin/catalogue">
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
                <><FaPlusCircle className="mr-1" /> Add to Inventory</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddToInventory;
