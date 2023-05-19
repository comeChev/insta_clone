"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Image from "next/image";
import Moment from "react-moment";

export default function PostComments({ comments }) {
  return (
    comments.length > 0 && (
      <div className="mx-10 max-h-24 overflow-y-scroll hide-scrollbar">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-center my-3 space-x-2">
            <Image
              src={comment.userImage}
              width={40}
              height={40}
              alt={`${comment.username} profile pic`}
              className="rounded-full object-cover h-7 w-7"
            />
            <p className="font-semibold">{comment.username}</p>

            <p className="truncate flex-1">{comment.comment}</p>
            <Moment fromNow className="text-gray-400 text-sm">
              {comment.timestamp?.toDate()}
            </Moment>
          </div>
        ))}
      </div>
    )
  );
}
