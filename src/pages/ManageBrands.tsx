import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaFilter,
  FaPlusCircle,
  FaDownload,
  FaUpload,
  FaTrash
} from "react-icons/fa";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectBrandData } from "../app/features/brand/brand.selector";
import { deleteBrand, getBrands } from "../app/features/brand/brand.thunk";
import { BeatLoader, ClipLoader, PacmanLoader, ClimbingBoxLoader } from "react-spinners";
import { selectCategoryLoading } from "../app/features/category/category.selector";
import Modal from 'react-modal';


const ManageBrands: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const brandState = useSelector(selectBrandData) || [];
  const loading = useSelector(selectCategoryLoading);
  const [isModalOpen, setModalOpen] = useState(false);
  const [brandToDelete, setBrandToDelete] = useState<string | null>(null);
  console.log("brand state:", brandState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getBrands()); // Using await with dispatch here
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchData()
  }, [dispatch]);

  const [searchStoreQuery, setSearchStoreQuery] = useState("");
  const [searchProductQuery, setSearchProductQuery] = useState("");
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

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
      await dispatch(deleteBrand(id));
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
            <PacmanLoader color={"#123123"} loading={true} size={15} />
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
                    placeholder="Select Store..."
                    className="border text-sm rounded-md pl-10 pr-4 py-1 px-4 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                    value={searchStoreQuery}
                    onChange={(e) => setSearchStoreQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
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
                </div>
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

                <button
                  className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                  onClick={() => {
                    // fileInputRef.current.click();
                  }}
                >
                  <FaPlusCircle className="mr-2" /> Add Multiple Brands
                </button>
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
                <Link to={"/path-to-sample-sheet/sample-sheet.xlsx"}>
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                  // download
                  >
                    <FaDownload className="mr-2" /> Download Sample Sheet
                  </button>
                </Link>
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
                {brandState && brandState.filter(Boolean).map((brand) => (
                  <tr key={brand._id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {brand.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {brand.status ? 'Active' : 'Inactive'}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <img src={brand.image} alt={brand.name} width="120" height="120" />
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                      <Link to={`/multi-admin/edit-manufacturer/${brand._id}`}>
                        <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
                          <FaEdit className="-ml-20" />
                        </button>
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                        onClick={() => handleDeleteBrand(brand._id!)}
                      >
                        <FaTrash />
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
}

export default ManageBrands;