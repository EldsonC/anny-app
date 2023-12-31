import { configureStore } from "@reduxjs/toolkit";
import cookies from "./features/cookies";
import menuFloat from "./features/menu-float";
import menuProject from "./features/menu-project";
import theme from "./features/theme";
import menuTeams from "./features/menu-teams";
import rightbar from "./features/rightbar";
import qrcode from "./features/qrcode";
import addEmployee from "./features/addEmployee";

export default configureStore({
    reducer: {
        cookies_permission: cookies,
        menufloat: menuFloat,
        menuproject: menuProject,
        menuteams: menuTeams,
        themeapp: theme,
        rightbar: rightbar,
        qrcode: qrcode,
        employeeadd: addEmployee
    }
})