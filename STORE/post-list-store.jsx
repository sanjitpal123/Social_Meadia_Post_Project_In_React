// src/STORE/post-list-store.js
import React, { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  deletePost: () => {},
});

const postlistreducer = (currentpost, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload,...currentpost ];
    case "DELETE_POST":
      return currentpost.filter(post => post.id !== action.payload);
    default:
      return currentpost;
  }
};

const DEfault_Post_List = [
  {
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi friends, I am going to Mumbai for an IPL match',
    reaction: 44,
    userId: 'user_1',
    tags: ["ipl", "rohit", "hitman"],
  },
  {
    id: '2',
    title: 'Passed Btech',
    body: 'Hi friends, I am graduated now after 4 years',
    reaction: 29,
    userId: 'user_2',
    tags: ["Btech", "Pass", "Finalyear"],
  },
];

const Postlistprovider = ({ children }) => {
  const [postlist, dispatch] = useReducer(postlistreducer, DEfault_Post_List);

  const addpost = (userId,postTitle,postBody,reactions,tags) => {
    dispatch({
      type:'ADD_POST',
      payload:{
        id: Date.now(),
        title:postTitle,
        body:postBody,
        reaction:reactions,
        userId:userId,
        tags:tags

      }

 })
  };

  const deletePost = (id) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };

  return (
    <Postlist.Provider value={{ postlist, addpost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};

export default Postlistprovider;
