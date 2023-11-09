import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaPlusCircle,
  FaShoppingCart,
  FaEye,
  FaCheck,
  FaTimes,
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
import { IAddProductBody } from "../app/features/product/interfaces/product.interface";
import { addProduct } from "../app/features/product/product.thunk";
import { selectProductLoading } from "../app/features/product/product.selector";

const SoleAdminManageCatalogue: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectCatalogLoading);
  const catalogState = useSelector(selectGetCatalogData);
  const [selectedCatalogId, setSelectedCatalogId] = useState<string | null>(
    null
  );

  const [catalog, setCatalog] = useState(catalogState);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0);

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

  const [showAddQuantityForm, setShowAddQuantityForm] = useState(false);
  const [quantity, setQuantity] = useState(0);

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

  const handleAddToInventory = (catalogId: string) => {
    setSelectedCatalogId(catalogId);
    setShowAddQuantityForm(true);
  };

  const handleSubmitQuantity = async () => {
    if (selectedCatalogId && quantity > 0) {
      try {
        const credentials: IAddProductBody = {
          catalogItemId: selectedCatalogId,
          quantity: quantity,
        };
        await dispatch(addProduct(credentials)).then((result: any) => {
          if (result.payload.status === false) {
            Toast.fire({
              icon: "error",
              title: result.payload.message,
            });
          } else {
            Toast.fire({
              icon: "success",
              title: result.payload.message,
            });
          }
        });
      } catch (error) {
        console.error(
          "An error occurred while adding the product to inventory: ",
          error
        );
      } finally {
        setShowAddQuantityForm(false);
        setSelectedCatalogId(null);
        navigate("/sole-admin/catalogue");
        await dispatch(getCatalogs());
      }
    }
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

            <div className="flex items-center mb-4">
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
                    Sale Price
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

                    <td className="px-4 py-2 whitespace-no-wrap text-right">
                      <div className="flex items-center ml-[23%]">
                        <button
                          onClick={() => handleAddToInventory(catalog._id)}
                          className="bg-indigo-600 text-white px-2 py-1 text-sm rounded-md mr-2 hover:bg-indigo-700"
                        >
                          Add to Inventory
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
                      className={`px-3 py-1 ${
                        i === currentPage
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
          {/* Add Quantity Form */}
          {showAddQuantityForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Add Quantity
                  </h2>
                  <button onClick={() => setShowAddQuantityForm(false)}>
                    <FaTimes className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-indigo-300"
                      value={quantity.toString()}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value, 10))
                      }
                    />
                    <button
                      onClick={handleSubmitQuantity}
                      className="bg-indigo-600 text-white px-4 py-2 ml-2 text-sm rounded-md flex items-center"
                    >
                      <FaCheck className="mr-2" />
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SoleAdminManageCatalogue;
