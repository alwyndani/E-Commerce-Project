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
            state.productData = action.payload;
        }
    }
});

export const {addToCart} = zenSlice.actions;
export default zenSlice.reducer;