import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

export default function Post({ post }) {
  return (
    <div className="my-8">
      {/* Post Header */}
      <div className="flex space-x-2 items-center mb-3 px-5 py-2">
        <Image
          height={60}
          width={60}
          src={post.userImg}
          alt={post.username}
          className="h-8 w-8 rounded-full object-cover border"
        />
        <p className="text-sm font-bold text-gray-600 flex-1">
          {post.username}
        </p>
        <BsThreeDots className="text-xl cursor-pointer" />
      </div>

      {/* Post Image */}
      <Image
        src={post.img}
        height={300}
        width={600}
        alt={post.caption}
        className="rounded mx-auto"
      />
      <p className="px-4 mt-2 mb-3">{post.caption}</p>
    </div>
  );
}
