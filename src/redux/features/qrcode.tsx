import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    qrcode: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "qrcode",
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
export const stateQrcode = (state: Cookies) => state.qrcode.state;

export default slice.reducer;