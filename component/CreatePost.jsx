import { useContext, useRef } from "react";
import { Postlist } from "../STORE/post-list-store";

function CreatePost() {
  const { addpost } = useContext(Postlist);
  const userIdRef = useRef();
  const postTitleRef = useRef();
  const postBodyRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const postTitle = postTitleRef.current.value;
    const postBody = postBodyRef.current.value;
    const reactions = reactionsRef.current.value;
    const tags = tagsRef.current.value.split(/\s+/);
    addpost(userId,postTitle,postBody,reactions,tags);
  };

  return (
    <form className=" " style={{ width: "50%", margin: "30px" }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label"> User Id</label>
        <input type="number" ref={userIdRef} className="form-control" id="userId" placeholder="user id" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label"> Post title</label>
        <input type="text" ref={postTitleRef} className="form-control" id="title" placeholder="How are you feeling today...."/>
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label"> Post Content</label>
        <textarea type="text" ref={postBodyRef} rows={4} className="form-control" id="Post Content" placeholder="Tell more about it..."/>
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label"> Number of reactions</label>
        <input type="text" ref={reactionsRef} className="form-control" id="reaction" placeholder="How many people reacted to this post" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" ref={tagsRef} className="form-control" id="tags" placeholder="Enter your tags" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CreatePost;
