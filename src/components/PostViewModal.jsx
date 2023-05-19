"use client";
import { useRecoilState } from "recoil";
import { modalViewPost, postViewModalState } from "@/lib/atom/modalAtom";
import Modal from "react-modal";
import Image from "next/image";
import {
  BsBookmark,
  BsChat,
  BsHeart,
  BsSend,
  BsThreeDots,
} from "react-icons/bs";
import Moment from "react-moment";
import TimestampMoment from "./TimestampMoment";
import { useSession } from "next-auth/react";

export default function PostViewModal() {
  const [open, setOpen] = useRecoilState(postViewModalState);
  const [post, setPost] = useRecoilState(modalViewPost);
  const { data: session } = useSession();

  function closeModal() {
    setOpen(false);
    setPost(null);
  }

  return (
    open &&
    post && (
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className="w-[75%] max-h-[75%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg outline-none border border-gray-400 mt-8 max-w-6xl"
      >
        <div className="flex flex-col md:flex-row md:space-x-3">
          {/* profile tab */}
          <div className="flex items-center space-x-2 m-4">
            <Image
              src={post.profilePic}
              height={40}
              width={40}
              alt={post.username}
              className="h-10 w-10 rounded-full object-cover border-2 ring-2 ring-red-500 border-white"
            />
            <div className="flex flex-col flex-1">
              <p className="font-bold text-sm">{post.username}</p>
              <p className="text-xs">{post.location || "Hyrule"}</p>
            </div>
            <BsThreeDots className="text-xl" />
          </div>

          {/* image post */}
          <Image
            src={post.imagePost}
            height={600}
            width={600}
            alt={post.caption}
            className="object-cover w-auto h-[60%] md:h-auto mb-3"
          />

          {/* buttons section */}
          {session && (
            <div className="flex mx-4 my-3 space-x-3 items-center">
              <div className="flex space-x-3 items-center flex-1">
                <BsHeart className="text-xl" />
                <BsChat className="text-xl" />
                <BsSend className="text-xl" />
              </div>
              <BsBookmark className="text-xl" />
            </div>
          )}

          {/* Like section */}
          <p className="mx-4 mb-2 text-sm font-bold">
            {post.likes || Math.floor(Math.random() * 1000)} Likes
          </p>

          <TimestampMoment
            css="text-sm mx-4 mb-2 text-gray-500"
            timestamp={post.timestamp.toDate()}
          />

          {/* caption and comments hide in mobile view*/}
          <div className="hidden md:inline-flex flex-1 min-w-50%">
            <p>{post.caption}</p>
            <div>
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex items-center">
                  <Image
                    src={comment.userImage}
                    height={40}
                    width={40}
                    alt={`${comment.username} profile pic`}
                    className="h-7 w-7"
                  />
                  <p>{comment.username}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    )
  );
}
