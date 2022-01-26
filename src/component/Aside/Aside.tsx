import React from "react";
import {NavLink} from "react-router-dom";
import s from "./aside.module.css";


export const Aside = () => {
  const setActive = () => (props: { isActive: boolean }) => props.isActive ? `${s.link} ${s.active}` : s.link

  return (
    <aside className={s.aside}>
      <nav>
        <ul className={s.menu}>
          <li className={s.item}>
            <NavLink
              className={setActive()}
              to="/profile">Profile</NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              className={setActive()}
              to="/dialogs">Dialogs</NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}
              to="/news">News</NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              className={({isActive}) => isActive ? `${s.link} ${s.active}` : s.link}
              to="/music">Music</NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={s.link} to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}