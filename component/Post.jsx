// src/components/PostItem.js
import React, { useContext } from "react";
import { Postlist } from "../STORE/post-list-store";

function PostItem({ post }) {
  const { deletePost } = useContext(Postlist);

  return (
    <div className="d-flex " style={{ width: "81vw" }}>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          <div className="d-flex flex-wrap">
            {post.tags.map((tag, index) => (
              <span className="badge text-bg-primary mb-1 m-1" key={index}>
                {`#${tag}`}
              </span>
            ))}
          </div>
          <div className="alert alert-success mt-1" role="alert">
            {`This Post is reacted by ${post.reaction}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
