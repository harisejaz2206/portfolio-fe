import { createAsyncThunk } from "@reduxjs/toolkit";
import { catalogService } from "../../services/catalog.service";
import { IAddProductBody } from "./interfaces/product.interface";
import { productService } from "../../services/product.service";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (credentials: IAddProductBody, { rejectWithValue }) => {
    try {
      const response = await productService.addProductHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productService.getAllProductsHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

// export const deleteProduct = createAsyncThunk(
//   "product/deleteProduct",
//   async (id: string, { rejectWithValue }) => {
//     try {
//       const response = await productService.deleteProductHandler(id);
//       return response;
//     } catch (error: any) {
//       return rejectWithValue(
//         error.response?.data || "An error occurred while deleting the brand"
//       );
//     }
//   }
// );
