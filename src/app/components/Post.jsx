import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="my-8">
      <Image
        src={post.img}
        height={300}
        width={600}
        alt={post.caption}
        className="rounded"
      />
      <p className="px-4 mt-2 mb-3">{post.caption}</p>
      <div className="flex justify-between items-center px-4">
        <div className="flex space-x-2 items-center">
          <Image
            src={post.userImg}
            height={60}
            width={60}
            alt={post.username}
            className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-red-500"
          />
          <p className="text-sm text-gray-600">{post.username}</p>
        </div>
        <p className="text-gray-400 text-sm">10 min. ago</p>
      </div>
    </div>
  );
}
