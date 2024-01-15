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
import { selectBannerData, selectBannerLoading } from "../app/features/banner/banner.selector";
import { getBanners } from "../app/features/banner/banner.thunk";
import { Toast } from "../utils/toast";

const SoleChainManageBanner: React.FC = () => {
  const initialBanners = [
    {
      id: 1,
      image: "/Frame 20.png",
      title: "Special Offer",
      promotions: "50% Off",
      status: "Published",
    },
    {
      id: 2,
      image: "/Frame 38.png",
      title: "New Arrivals",
      promotions: "Shop Now",
      status: "Draft",
    },
    {
      id: 3,
      image: "/Frame 36.png",
      title: "Limited Time Sale",
      promotions: "Save Big",
      status: "Published",
    },
    {
      id: 4,
      image: "/Frame 37.png",
      title: "Summer Collection",
      promotions: "New Styles",
      status: "Published",
    },
    {
      id: 5,
      image: "/Frame 38.png",
      title: "Back to School",
      promotions: "Shop Now",
      status: "Draft",
    },
    {
      id: 6,
      image: "/Group 253.png",
      title: "Fall Fashion",
      promotions: "Latest Trends",
      status: "Draft",
    },
    {
      id: 7,
      image: "/hyptonics.png",
      title: "Winter Sale",
      promotions: "Clearance",
      status: "Published",
    },
    {
      id: 8,
      image: "/image 15.png",
      title: "Holiday Special",
      promotions: "Gift Ideas",
      status: "Published",
    },
    {
      id: 9,
      image: "/image 16.png",
      title: "Spring Collection",
      promotions: "New Arrivals",
      status: "Draft",
    },
    {
      id: 10,
      image: "/Group 253.png",
      title: "Easter Sale",
      promotions: "Huge Discounts",
      status: "Published",
    },
    {
      id: 11,
      image: "/hypnotics.png",
      title: "Summer Vacation",
      promotions: "Travel Deals",
      status: "Draft",
    },
    {
      id: 12,
      image: "/diuretics.png",
      title: "Tech Gadgets",
      promotions: "Latest Tech",
      status: "Published",
    },
    // Add more banners as needed
  ];

  const [banners, setBanners] = useState(initialBanners);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const itemsPerPage = 10; // Set the number of banners to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const filteredBanners = banners.filter(
    (banner) =>
      banner.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      banner.promotions.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFilterOptions = () => {
    setFilterOptionsVisible(!filterOptionsVisible);
  };

  const totalPages = Math.ceil(filteredBanners.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBanners = filteredBanners.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const dispatch = useDispatch<AppThunkDispatch>();
  const bannerState = useSelector(selectBannerData) || [];
  console.log("bannerState", bannerState)
  const loading = useSelector(selectBannerLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getBanners()).then((result: any) => {
          Toast.fire({
            icon: "success",
            title: result.payload.message
          })
        }); // Using await with dispatch here
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchData()
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Banner Management
        </h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="relative">
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
            </div>
            <div className="relative ml-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-2 rounded-md focus:outline-none flex items-center"
                onClick={toggleFilterOptions}
              >
                <FaFilter className="mr-1" />
              </button>
              {filterOptionsVisible && (
                <div className="absolute mt-2 p-2 border rounded-lg bg-white">
                  {/* Filter options here */}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="/sole-admin/add-banner"
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
                Banner Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bannerState.map((banner) => (
              <tr key={banner._id}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img
                    src={banner.image}
                    alt={banner.name}
                    className="w-16 h-10 object-cover rounded-lg"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{banner.name}</td>
                {/* <td className="px-6 py-4 whitespace-no-wrap">
                  {banner.}
                </td> */}
                <td className="px-6 py-4 whitespace-no-wrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${banner.status
                      ? "text-green-400"
                      : "text-yellow-400"
                      }`}
                  >
                    Active
                  </span>
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap">{banner.status}</td> */}
              </tr>
            ))}
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
}

export default SoleChainManageBanner;
