import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    daysettings: {
        settings: []
    }
}

export const slice = createSlice({
    name: "daysettings",
    initialState: {
        settings: []
    },

    reducers: {
        getSettings(state, {payload}) {
            return {
                ...state,
                settings: payload
            }
        }
    }
});

export const { getSettings } = slice.actions;
export const stateSettingsDay = (state: Cookies) => state.daysettings.settings;

export default slice.reducer;