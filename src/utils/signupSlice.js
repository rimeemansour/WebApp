import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk for signing up a user
export const signUpUser = createAsyncThunk(
    'user/signUpUser',
    async ({ email, password }) => { // Destructure user credentials from payload
        try {
            // Send a POST request to the sign-up endpoint with the user's credentials
            const response = await axios.post('https://backend-practice.euriskomobility.me/signup', {
                email: email,
                password: password
            });
            // Extract the response data
            const data = response.data;

            // Return the response data
            return data;
        } catch (error) {
            // If an error occurs, throw it to be handled by the rejected case
            throw error;
        }
    }
);

// Define the sign-up slice
const signUpSlice = createSlice({
    name: 'signup',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error.message;
            });
    }
});

// Export the sign-up reducer
export default signUpSlice.reducer;
