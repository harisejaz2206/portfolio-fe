import { combineReducers } from "redux";
import { ThunkDispatch, AnyAction, Store } from "@reduxjs/toolkit";
import authSlice from "../app/features/auth/auth.slice";
import outletSlice from "../app/features/outlet/outlet.slice";
import brandSlice from "../app/features/brand/brand.slice";
import categorySlice from "../app/features/category/category.slice";
import storeSlice from "../app/features/store/store.slice";
import catalogSlice from "../app/features/catalog/catalog.slice";
import productSlice from "../app/features/product/product.slice";
import bannerSlice from "../app/features/banner/banner.slice";
import cartSlice from "../app/features/cart/cart.slice";
import wishlistSlice from "../app/features/wishlist/wishlist.slice";
import userBrandSlice from "../app/features/userportal-brand/brand.slice";
import userCategoriesSlice from "../app/features/userportal-category/category.slice";
import userBrandsSlice from "../app/features/users/users.slice";
import orderSlice from "../app/features/order/order.slice";

const rootReducer = combineReducers({
  auth: authSlice,
  outlet: outletSlice,
  brand: brandSlice,
  category: categorySlice,
  store: storeSlice,
  catalog: catalogSlice,
  product: productSlice,
  banner: bannerSlice,
  cart: cartSlice,
  wishlist: wishlistSlice,
  usercategoryslice: userCategoriesSlice,
  userbrandslice: userBrandSlice,
  users: userBrandsSlice,
  order: orderSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};
// Purpose: This file is responsible for combining all the individual reducers (slices of state) into a single root reducer.

// combineReducers: A function provided by Redux that takes an object with all the slice reducers and combines them into a single reducer function.
// RootState: A TypeScript type that represents the entire state tree. It's used to help TypeScript understand the structure of the state.
