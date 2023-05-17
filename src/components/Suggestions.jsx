"use client";

import miniFaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = miniFaker.array(5, (i) => {
      return {
        username: miniFaker.username({ locale: "en" }).toLowerCase(),
        jobTitle: miniFaker.jobTitle({ locale: "en" }),
        avatar: `https://i.pravatar.cc/150?img=${Math.ceil(
          Math.random() * 70
        )}`,
        id: i,
      };
    });
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10 mr-5">
      <div className="flex justify-between items-center text-sm mb-5">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((suggestion) => (
        <UserProfile key={suggestion.id} user={suggestion} />
      ))}
    </div>
  );
}
