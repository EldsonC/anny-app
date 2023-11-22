import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    menufloat: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "menufloat",
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
export const stateMenu = (state: Cookies) => state.menufloat.state;

export default slice.reducer