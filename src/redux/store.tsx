import { configureStore } from "@reduxjs/toolkit";
import cookies from "./features/cookies";
import menuFloat from "./features/menu-float";

export default configureStore({
    reducer: {
        cookies_permission: cookies,
        menufloat: menuFloat
    }
})