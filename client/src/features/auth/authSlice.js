
import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));


const initialState = {
	user: user ? user : null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserToken = (state) => state.auth.user?.accessToken;

export const selectCurrentUserGoogleToken = (state) => state.auth?.googleToken;
