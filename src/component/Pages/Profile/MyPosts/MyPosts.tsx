import s from "./posts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div>
        <h2 className={s.title}>MY POSTS</h2>
        <div>
          <textarea className={s.textarea} placeholder="write new post..."></textarea>
          <button className={s.btn}>Add new post</button>
        </div>
        <ul>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </ul>
      </div>
    </div>
  )
}