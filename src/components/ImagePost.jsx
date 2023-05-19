"use client";

import { modalViewId, postViewModalState } from "@/lib/atom/modalAtom";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function ImagePost({ idPost, imagePost, caption }) {
  return (
    <Image
      src={imagePost}
      height={600}
      width={600}
      alt={caption}
      priority={true}
      className="rounded mx-auto w-full"
    />
  );
}
