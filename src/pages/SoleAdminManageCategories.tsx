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
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import {
  selectCategoryData,
  selectCategoryLoading,
} from "../app/features/category/category.selector";
import {
  deleteCategory,
  getCategories,
} from "../app/features/category/category.thunk";
import { PropagateLoader } from "react-spinners";
import { Toast } from "../utils/toast";
import DeleteModal from "../components/globals/modal/DeleteModal";
import Pagination from "../components/Pagination";

interface ResponsePayload {
  message: string;
  // ... other expected properties
}

const SoleAdminManageCategories: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const categories = useSelector(selectCategoryData) || [];
  const loading = useSelector(selectCategoryLoading);
  const categoryState = useSelector(selectCategoryData);
  const itemsPerPage: number = 10;
  const [currentPage, setCurrentPage] = useState<number>(0);

  // State variables for DeleteModal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCategories()).then((result: any) => {
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

  const [searchCategoryNameQuery, setSearchCategoryNameQuery] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchCategoryNameQuery.toLowerCase())
  );

  const uploadSelectedFiles = () => {
    // Check if files were selected
    if (selectedFiles.length === 0) {
      alert("Please select one or more files.");
      return;
    }
    setSelectedFiles([]);
  };

  const handleDeleteClick = (categoryId: string) => {
    setCategoryToDelete(categoryId);
    setDeleteModalOpen(true);
  };

  const handleDelete = async (categoryId: string) => {
    try {
      await dispatch(deleteCategory(categoryId)).then((result: any) => {
        Toast.fire({
          icon: "success",
          title: result.payload.message,
        });
      });
      await dispatch(getCategories());
    } catch (error) {
      console.error("An error occurred while deleting the category: ", error);
    }
  };

  const totalPages: number = Math.ceil(
    filteredCategories.length / itemsPerPage
  );
  const startIndex: number = currentPage * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentCategories = filteredCategories.slice(startIndex, endIndex);

  // Pagination handler
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Manage Categories
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
                    placeholder="Search Category..."
                    className="border text-sm rounded-md pl-10 pr-4 py-1 px-4 w-48 focus:outline-none focus:ring focus:border-indigo-300"
                    value={searchCategoryNameQuery}
                    onChange={(e) => setSearchCategoryNameQuery(e.target.value)}
                  />
                </div>
                {/*<div className="relative">
                  <span className="absolute left-3 top-2 text-gray-400">
                    <FaSearch className="text-sm" />
                  </span>
                  <input
                    type="text"
                    placeholder="Select Store..."
                    className="border text-sm rounded-md pl-10 pr-4 py-1 px-4 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                    value={searchProductQuery}
                    onChange={(e) => setSearchProductQuery(e.target.value)}
                  />
                 </div> */}
              </div>

              {/*
              <div className="flex items-center space-x-2 text-sm">
                <Link to={"/path-to-sample-sheet/sample-sheet.xlsx"}>
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                    // download
                  >
                    <FaDownload className="mr-2" /> Download Sample Sheet
                  </button>
                </Link>
              </div>

                  */}
            </div>

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
                  {/*
                  <th className="px-6 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentCategories.map((category) => (
                  <tr key={category._id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {category.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {category.status ? "Active" : "Inactive"}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <img
                        src={category.image}
                        alt={category.name}
                        width="80"
                        height="80"
                      />
                    </td>
                    {/*}
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                      <Link to={`/multi-admin/edit-category/${category._id}`}>
                        <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
                          <FaEdit className=" -ml-20" />
                        </button>
                      </Link>

                      <button
                        className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                        onClick={() => handleDeleteClick(category._id!)}
                      >
                        <FaTrash className="-ml-16" />
                      </button>
                    </td>
                */}
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {/* DeleteModal */}
        {deleteModalOpen && (
          <DeleteModal
            title="Delete Category"
            description="Are you sure you want to delete this category?"
            onConfirm={() => {
              if (categoryToDelete) {
                handleDelete(categoryToDelete);
                setDeleteModalOpen(false);
              }
            }}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}

        {/* Table and category listing */}
      </div>
    </div>
  );
};

export default SoleAdminManageCategories;
