import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const zenSlice = createSlice({
  name: "ZenZest",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.Quantity += action.payload.Quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
        state.productData = state.productData.filter(
            (item) => item._id !== action.payload
        )
    },
    resetCart: (state) => {
      state.productData = []
    },
    increamentQuantity: (state, action) => {
        const item = state.productData.find(
            (item) => item._id === action.payload._id
        );
        if (item) {
            item.Quantity++;
        }
    },
    decreamentQuantity: (state, action) => {
        const item = state.productData.find(
            (item) => item._id === action.payload._id
        );
        if (item.Quantity === 1) {
            item.Quantity = 1;
        }
        else {
            item.Quantity--;
        }
    },
    // =========== User Start Here ===========//
    addUser: (state, action) => {
     state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    // ============ User End Here ============//
  },
});

export const { addToCart, deleteCart, resetCart, increamentQuantity, decreamentQuantity, addUser, removeUser } = zenSlice.actions;
export default zenSlice.reducer;
