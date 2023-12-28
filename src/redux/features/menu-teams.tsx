import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    menuteams: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "menuteams",
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
export const stateMenuTeams = (state: Cookies) => state.menuteams.state;

export default slice.reducer;