import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    cookies_permission: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "cookies_permission",
    initialState: {
        state: false
    },

    reducers: {
        setPermissions(state) {
            return {
                ...state,
                state: true
            }
        }
    }
});

export const { setPermissions } = slice.actions;
export const permissionState = (state: Cookies) => state.cookies_permission.state;

export default slice.reducer