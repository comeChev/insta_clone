"use client";

import { signIn } from "next-auth/react";

export default function ButtonAuthProvider({ name, id }) {
  return (
    <button
      onClick={() =>
        signIn(id, { callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL + "/" })
      }
      className="bg-red-400 rounded-lg p-3 my-3 text-white hover:bg-red-500 duration-200 transition"
    >
      Sign in with {name}
    </button>
  );
}
