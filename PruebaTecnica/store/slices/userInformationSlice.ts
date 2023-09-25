import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: '',
  phoneNumber: '',
};

export const userInformationSlice = createSlice({
  name: 'userInformation',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});
//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const {setLastName, setName, setNumber} = userInformationSlice.actions;
//export default counterSlice.reducer

export default userInformationSlice.reducer;
