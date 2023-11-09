import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaFilter,
  FaPlusCircle,
  FaDownload,
  FaUpload,
  FaTrash,
} from "react-icons/fa";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import {
  selectBrandData,
  selectBrandLoading,
} from "../app/features/brand/brand.selector";
import { deleteBrand, getBrands } from "../app/features/brand/brand.thunk";
import {
  BeatLoader,
  ClipLoader,
  PacmanLoader,
  ClimbingBoxLoader,
  PropagateLoader,
} from "react-spinners";
import { selectCategoryLoading } from "../app/features/category/category.selector";
import Modal from "react-modal";
import { Toast } from "../utils/toast";

const ManageBrands: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const brandState = useSelector(selectBrandData) || [];
  const loading = useSelector(selectBrandLoading);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getBrands()).then((result: any) => {
          Toast.fire({
            icon: "success",
            title: result.payload.message,
          });
        }); // Using await with dispatch here
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const [searchBrandQuery, setSearchBrandQuery] = useState("");
  const [searchProductQuery, setSearchProductQuery] = useState("");

  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // const filteredBrands = brandState.filter((brand) =>
  //   brand.name.toLowerCase().includes(searchBrandQuery.toLowerCase())
  // );

  const handleFileSelect = (e: any) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };

  // Function to toggle the filter dropdown
  const toggleFilterOptions = () => {
    setFilterOptionsVisible(!filterOptionsVisible);
  };

  const uploadSelectedFiles = () => {
    // Check if files were selected
    if (selectedFiles.length === 0) {
      alert("Please select one or more files.");
      return;
    }

    // Clear the selected files
    setSelectedFiles([]);
  };

  const handleDeleteBrand = async (id: string) => {
    try {
      await dispatch(deleteBrand(id)).then((result: any) => {
        Toast.fire({
          icon: "success",
          title: result.payload.message,
        });
      });
      await dispatch(getBrands());
    } catch (error) {
      console.error("An error occurred while deleting the brand: ", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Manage Brands
        </h1>
        {loading ? (
          <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
            <PropagateLoader color={"#123123"} loading={true} size={15} />
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-400">
                    <FaSearch className="text-sm" />
                  </span>
                  <input
                    type="text"
                    placeholder="Select Brand..."
                    className="border text-sm rounded-md pl-10 pr-4 py-1 px-4 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                    value={searchBrandQuery}
                    onChange={(e) => setSearchBrandQuery(e.target.value)}
                  />
                </div>
                {/*<div className="relative">
                  <span className="absolute left-3 top-2 text-gray-400">
                    <FaSearch className="text-sm" />
                  </span>
                  <input
                    type="text"
                    placeholder="Select Product..."
                    className="border text-sm rounded-md pl-10 pr-4 py-1 px-4 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                    value={searchProductQuery}
                    onChange={(e) => setSearchProductQuery(e.target.value)}
                  />
        </div> */}
                <div className="relative ml-4 text-sm">
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-2 rounded-md focus:outline-none flex items-center"
                    onClick={toggleFilterOptions}
                  >
                    <FaFilter className="mr-1" />
                  </button>
                  {filterOptionsVisible && (
                    <div className="absolute mt-2 p-2 border rounded-lg bg-white text-sm">
                      {/* Your filter options here */}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Link
                  to="/multi-admin/create-brand"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
                >
                  <FaPlusCircle className="mr-2" /> Add Brands
                </Link>

                {/*}
                <button
                  className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                  onClick={() => {
                    // fileInputRef.current.click();
                  }}
                >
                  <FaPlusCircle className="mr-2" /> Add Multiple Brands
                </button>

                */}
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".csv, .xlsx"
                  multiple
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
                {selectedFiles.length > 0 && (
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                    onClick={uploadSelectedFiles}
                  >
                    <FaUpload className="mr-2" /> Upload
                  </button>
                )}

                {/*
                <Link to={"/path-to-sample-sheet/sample-sheet.xlsx"}>
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                    // download
                  >
                    <FaDownload className="mr-2" /> Download Sample Sheet
                  </button>
                </Link>
                */}
              </div>
            </div>

            {/* Table and manufacturer listing */}
            <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {brandState &&
                  brandState.filter(Boolean).map((brand) => (
                    <tr key={brand._id}>
                      <td className="px-6 py-3 whitespace-no-wrap">
                        {brand.name || "N/A"}{" "}
                        {/* Display "N/A" if 'name' is undefined */}
                      </td>
                      <td className="px-6 py-3 whitespace-no-wrap">
                        {brand.status ? "Active" : "Inactive"}
                      </td>
                      <td className="px-6 py-3 whitespace-no-wrap">
                        <img
                          src={brand.image}
                          alt={brand.name || "No Name"}
                          width="120"
                          height="120"
                        />
                      </td>

                      <td className="px-6 py-3 whitespace-no-wrap text-right text-sm font-medium">
                        {/*
                        <Link to={`/admin/edit-manufacturer/${brand._id}`}>
                          <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
                            <FaEdit className="-ml-24" />
                          </button>
                        </Link>
                       */}
                        <button
                          className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                          onClick={() => handleDeleteBrand(brand._id!)}
                        >
                          <FaTrash className="-ml-20" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageBrands;
