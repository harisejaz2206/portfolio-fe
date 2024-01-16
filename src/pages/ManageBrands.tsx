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
  const brandState = useSelector(selectBrandData) || [];
  const loading = useSelector(selectBrandLoading);

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

  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const filteredBrands = brandState.filter((brand) =>
    brand.name.toLowerCase().includes(searchBrandQuery.toLowerCase())
  );
  const handleFileSelect = (e: any) => {
    const files = e.target.files;
    setSelectedFiles(files);
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

  const itemsPerPage = 20; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBrand = currentPage * itemsPerPage;
  const indexOfFirstBrand = indexOfLastBrand - itemsPerPage;
  const currentBrands = filteredBrands.slice(
    indexOfFirstBrand,
    indexOfLastBrand
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Link
                  to="/multi-admin/create-brand"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
                >
                  <FaPlusCircle className="mr-2" /> Add Brands
                </Link>
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
                {currentBrands.map((brand) => (
                  <tr key={brand._id}>
                    <td className="px-6 py-3 whitespace-no-wrap">
                      {brand.name || "N/A"}{" "}
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
            <Pagination
              currentPage={currentPage - 1} // Pass currentPage - 1 to match array indices
              totalPages={Math.ceil(filteredBrands.length / itemsPerPage)}
              onPageChange={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ManageBrands;
