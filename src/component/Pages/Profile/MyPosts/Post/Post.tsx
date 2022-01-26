import React from "react";
import s from './post.module.css'

export const Post = () => {
  return (
    <>
      <li className={s.post}>
        <div className={s.avatar}>
          <img src="https://source.unsplash.com/800x800/?people,man" alt="LOGO"/>
        </div>
        <div className={s.post__content}>
          <div className={s.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos illo ipsam, quasi
              vero voluptatem. Omnis, reiciendis, sequi?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eveniet!</p>
          </div>
          <div className={s.reactions}>
            <button className={s.reaction__btn}>like</button>
            <button className={s.reaction__btn}>dislike</button>
          </div>
        </div>
      </li>
    </>
  )
}