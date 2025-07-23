import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { modelType } from '../data/phoneModels';

type CompareState = {
    selectedModels: modelType[];
    showDifferences: boolean;
};

const initialState: CompareState = {
    selectedModels: [],
    showDifferences: false,
};

export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        setModels(state, action: PayloadAction<modelType[]>) {
            state.selectedModels = action.payload;
        },
        replaceModel(
            state,
            action: PayloadAction<{ index: number; newModel: modelType }>
        ) {
            const { index, newModel } = action.payload;

            const exists = state.selectedModels.some(
                (m, i) => i !== index && m.id === newModel.id
            );
            if (!exists) {
                state.selectedModels[index] = newModel;
            }
        },
        toggleShowDifferences(state) {
            state.showDifferences = !state.showDifferences;
        },
    },
});

export const { setModels, replaceModel, toggleShowDifferences } = compareSlice.actions;
export default compareSlice.reducer;
