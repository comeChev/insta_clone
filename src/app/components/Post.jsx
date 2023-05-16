import Image from "next/image";
import {
  BsThreeDots,
  BsBookmark,
  BsHeart,
  BsChatLeftDots,
} from "react-icons/bs";

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

      {/* Buttons  */}
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <BsHeart className="btn-post" />
          <BsChatLeftDots className="btn-post" />
        </div>
        <BsBookmark className="btn-post" />
      </div>

      {/* Caption */}
      <div className="flex items-center px-4 mt-4 mb-3">
        <p className="font-bold">{post.username}</p>
        <p className="ml-3">{post.caption}</p>
      </div>
    </div>
  );
}
