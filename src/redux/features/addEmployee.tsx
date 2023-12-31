import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    employeeadd: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "employeeadd",
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
export const stateEmployee = (state: Cookies) => state.employeeadd.state;

export default slice.reducer;