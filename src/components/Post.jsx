"use client";

import Image from "next/image";
import {
  BsThreeDots,
  BsBookmark,
  BsHeart,
  BsChatLeftDots,
  BsEmojiSmile,
} from "react-icons/bs";
import PostCommentForm from "./PostCommentForm";
import { useSession } from "next-auth/react";
import PostComments from "./PostComments";
import { Link } from "next/link";
import ImagePost from "./ImagePost";
import { useRecoilState } from "recoil";
import {
  modalViewComments,
  modalViewPost,
  postViewModalState,
} from "@/lib/atom/modalAtom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

export default function Post({ post, idPost }) {
  const { data: session } = useSession();
  const [open, setIsOpen] = useRecoilState(postViewModalState);
  const [currentPost, setCurrentPost] = useRecoilState(modalViewPost);
  const [comments, setComments] = useState([]);

  function handleClick() {
    setOpen(true);
  }

  useEffect(() => {
    //fetch comments from firestore
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", idPost, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(
          snapshot.docs.map((doc) => {
            const data = { ...doc.data(), id: doc.id };
            return data;
          })
        );
      }
    );
  }, []);

  function handleOpenModal() {
    setCurrentPost({ ...post, comments: comments });
    setIsOpen(true);
  }

  return (
    <div className="my-8">
      {/* Post Header */}
      <div className="flex space-x-2 items-center mb-3 px-5 py-2">
        <Image
          height={40}
          width={40}
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
      <div onClick={handleOpenModal}>
        <ImagePost
          id={idPost}
          caption={post.caption}
          imagePost={post.imagePost}
        />
      </div>

      {/* Buttons  */}
      {/* Only visible once connected */}
      {session && (
        <div className="flex justify-between items-center p-4">
          <div className="flex space-x-4">
            <BsHeart className="btn-post" />
            <BsChatLeftDots className="btn-post" />
          </div>
          <BsBookmark className="btn-post" />
        </div>
      )}

      {/* Caption */}

      <p className="p-4 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>
      {comments && <PostComments comments={comments} />}

      {/* Post input comment */}
      {/* Only visible once connected */}
      {session && (
        <PostCommentForm
          placeholder="Add a comment..."
          disabled={!session}
          postId={idPost}
        />
      )}
    </div>
  );
}
