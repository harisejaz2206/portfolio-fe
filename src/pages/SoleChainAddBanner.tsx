import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // Import the react-toggle styles
import { AppThunkDispatch } from "../store/rootReducer";
import { selectBrandLoading } from "../app/features/brand/brand.selector";
import { HttpService } from "../app/services/base.service";
import { Toast } from "../utils/toast";
import * as Yup from 'yup';
import { useFormik } from "formik";
import InputField from "../components/globals/inputField";
import { addBrand } from "../app/features/brand/brand.thunk";
import { handleApiResponse } from "../utils/handleApiResponse";
import { addCategory } from "../app/features/category/category.thunk";
import { ClipLoader } from "react-spinners";

interface CategoryData {
  name: string;
  status: boolean;
  image: string;
}

const CreateBrandSchema = Yup.object().shape({
  name: Yup.string()
    .required('Brand name is required'),
  status: Yup.bool(),
  image: Yup.string()
    .required('You must upload at least one image.')
});

const SoleChainAddBanner: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectBrandLoading);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSuccess = (result: any) => {
    const status = result.meta.requestStatus == "fulfilled" ? true : false;
    navigate(status ? '/multi-admin/categories' : '/haris');
    Toast.fire({
      icon: "success",
      title: "Banner added successfully",
    });
  };

  // Function to handle image upload
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    const files = Array.from(e.target.files || []);
    if (files.length === 0) {
      console.error('No files selected');
      return;
    }
    const formData = new FormData();

    // Append 'file' since Cloudinary API is expecting that key
    formData.append('file', files[0]);
    formData.append('upload_preset', 'dotbrand-cloudinary');

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dr7eczdms/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        formik.setFieldValue('image', data.secure_url);
      } else {
        const data = await response.json();
      }
    } catch (error) {
    } finally {
      setIsUploading(false);
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const formik = useFormik<CategoryData>({
    initialValues: {
      name: '',
      status: true,
      image: '',
    },
    validationSchema: CreateBrandSchema,
    onSubmit: async (values) => {
      await dispatch(addCategory(values))
        .then((result) => {
          Toast.fire({
            icon: "success",
            title: "Banner successfully added",
          });
          handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik })
        })
        .catch((error) => {
          console.log('API call failed', error);
        })
    },
  });


  // Function to handle the toggle change
  const handleToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('status', e.target.checked);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8 w-[98%] max-w-3xl mt-2 mb-2 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Banner
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Banner Name
            </label>
            <InputField
              formik={formik}
              placeholder="Enter Category name"
              name="name"
              type="text"
              className="mt-2 sm:mt-0"
            />
          </div>

          <div className="mb-4 flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">
              Status
            </label>
            <Toggle
              id="status"
              name="status"
              checked={formik.values.status}
              onChange={handleToggleChange}
              icons={false}
              className="react-toggle"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Add Image(s)
            </label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {previewImage ? (
                  <img src={previewImage} alt="Preview" className="h-24 w-full object-cover" />
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                    // ... (rest of SVG attributes)
                    >
                      {/* SVG content here */}
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                          onChange={handleImageUpload}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, up to 10MB
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Link to="/sole-admin/banners">
              <button className="text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={isUploading || loading!}
              className={`text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 ${isUploading || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              {isUploading ? 'Uploading...' : loading ? <ClipLoader color="#ffffff" /> : 'Next'}
              {!isUploading && !loading && <FaArrowRight className="ml-2" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SoleChainAddBanner;
