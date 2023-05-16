"use client";

import Image from "next/image";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between group mt-14 ml-10">
      <Image
        height={200}
        width={200}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.braceletbookcdn.com%2Fusers%2F000%2F000%2F009%2F076%2F000000009076%2Fimage.jpg&f=1&nofb=1&ipt=5c65b538c9355a0aa5e864a1466e97388ef011a65c41b4ae673528dc23166b39&ipo=images"
        alt="User Profile Picture"
        className="h-16 w-16 object-contain rounded-full cursor-pointer border p-1"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">link.z</h2>
        <p className="text-sm text-gray-400">Welcome to Instagram</p>
      </div>
      <button className="font-semibold text-blue-400 text-sm hover:underline underline-offset-1">
        Sign out
      </button>
    </div>
  );
}
