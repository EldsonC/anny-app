import { configureStore } from "@reduxjs/toolkit";
import cookies from "./features/cookies";
import menuFloat from "./features/menu-float";
import menuProject from "./features/menu-project";
import theme from "./features/theme";

export default configureStore({
    reducer: {
        cookies_permission: cookies,
        menufloat: menuFloat,
        menuproject: menuProject,
        themeapp: theme
    }
})