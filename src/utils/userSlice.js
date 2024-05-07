import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
     async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://backend-practice.euriskomobility.me/login',
        userCredentials
      );
      const data = response.data;
      
      // Check if the response contains data
      if (!data || !data.data) {
        // If response data is missing, reject the promise with an error message
        return rejectWithValue('Login failed. Please try again.');
      }
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data.data));

      return data.data;
    } catch (error) {
      // Handle network errors or other unexpected errors
      console.error('Error logging in:', error);
      // Reject the promise with the error message
      return rejectWithValue('Login failed. Please try again.');
    }
  }
);

const userSlice = createSlice ({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder)=> {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading= true;
            state.user= null;
            state.error= null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading= false;
            state.user= action.payload;
            state.error= null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading= false;
            state.user= null;

            if (action.error.message === 'Request failed with status code 401') {
                state.error='Access denied! Invalid Credentials'
            } else {
                state.error= action.error.message;
            }
            
        })
    }
});

export default userSlice.reducer;