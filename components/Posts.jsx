import Post from "./Post";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
const posts = [
   {
      id: "123",
      username: "djksdksk",
      userImg:
         "https://media.wired.com/photos/62a393d78eaf9419b31098a5/master/pass/musk_sec_GettyImages-1395062612.jpg",
      img: "https://media.wired.com/photos/62a393d78eaf9419b31098a5/master/pass/musk_sec_GettyImages-1395062612.jpg",
      caption: "subscribe and destroy the like button",
   },
   {
      id: "1232",
      username: "djksdksk",
      userImg:
         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg/419px-Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg/419px-Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg",
      caption: "subscribe and destroy the like button",
   },
];
export default function Posts() {
   const [posts, setPosts] = useState([]);

   useEffect(
      () =>
         onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
               setPosts(snapshot.docs);
            }
         ),
      [db]
   );
   console.log(posts);

   return (
      <div>
         {posts.map((post) => (
            <Post
               key={post.id}
               id={post.id}
               username={post.data().username}
               userImg={post.data().profileImg}
               img={post.data().image}
               caption={post.data().caption}
            />
         ))}
      </div>
   );
}
