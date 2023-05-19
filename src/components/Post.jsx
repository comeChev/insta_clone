"use client";

import Image from "next/image";
import {
  BsThreeDots,
  BsBookmark,
  BsHeart,
  BsChatLeftDots,
  BsEmojiSmile,
  BsHeartFill,
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
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Post({ post, idPost }) {
  const { data: session } = useSession();
  const [open, setIsOpen] = useRecoilState(postViewModalState);
  const [currentPost, setCurrentPost] = useRecoilState(modalViewPost);
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  function handleClick() {
    setOpen(true);
  }

  async function likePost() {
    if (!hasLiked) {
      const likedDoc = doc(db, "posts", idPost, "likes", session.user.uid);
      await setDoc(likedDoc, {
        username: session.user.username,
        timestamp: serverTimestamp(),
      }).then(setHasLiked(true));
    }
    if (hasLiked) {
      const likedDoc = doc(db, "posts", idPost, "likes", session.user.uid);
      await deleteDoc(likedDoc).then(setHasLiked(false));
    }
  }

  async function getLikes() {
    return await onSnapshot(
      collection(db, "posts", idPost, "likes"),
      (snapshot) => {
        const likesDB = snapshot.docs.map((doc) => {
          const data = { ...doc.data(), uid: doc.id };
          return data;
        });
        setLikes(likesDB);
      }
    );
  }

  async function getComments() {
    await onSnapshot(
      query(
        collection(db, "posts", idPost, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        const commentsDB = snapshot.docs.map((doc) => {
          const data = { ...doc.data(), id: doc.id };
          return data;
        });
        setComments(commentsDB);
      }
    );
  }

  function getLikeUser() {
    if (!session) return;
    const likeExists = likes.some((like) => like.uid === session.user.uid);
    setHasLiked(likeExists);
  }

  // useEffect(() => {
  //   //fetch comments from firestore
  //   const unsubscribe = onSnapshot(
  //     query(
  //       collection(db, "posts", idPost, "comments"),
  //       orderBy("timestamp", "desc")
  //     ),
  //     (snapshot) => {
  //       setComments(
  //         snapshot.docs.map((doc) => {
  //           const data = { ...doc.data(), id: doc.id };
  //           return data;
  //         })
  //       );
  //     }
  //   );
  // }, []);

  useEffect(() => {
    getLikes();
    getComments();
  }, [db, idPost]);

  useEffect(() => {
    getLikeUser();
  }, [likes]);

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
        <div>
          <div className="flex justify-between items-center p-4">
            <div className="flex space-x-4">
              {hasLiked ? (
                <BsHeartFill
                  onClick={likePost}
                  className="btn-post text-red-400"
                />
              ) : (
                <BsHeart onClick={likePost} className="btn-post" />
              )}
              <BsChatLeftDots className="btn-post" />
            </div>
            <BsBookmark className="btn-post" />
          </div>

          {/* Like section */}
          {likes && likes.length > 0 && (
            <p className="mx-4 mb-2 text-sm font-bold">
              {likes.length} {likes.length === 1 ? "Like" : "Likes"}
            </p>
          )}
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
