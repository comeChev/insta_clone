"use client";

import { array, username, avatar } from "minifaker";
import "minifaker/locales/en";
import Image from "next/image";
import { useEffect, useState } from "react";
import Story from "./Story";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const storyUsers = array(20, (i) => {
      return {
        id: i,
        username: username({ locale: "en" }).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${i}`,
      };
    });
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);

  return (
    <ul className="flex justify-center items-center  mx-auto p-6 mt-8 space-x-4 bg-white rounded overflow-scroll hide-scrollbar">
      {storyUsers && storyUsers.map((user) => <Story user={user} />)}
    </ul>
  );
}
