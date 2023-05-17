"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    session && (
      <div className="flex items-center justify-between group mt-6 ml-10 mr-5">
        <Image
          height={200}
          width={200}
          src={session.user.image}
          alt="User Profile Picture"
          className="h-16 w-16 object-contain rounded-full cursor-pointer border p-1"
        />
        <div className="flex-1 ml-4">
          <h2 className="font-bold">{session.user.username}</h2>
          <p className="text-sm text-gray-400">Welcome to Instagram</p>
        </div>
        <button
          onClick={() => signOut()}
          className="font-semibold text-blue-400 text-sm hover:underline underline-offset-1"
        >
          Sign out
        </button>
      </div>
    )
  );
}
