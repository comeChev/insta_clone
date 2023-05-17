"use client";

import { signIn } from "next-auth/react";

export default function ButtonAuthProvider({ name, id }) {
  return (
    <button
      onClick={() => signIn(id, { callbackUrl: "http://localhost:3000/" })}
      className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 duration-200 transition"
    >
      Sign in with {name}
    </button>
  );
}
