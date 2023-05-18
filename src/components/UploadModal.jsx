"use client";
import React from "react";
import { modalState } from "@/lib/atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    open && (
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="max-w-lg w-[90%] absolute left-[50%] translate-x-[-50%] top-56 bg-white border-2 border-gray-400 rounded-md shadow-md"
      >
        <div className="flex flex-col justify-center items-center">
          <p>uploadmodal : {open ? "open" : "close"}</p>
          <button onClick={() => setOpen(false)}>
            {open ? "Close" : "Open"}
          </button>
        </div>
      </Modal>
    )
  );
}
