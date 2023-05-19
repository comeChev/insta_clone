"use client";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function PostCommentForm({ placeholder, disabled, postId }) {
  const [comment, setComment] = useState("");
  const { data: session } = useSession();

  async function sendComment() {
    //send comment to firestore
    await addDoc(collection(db, "posts", postId, "comments"), {
      comment: comment,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendComment();
    //alert(`Comment posted! : ${comment}`);
    setComment("");
  }
  function handleChange(e) {
    setComment(e.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4">
      <BsEmojiSmile />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={comment}
        disabled={disabled}
        className="border-none focus:ring-2 ring-blue-700 flex-1 rounded mx-4 disabled:cursor-not-allowed"
      />
      <button
        className="text-blue-500 cursor-pointer disabled:text-blue-200 disabled:cursor-not-allowed"
        disabled={!comment.trim()}
        type="submit"
      >
        Post
      </button>
    </form>
  );
}
