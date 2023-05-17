"use client";
import { signOut, useSession } from "next-auth/react";
import { LoginButton } from "./buttons.component";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";

export default function SessionLog() {
  const { data: session, status } = useSession();
  return (
    <>
      {/* <p>{JSON.stringify(session)}</p> */}
      {status === "authenticated" ? (
        <>
          <div
            onClick={() => signOut()}
            className=" flex items-center justify-center group relative h-10 w-10 object-contain border-2 rounded-full cursor-pointer hover:ring-2 hover:ring-red-800"
          >
            <Image
              height={200}
              width={200}
              src={session.user.image}
              alt="User Profile Picture"
              className="rounded-full group-hover:brightness-50"
            />
            <FiLogOut className="hidden absolute text-white text-2xl group-hover:flex transition duration-200" />
          </div>
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}
