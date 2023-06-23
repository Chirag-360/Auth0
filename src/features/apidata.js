import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: "",
  name: "",
  picture: "",
  updated_at: "",
  email: "",
};

// {nickname: 'wivevi5308', name: 'wivevi5308@anomgo.com', picture: 'https://s.gravatar.com/avatar/041561c83509d5c08368…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwi.png', updated_at: '2023-06-23T08:29:57.336Z', email: 'wivevi5308@anomgo.com', …}

export const apiSlice = createSlice({
  name: "api",
  initialState: { value: initialState },
  reducers: {
    profileChange: (state, action) => {
      state.value.nickname = action.payload.nickname;
      state.value.name = action.payload.name;
      state.value.picture = action.payload.picture;
      state.value.updated_at = action.payload.updated_at;
      state.value.email = action.payload.email;
    },  
  },
});

export const { profileChange } = apiSlice.actions;

export default apiSlice.reducer;

// console.log(apiSlice);
