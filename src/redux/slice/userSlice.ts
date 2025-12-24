import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  username: string | null;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  uuid?: string | null;
  isLoggedIn: boolean
  // you can add other auth fields if needed, e.g., isLoggedIn, token
}

const initialState: UserState = {
  email: "",
  firstname: "",
  lastname: "",
  username: "",
  uuid: "",
  isLoggedIn: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<UserState>) => {
      return {...state, ...action.payload};
    },
    // logout no longer clears name
    logUserOut: (state: UserState) => {
      return {
        ...initialState,
        username: state.username,
        //FmcToken: state.FmcToken,
      };
    },
  },
});

export const { setUser, logUserOut } = userSlice.actions;
export default userSlice.reducer;
