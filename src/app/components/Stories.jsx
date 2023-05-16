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
    <div className="max-width-6xl mx-auto py-4">
      <ul className="flex gap-3 justify-center items-center overflow-hidden p-4">
        {storyUsers && storyUsers.map((user) => <Story user={user} />)}
      </ul>
    </div>
  );
}
