import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React from "react";
import { db } from "../../../../firebase";
import Image from "next/image";
import TimestampMoment from "@/components/TimestampMoment";

export default async function page({ params }) {
  const { id } = params;
  let post = {};
  let comments = [];

  // get post from firestore
  const docSnap = await getDoc(doc(db, "posts", id));
  post = docSnap.data();

  //get collection of comments from firestore
  const querySnap = await collection(db, "posts", id, "comments");
  const querySnapshot = await getDocs(querySnap);
  comments = querySnapshot.docs.map((doc) => doc.data());

  return (
    <main className={`grid ${"grid-cols-1 md:max-w-6xl mx-auto"}`}>
      <div className="flex flex-col px-4 w-full">
        <div className="flex items-center space-x-3 justify-between px-2 my-4">
          <div className="flex items-center space-x-2">
            <Image
              src={post.profilePic}
              height={40}
              width={40}
              alt={`${post.username} profile picture`}
              className="rounded-full h-10 w-10"
            />
            <p className="font-bold">{post.username}</p>
          </div>
          <TimestampMoment
            css="text-gray-400 text-sm"
            timestamp={post.timestamp.toDate()}
          />
        </div>
        <Image
          src={post.imagePost}
          height={600}
          width={600}
          alt={post.caption}
          className="object-cover h-auto w-full"
        />
        <p className="flex-1">{post.caption}</p>

        <div>
          {comments.map((comment, id) => (
            <p key={id}>{comment.comment}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
