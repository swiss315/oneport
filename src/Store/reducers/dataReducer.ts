// src/Store/reducers/dataReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import {saveDataRequest, saveNextMonthRequest, savePrevMonthRequest, saveUpdateDataRequest} from '../action';

const currentDate = new Date();
interface Row {
    basis: string;
    measure: string;
    unit: string;
    rate: string;
    amount: string;
}

interface Section {
    sectionLabel: string;
    rows: Row[];
    currency: string;
    currencyAmount: string;
}

interface QuoteData {
    quoteTitle: string;
    date: string;
    section: Section[]
    // Add other properties as needed
}

interface State {
    savedData: {
        [key: string]: QuoteData;
    };
    currentMonth: number;
}

const initialState: State = {
    savedData: {},
    currentMonth: currentDate.getMonth() + 1,
};

const dataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(saveDataRequest, (state, action) => {
            state.savedData = { ...state.savedData, ...action.payload };
        })
        .addCase(saveUpdateDataRequest, (state, action) => {
            const { date, section } = action.payload;

            // Ensure the state.savedData has an entry for the specified date
            if (state.savedData[date]) {
                // Update the specific section for the given date
                state.savedData[date] = {
                    ...state.savedData[date],
                    section: [...section], // Ensure you are updating the section array correctly
                };
            } else {
                // If no entry exists for the date, create a new one
                state.savedData[date] = {
                    ...state.savedData[date],
                    section: [...section],
                };
            }

        })
        .addCase(saveNextMonthRequest, (state, action) => {
            if (state.currentMonth < 12) {
                state.currentMonth += action.payload;
            }
        })
        .addCase(savePrevMonthRequest, (state, action) => {
            if (state.currentMonth > 1) {
                state.currentMonth -= action.payload;
            }
        });
});

export default dataReducer;
