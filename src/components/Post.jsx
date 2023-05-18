import Image from "next/image";
import {
  BsThreeDots,
  BsBookmark,
  BsHeart,
  BsChatLeftDots,
  BsEmojiSmile,
} from "react-icons/bs";
import PostCommentForm from "./PostCommentForm";

export default function Post({ post, id }) {
  return (
    <div className="my-8">
      {/* Post Header */}
      <div className="flex space-x-2 items-center mb-3 px-5 py-2">
        <Image
          height={60}
          width={60}
          src={post.profilePic}
          alt={post.username}
          className="h-8 w-8 rounded-full object-cover border"
        />
        <p className="text-sm font-bold text-gray-600 flex-1">
          {post.username}
        </p>
        {/* <p>{post.timestamp}</p> */}
        <BsThreeDots className="text-xl cursor-pointer" />
      </div>

      {/* Post Image */}
      <Image
        src={post.imagePost}
        height={300}
        width={600}
        alt={post.caption}
        className="rounded mx-auto w-full"
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

      <p className="p-4 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>

      {/* Post input comment */}
      <PostCommentForm />
    </div>
  );
}
