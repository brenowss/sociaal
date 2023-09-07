import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RegisterState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  location: string;
  occupation: string;
};

type InitialState = {
  value: RegisterState;
};

const initialState = {
  value: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    picturePath: '',
    location: '',
    occupation: '',
  } as RegisterState,
};

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{ field: keyof RegisterState; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.value[field] = value;
    },
  },
});

export const { setField } = RegisterSlice.actions;

export default RegisterSlice.reducer;
