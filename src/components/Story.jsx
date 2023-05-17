import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

export default function Story({ user, isUser = false }) {
  return (
    <li key={user.id} className="group w-16 h-16 mx-1 cursor-pointer">
      <div className="relative flex items-center justify-center border-2 border-gray-50 ring-2 ring-red-500 rounded-full duration-200 ease-out transition-transform group-hover:scale-110">
        <Image
          src={user.img || user.image}
          height={150}
          width={150}
          alt={user.username}
          priority={true}
          className={`object-fill rounded-full w-14 h-14 ${
            isUser && "group-hover:brightness-75"
          } `}
        />
        {isUser && (
          <AiOutlinePlus className="hidden group-hover:flex absolute text-white text-4xl" />
        )}
      </div>
      <p className="text-xs w-14 truncate mt-1">{user.username}</p>
    </li>
  );
}
