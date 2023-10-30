import { createSlice} from '@reduxjs/toolkit';
const initialState = {
    data: [],
    loading: false,
    error: null,
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getDataSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        getDataFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export const { getDataRequest, getDataSuccess, getDataFail} = dataSlice.actions;
export default dataSlice.reducer 