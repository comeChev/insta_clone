"use client";
import React from "react";
import { modalState } from "@/lib/atom/modalAtom";
import { useRecoilState } from "recoil";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <p>uploadmodal : {open ? "open" : "close"}</p>
      <button onClick={() => setOpen(!open)}>{open ? "Close" : "Open"}</button>
    </div>
  );
}
