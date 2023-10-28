import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaPlusCircle, FaShoppingCart, FaEye } from "react-icons/fa"; // Import icons
import Toggle from "react-toggle"; // Import the Toggle component
import "react-toggle/style.css"; // Import the styles for the Toggle component
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectCatalogData, selectCatalogLoading, selectGetCatalogData } from "../app/features/catalog/catalog.selector";
import { getCatalogs } from "../app/features/catalog/catalog.thunk";
import { Toast } from "../utils/toast";
import { PropagateLoader } from "react-spinners";

const ManageCatalog: React.FC = () => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const navigate = useNavigate();
    const loading = useSelector(selectCatalogLoading)
    const catalogState = useSelector(selectGetCatalogData);
    console.log("catalogState", catalogState)


    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getCatalogs()).then((result: any) => {
                    console.log("result", result);
                    Toast.fire({
                        icon: "success",
                        title: result.payload.message,
                    });
                }); // Using await with dispatch here
            } catch (error) {
                console.error("An error occurred while fetching data: ", error);
            }
        };
        fetchData()
    }, [dispatch]);

    const [catalog, setCatalog] = useState(catalogState);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10; // Number of items per page
    const [currentPage, setCurrentPage] = useState(0);

    // Function to filter products based on search query
    const filteredCatalog = catalogState!.filter(
        (catalog) =>
            catalog.name.toLowerCase().includes(searchQuery.toLowerCase())
        // catalog.brand!.toLowerCase().includes(searchQuery.toLowerCase())
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
                        <h1 className="text-xl font-semibold text-gray-800 mb-4">Catalog</h1>

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
                            <Link
                                to="/multi-admin/create-catalogue"
                                className="bg-indigo-600 text-white px-3 py-1 text-sm rounded-md"
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
                                        <td className="px-4 py-2 whitespace-no-wrap">{catalog.name}</td>
                                        <td className="px-4 py-2 whitespace-no-wrap">
                                            ${catalog.originalPrice}
                                        </td>
                                        <td className="px-4 py-2 whitespace-no-wrap">
                                            {catalog.brand ? catalog.brand.name : 'N/A'}
                                        </td>
                                        <td className="px-4 py-2 whitespace-no-wrap">
                                            {catalog.category ? catalog.category.name : 'N/A'}
                                        </td>

                                        <td className="px-4 py-2 whitespace-no-wrap text-right">
                                            <div className="flex items-center ml-[23%]">
                                                <Link
                                                    to={`/multi-admin/view-product/${catalog._id}`}
                                                    className="flex items-center justify-center px-2 py-1 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:underline text-sm"
                                                >
                                                    <FaEye className="mr-1 text-sm" />
                                                    View Product
                                                </Link>

                                                <Link
                                                    to={"/multi-admin/add-to-inventory-1"}
                                                    className="flex items-center justify-center px-2 py-1 rounded-md text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:underline ml-4 text-sm"
                                                >
                                                    <FaPlusCircle className="mr-1 text-sm" />
                                                    Add to Inventory
                                                </Link>
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
}

export default ManageCatalog;