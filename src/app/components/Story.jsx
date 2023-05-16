import Image from "next/image";

export default function Story({ user }) {
  return (
    <li key={user.id} className="w-12 h-12 mx-1">
      <Image
        src={user.img}
        height={150}
        width={150}
        alt={user.username}
        priority={true}
        className="object-fill rounded-full cursor-pointer w-12 h-12 border-2 border-gray-50 ring-2 ring-red-700 hover:scale-110 duration-200 ease-in-out transition"
      />
      <p className="text-xs truncate mt-1">{user.username}</p>
    </li>
  );
}
