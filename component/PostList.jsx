// src/component/PostList.jsx
import { useContext } from "react";
import { Postlist } from "../STORE/post-list-store";
import PostItem from "./Post";

function PostList() {
  const { postlist } = useContext(Postlist);
  console.log(postlist);
  return (
    <div>
      {postlist.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
    </div>
  );
}

export default PostList;
