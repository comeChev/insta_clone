import Post from "./Post";
import dummyPosts from "../../public/dummyData.json";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { BiLoaderAlt } from "react-icons/bi";
import Link from "next/link";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //getting the posts from firestore
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    setLoading(false);
  }, [db]);
  return (
    <div className="">
      {loading ? (
        <div className="w-full flex justify-center items-center mt-20 ">
          <button
            className="bg-indigo-500 text-white rounded-md flex items-center px-3 py-2.5 shadow-md"
            disabled
          >
            <BiLoaderAlt className="animate-spin text-2xl mr-3" />
            Processing...
          </button>
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} idPost={post.id} post={post.data()} />
        ))
      ) : (
        <div>No posts to show at this time !</div>
      )}
    </div>
  );
}
