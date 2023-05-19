import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const postViewModalState = atom({
  key: "postViewModalState",
  default: false,
});

export const modalViewPost = atom({
  key: "modalViewPost",
  default: null,
});
