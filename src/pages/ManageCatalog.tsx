import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaPlusCircle,
  FaShoppingCart,
  FaEye,
  FaTrash,
} from "react-icons/fa"; // Import icons
import Toggle from "react-toggle"; // Import the Toggle component
import "react-toggle/style.css"; // Import the styles for the Toggle component
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import {
  selectCatalogData,
  selectCatalogLoading,
  selectGetCatalogData,
} from "../app/features/catalog/catalog.selector";
import { getCatalogs } from "../app/features/catalog/catalog.thunk";
import { Toast } from "../utils/toast";
import { PropagateLoader } from "react-spinners";

const ManageCatalog: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectCatalogLoading);
  const catalogState = useSelector(selectGetCatalogData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCatalogs()).then((result: any) => {
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

  const [catalog, setCatalog] = useState(catalogState);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0);

  // Function to filter products based on search query
  const filteredCatalog = (catalogState || []).filter((catalog) =>
    catalog.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle pagination
  const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const currentItems = filteredCatalog.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
          <PropagateLoader color={"#123123"} loading={true} size={15} />
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Catalog
            </h1>

            <div className="flex items-center justify-between mb-4">
              <div className="relative flex items-center">
                <span className="absolute left-3 top-2 text-gray-400">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link
                to="/multi-admin/create-catalogue"
                className="bg-indigo-600 text-white px-3 py-2 text-sm rounded-md"
              >
                Add Catalog
              </Link>
            </div>
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Original Price
                  </th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sales Price
                  </th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Brand
                  </th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((catalog) => (
                  <tr key={catalog._id}>
                    <td className="px-4 py-2 whitespace-no-wrap">
                      {catalog.name}
                    </td>
                    <td className="px-4 py-2 whitespace-no-wrap">
                      ${catalog.originalPrice}
                    </td>
                    <td className="px-4 py-2 whitespace-no-wrap">
                      ${catalog.salePrice}
                    </td>
                    <td className="px-4 py-2 whitespace-no-wrap">
                      {catalog.quantity}
                    </td>
                    <td className="px-4 py-2 whitespace-no-wrap">
                      {catalog.brand ? catalog.brand.name : "N/A"}
                    </td>
                    <td className="px-4 py-2 whitespace-no-wrap">
                      {catalog.category ? catalog.category.name : "N/A"}
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                      {/* Flex container for "Action" and trash icon */}
                      <div className="flex justify-between items-center">
                        <button
                          className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-14"
                          onClick={() => { }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 flex justify-center">
              <ul className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      className={`px-3 py-1 ${i === currentPage
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-300 hover:bg-gray-400 text-gray-600"
                        } rounded-md`}
                      onClick={() => handlePageChange(i)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageCatalog;
