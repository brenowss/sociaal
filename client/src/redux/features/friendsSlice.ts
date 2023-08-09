import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FriendsState = {
  friends: any[];
};

type InitialState = {
  value: FriendsState;
};

const initialState = {
  value: {
    friends: [],
  } as FriendsState,
} as InitialState;

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action: PayloadAction<FriendsState>) => {
      state.value.friends = action.payload.friends;
    },
  },
});

export const { setFriends } = friendsSlice.actions;
export default friendsSlice.reducer;
