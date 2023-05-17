"use client";
import { modalState } from "@/lib/atom/modalAtom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";

export default function AddPost() {
  const [open, setOpen] = useRecoilState(modalState);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <AiOutlinePlusCircle
      onClick={handleClick}
      className="text-xl hover:scale-125 transition duration-200 ease-in-out cursor-pointer"
    />
  );
}
