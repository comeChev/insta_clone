"use client";

import { array, username, avatar } from "minifaker";
import "minifaker/locales/en";
import Image from "next/image";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const storyUsers = array(20, (i) => {
      return {
        id: i,
        username: username({ locale: "en" }).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      };
    });
    setStoryUsers(storyUsers);
  }, []);

  return (
    <ul className="flex items-center p-6 space-x-4 bg-white rounded overflow-scroll hide-scrollbar">
      {session && <Story user={session.user} isUser={true} />}
      {storyUsers &&
        storyUsers.map((user) => <Story key={user.id} user={user} />)}
    </ul>
  );
}
