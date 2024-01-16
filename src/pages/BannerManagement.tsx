import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaPlusCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { deleteBanner, getBanners } from "../app/features/banner/banner.thunk";
import { Toast } from "../utils/toast";
import {
  selectBannerData,
  selectBannerLoading,
} from "../app/features/banner/banner.selector";
import { IBanner } from "../app/features/banner/interfaces/banner.interface";

export interface Banner {
  id: number;
  image: string;
  title: string;
  promotions: string;
  status: string;
}

const BannerManagement: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const bannerState = useSelector(selectBannerData) || [];
  console.log("bannerState", bannerState);
  const loading = useSelector(selectBannerLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getBanners()).then((result: any) => {
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

  const [searchQuery, setSearchQuery] = useState<string>("");
  const itemsPerPage: number = 5;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const totalPages: number = Math.ceil(bannerState.length / itemsPerPage);
  const startIndex: number = currentPage * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;

  const filteredBanners = bannerState.filter((banner) =>
    banner.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentBanners = filteredBanners.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleDeleteBanner = async (id: string) => {
    try {
      await dispatch(deleteBanner(id)).then((result: any) => {
        Toast.fire({
          icon: "success",
          title: result.payload.message,
        });
      });
      await dispatch(getBanners());
    } catch (error) {
      console.error("An error occurred while deleting the brand: ", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Banner Management
        </h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {/* <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search banners..."
                className="border rounded-md pl-10 pr-4 py-1 px-4 w-64 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div> */}
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="/multi-admin/add-banner"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
            >
              <FaPlusCircle className="mr-2" /> Add Banner
            </Link>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bannerState && bannerState.length > 0 ? (
              currentBanners.map((banner) => (
                <tr key={banner._id}>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <img
                      src={banner.image || ""}
                      alt={banner.name || ""}
                      className="w-16 h-10 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {banner.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span
                      className={`text-${banner.status ? "green" : "red"}-600`}
                    >
                      {banner.status ? "Active" : "Non-Active"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-center">
                    {/* <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
                      <FaEdit />
                    </button> */}
                    <button
                      className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                      onClick={() => handleDeleteBanner(banner._id || "")}
                    >
                      <FaTrash className="-ml-20" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No banners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BannerManagement;
