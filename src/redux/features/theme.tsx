import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    themeapp: {
        state: string;
    }
}

export const slice = createSlice({
    name: "themeapp",
    initialState: {
        state: "dark"
    },

    reducers: {
        setDark(state) {
            return {
                ...state,
                state: "dark"
            }
        },
        setLight(state) {
            return {
                ...state,
                state: "light"
            }
        },
    }
});

export const { setDark, setLight } = slice.actions;
export const stateTheme = (state: Cookies) => state.themeapp.state;

export default slice.reducer