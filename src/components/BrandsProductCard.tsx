import React, { useEffect } from 'react';
import BrandCard from './BrandCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../store/rootReducer';
import { selectUserBrandData, selectUserBrandLoading } from '../app/features/userportal-brand/brand.selector';
import { getUserBrands } from '../app/features/userportal-brand/brand.thunk';
import { PropagateLoader } from 'react-spinners';

const BrandsProductCard: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  // const navigate = useNavigate();
  // const userCategories = useSelector(selectUserCategoryData);
  const userBrands = useSelector(selectUserBrandData) || [];
  const userBrandsLoading = useSelector(selectUserBrandLoading)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to dispatch getUserBrands");
        await dispatch(getUserBrands()).then((result) => {
          console.log('user brands result: ', result);
        }).catch((error) => {
          console.log('error: ', error);
        });
      } catch (error) {
        console.error("An error occurred while fetching user brands: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log("userBrands data api:", userBrands);

  return (
    <div className='py-8'>
      {userBrandsLoading ? (// Render loader while data is loading
        <div className="flex justify-center items-center h-full">
          <PropagateLoader color={"#123123"} loading={true} size={15} />
        </div>) : (<div className="container mx-auto px-5 sm:px-11 md:px-24 px- grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {userBrands.map((brand, index) => (
            <BrandCard key={index} product={brand} />
          ))}
        </div>)}

    </div>
  );
}

export default BrandsProductCard;
