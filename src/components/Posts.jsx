import Post from "./Post";
import dummyPosts from "../../public/dummyData.json";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

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
  }, []);

  return (
    <div className="">
      {loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))
      ) : (
        <div>No posts to show at this time !</div>
      )}
    </div>
  );
}
