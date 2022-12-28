import { createSlice } from "@reduxjs/toolkit";

//tạo biến lưu thông tin user
export const userSlice = createSlice({
  name: "user",
  initialState: {
    //giá trị khỏi tạo khi bắt đầu
    name: "Huu Dong",
    age: "24",
    about: "Hello,I'm web developer",
    ava: "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    theme: "#ff9051",
    pending: false,
    error: false,
  },
  reducers: {
    //chứa các hành động/function để thay đổi state
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.ava = action.payload.ava;
      state.theme = action.payload.theme;
    },
  },
});

//export reducer ra
export const { updateStart,updateError,updateSuccess } = userSlice.actions;
export default userSlice.reducer;
