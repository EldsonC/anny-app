import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    calendar: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "calendar",
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
export const stateCalendar = (state: Cookies) => state.calendar.state;

export default slice.reducer;