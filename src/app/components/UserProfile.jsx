import Image from "next/image";

export default function UserProfile({ user }) {
  return (
    <div className="flex items-center mt-3 justify-between">
      <Image
        src={user.avatar}
        height={150}
        width={150}
        alt={user.username}
        className="h-10 w-10 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{user.username}</h2>
        <h3 className="text-sm text-gray-400 truncate w-[230px]">
          {user.jobTitle}
        </h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm hover:underline underline-offset-1">
        Follow
      </button>
    </div>
  );
}
