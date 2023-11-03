import { configureStore } from "@reduxjs/toolkit";
import cookies from "./features/cookies";

export default configureStore({
    reducer: {
        cookies_permission: cookies
    }
})