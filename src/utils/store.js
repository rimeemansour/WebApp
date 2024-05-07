import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import chatReducer from "./chatSlice";
import userReducer from "./userSlice";
import signupReducer from "./signupSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        signup: signupReducer,
        app: appReducer,
        chat: chatReducer
    }
});

export default store;