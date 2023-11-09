import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import * as Yup from 'yup';
import { AppThunkDispatch } from "../store/rootReducer";
import { useFormik } from "formik";
import { addCatalog } from "../app/features/catalog/catalog.thunk";
import { Toast } from "../utils/toast";
import { handleApiResponse } from "../utils/handleApiResponse";
import { getBrands } from "../app/features/brand/brand.thunk";
import { getCategories } from "../app/features/category/category.thunk";
import { selectBrandData, selectBrandLoading } from "../app/features/brand/brand.selector";
import { selectCategoryData, selectCategoryLoading } from "../app/features/category/category.selector";
import InputField from "../components/globals/inputField";
import InputError from "../components/globals/inputError";
import axios from "axios";
import { ClipLoader, DotLoader, PropagateLoader } from "react-spinners";
import { selectCatalogLoading } from "../app/features/catalog/catalog.selector";


interface FormData {
    name: string;
    quantity: string;
    originalPrice: string;
    salePrice: string;
    category: string;
    brand: string;
    images: File[];
}

const AddCatalogSchema = Yup.lazy(values => {
    return Yup.object().shape({
        name: Yup.string()
            .required('Catalog item name is required'),
        quantity: Yup.number()
            .min(1, 'Quantity must be at least 1')
            .required('Quantity is required'),
        originalPrice: Yup.string()
            .matches(/^\$\d+(\.\d{2})?$/, 'Original price must be in the format $xx.xx')
            .required('Original price is required'),
        salePrice: Yup.string()
            .matches(/^\$\d+(\.\d{2})?$/, 'Sale price must be in the format $xx.xx')
            .required('Sale price is required'),
        brand: Yup.string()
            .required('Brand is required'),
        category: Yup.string()
            .required('Category is required'),
        images: Array.isArray(values.images) && values.images.length > 0 ? Yup.array()
            .of(Yup.string())
            .min(1, 'At least one image URL is required') : Yup.mixed().notRequired()
    });
});


const AddCatalogForm: React.FC = () => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);
    const [filesState, setFilesState] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [uploadedCount, setUploadedCount] = useState(0);
    const [totalFiles, setTotalFiles] = useState(0);
    const loading = useSelector(selectCatalogLoading);
    const brandLoading = useSelector(selectBrandLoading);
    const categoryLoading = useSelector(selectCategoryLoading);

    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
    }, [dispatch]);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        quantity: "",
        originalPrice: "",
        salePrice: "",
        category: "",
        brand: "",
        images: [],
    });

    const handleSuccess = (result: any) => {
        const status = result.meta.requestStatus == "fulfilled" ? true : false;
        navigate(status ? '/multi-admin/catalogue' : '/haris');
        Toast.fire({
            icon: "success",
            title: "Catalog created successfully",
        });
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            quantity: '',
            originalPrice: '',
            salePrice: '',
            brand: '',
            category: '',
            images: []
        },
        validationSchema: AddCatalogSchema,
        validateOnBlur: true,
        onSubmit: values => {

            dispatch(addCatalog(values))
                .then((result) => {
                    handleApiResponse({ result, handleSuccess: () => handleSuccess(result), formik })
                })
                .catch((error) => {
                    console.log('API call failed', error);  // Debug line
                    // handleError(error);
                });
        },
    });



    // Function to handle multiple image uploads
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        let count = 0;
        const newFiles = Array.from(e.target.files || []);
        setTotalFiles(newFiles.length);
        setFilesState([...filesState, ...newFiles]); // Add this line to update the state for files

        const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
        setPreviews([...previews, ...newPreviews]);

        const files = Array.from(e.target.files || []);
        if (files.length === 0) {
            console.error('No files selected');
            return;
        }

        const uploadedFileUrls: string[] = [];
        setIsUploading(true);  // Assuming you have this state to manage UI feedback
        setUploadedCount(0);

        for (const file of files) {
            if (!(file instanceof Blob)) {
                console.error("Not a Blob", file);
                continue;
            }

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'dotbrand-cloudinary');  // replace with your actual Cloudinary preset

            try {
                const response = await fetch('https://api.cloudinary.com/v1_1/dr7eczdms/image/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    uploadedFileUrls.push(data.secure_url);
                    setUploadedCount((prevCount) => prevCount + 1);
                } else {
                    const data = await response.json();
                    console.error('Cloudinary upload failed:', data);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

        formik.setFieldValue('images', uploadedFileUrls);
        setIsUploading(false);
    };


    const stores = ["Store 1", "Store 2", "Store 3"];
    const products = ["Product A", "Product B", "Product C"];
    const brands = useSelector(selectBrandData);
    const categories = useSelector(selectCategoryData);

    const previewDisplay = previews.map((preview, index) => (
        <img key={index} src={preview} alt={`Preview ${index}`} className="h-24 w-full object-cover" />
    ));

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-md p-8 w-[98%] max-w-3xl mt-2 mb-2">
                {/* {loading || brandLoading || categoryLoading ? (
                    <PropagateLoader size={20} color={"#000000"} />
                ) : null} */}
                {/* Loader overlay */}
                {(loading || brandLoading || categoryLoading) && (
                    <div className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-50">
                        <PropagateLoader size={20} color={"#123123"} />
                    </div>
                )}
                {/* { // Dim the content and show loader when loading
                    (loading || brandLoading || categoryLoading) && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <PropagateLoader color={"#ffffff"} />
                        </div>
                    )
                } */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Add Product
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <InputField
                            formik={formik}
                            placeholder="Enter catalog item name"
                            name="name"
                            type="text"
                            className="mt-2 sm:mt-0 w-[60%]"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Quantity
                        </label>
                        <InputField
                            formik={formik}
                            placeholder="Enter quantity number"
                            name="quantity"
                            type="text"
                            className="mt-2 sm:mt-0 w-[60%]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">
                            Original Price
                        </label>
                        <InputField
                            formik={formik}
                            placeholder="Enter original price"
                            name="originalPrice"
                            type="text"
                            className="mt-2 sm:mt-0 w-[60%]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
                            Sale Price
                        </label>
                        <InputField
                            formik={formik}
                            placeholder="Enter sale price"
                            name="salePrice"
                            type="text"
                            className="mt-2 sm:mt-0 w-[60%]"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="brand"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Brand
                        </label>
                        <select
                            id="brand"
                            name="brand"
                            value={formik.values.brand}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className={`mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
        ${formik.touched.brand && formik.errors.brand ? "!border-danger-200" : ""}`}
                        >
                            <option value="" disabled>
                                Select a Brand
                            </option>
                            {brands!.map((brand) => (
                                <option key={brand._id} value={brand._id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                        {formik.touched.brand && formik.errors.brand ? (
                            <InputError>{formik.errors.brand}</InputError>
                        ) : null}
                    </div>


                    <div className="mb-4">
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formik.values.category}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className={`mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
        ${formik.touched.category && formik.errors.category ? "!border-danger-200" : ""}`}
                        >
                            <option value="" disabled>
                                Select a Category
                            </option>
                            {categories!.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <InputError>{formik.errors.category}</InputError>
                        ) : null}
                    </div>

                    {isUploading && (
                        <div className="upload-status">
                            <ClipLoader size={50} color={"#123abc"} loading={isUploading} />
                            <div className="counter">{`${uploadedCount}/${totalFiles} uploaded`}</div>
                        </div>
                    )}
                    <div className="mb-4">
                        <label
                            htmlFor="images"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Add Image(s)
                        </label>
                        <input
                            type="file"
                            id="images"
                            name="images"
                            accept="image/*"
                            multiple
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                                handleImageUpload(e);
                                formik.setFieldValue('images', e.target.files);
                            }}
                            className={`mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
        ${formik.touched.images && formik.errors.images ? "!border-danger-200" : ""}`}
                        />
                        {/* Preview Section */}
                        <div className="preview-section" style={{ display: 'flex', gap: '10px' }}>
                            {previews.map((preview, index) => (
                                <img
                                    key={index}
                                    src={preview}
                                    alt={`preview-${index}`}
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                            ))}
                        </div>
                        {formik.touched.images && formik.errors.images ? (
                            <InputError>{formik.errors.images}</InputError>
                        ) : null}
                    </div>


                    <div className="flex justify-between">
                        <Link to="/multi-admin/catalogue">
                            <button className="text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" disabled={loading! || brandLoading! || categoryLoading!}>
                                Cancel
                            </button>
                        </Link>
                        <button
                            type="submit"
                            disabled={!formik.isValid || loading! || brandLoading! || categoryLoading!}
                            className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2"
                        >
                            <>
                                Next <FaArrowRight className="ml-2" />
                            </>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCatalogForm;
