import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    rightbar: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "rightbar",
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
export const stateRightbar = (state: Cookies) => state.rightbar.state;

export default slice.reducer;