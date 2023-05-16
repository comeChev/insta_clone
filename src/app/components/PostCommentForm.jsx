"use client";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";

export default function PostCommentForm() {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Comment posted! : ${comment}`);
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
        placeholder="Add a comment..."
        onChange={handleChange}
        value={comment}
        className="border-none focus:ring-2 ring-blue-700 flex-1 rounded mx-4"
      />
      <button
        className="text-blue-500 cursor-pointer disabled:opacity-50 disabled:text-gray-400 disabled:cursor-not-allowed"
        disabled={!comment.trim()}
      >
        Post
      </button>
    </form>
  );
}
