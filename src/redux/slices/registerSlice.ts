import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface RegisterState {
  email: string;
  password: string;
  newPassword: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  dateOfBirth: string;
  mobile: string;
  progress: number;
}

const initialState: RegisterState = {
  email: '',
  password: '',
  newPassword: '',
  firstName: '',
  lastName: '',
  city: '',
  country: '',
  dateOfBirth: dayjs(new Date()).format('MM-DD-YYYY'),
  mobile: '',
  progress: 0,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    onChangeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    onChangePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    onChangeNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;
    },
    onChangeFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    onChangeLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    onChangeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    onChangeCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    onChangeDOB: (state, action: PayloadAction<string>) => {
      state.dateOfBirth = action.payload;
    },
    onChangePhone: (state, action: PayloadAction<string>) => {
      state.mobile = action.payload;
    },
    onChangeProgess: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export const {
  onChangeEmail,
  onChangePassword,
  onChangeNewPassword,
  onChangeFirstName,
  onChangeLastName,
  onChangeCity,
  onChangeCountry,
  onChangeDOB,
  onChangePhone,
  onChangeProgess,
} = registerSlice.actions;

export default registerSlice.reducer;
