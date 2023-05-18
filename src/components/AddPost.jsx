"use client";
import { modalState } from "@/lib/atom/modalAtom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";

export default function AddPost() {
  const [open, setOpen] = useRecoilState(modalState);
  const { data: session } = useSession();

  function handleClick() {
    setOpen(true);
  }

  return (
    session && (
      <AiOutlinePlusCircle
        onClick={handleClick}
        className="text-xl hover:scale-125 transition duration-200 ease-in-out cursor-pointer"
      />
    )
  );
}
