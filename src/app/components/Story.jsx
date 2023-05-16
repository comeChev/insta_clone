import Image from "next/image";

export default function Story({ user }) {
  return (
    <li key={user.id} className="w-16 h-16 mx-1">
      <Image
        src={user.img}
        height={150}
        width={150}
        alt={user.username}
        priority={true}
        className="object-fill rounded-full cursor-pointer w-14 h-14 border-2 border-gray-50 ring-2 ring-red-500 hover:scale-110 duration-200 ease-out transition-transform"
      />
      <p className="text-xs w-14 truncate mt-1">{user.username}</p>
    </li>
  );
}
