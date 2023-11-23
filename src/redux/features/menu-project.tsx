import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    menuproject: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "menuproject",
    initialState: {
        state: false
    },

    reducers: {
        show(state) {
            return {
                ...state,
                state: true
            }
        },

        hide(state) {
            return {
                ...state,
                state: false
            }
        }
    }
});

export const { show, hide } = slice.actions;
export const stateMenu = (state: Cookies) => state.menuproject.state;

export default slice.reducer;