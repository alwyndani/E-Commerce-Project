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
            )
            if (item) {
                item.Quantity += action.payload.Quantity
            }
            else {
            state.productData.push(action.payload);
        }}
    }
});

export const {addToCart} = zenSlice.actions;
export default zenSlice.reducer;