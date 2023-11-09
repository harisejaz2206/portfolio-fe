import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import initialBannerState from "./banner.initialstate";
import { addBanner, deleteBanner, getBanners } from "./banner.thunk";

const bannerSlice = createSlice({
  name: "banner",
  initialState: initialBannerState,
  reducers: {
    clearBannerData: (state) => {
      return initialBannerState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBanner.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addBanner.fulfilled, (state, action) => {
      state.loading = false;
      // state.banner!.push(action.payload.payload?.banner!);
      state.message = action.payload.message;
    });

    builder.addCase(addBanner.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getBanners.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBanners.fulfilled, (state, action) => {
      state.loading = false;
      state.banner = action.payload.payload?.banners;
      state.message = action.payload.message;
    });

    builder.addCase(getBanners.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteBanner.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteBanner.fulfilled, (state, action) => {
      state.loading = false;
      // Remove the brand by its ID
      const id = action.payload.payload?.id!;
      state.banner = state.banner?.filter((banner) => banner._id !== id);
      state.message = action.payload.message;
    });

    builder.addCase(deleteBanner.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearBannerData } = bannerSlice.actions;
export default bannerSlice.reducer;
