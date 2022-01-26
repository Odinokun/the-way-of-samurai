import React from "react";
import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <a href="/" className={s.logo}>
        <img src="https://source.unsplash.com/800x800/?logo" alt="LOGO"/>
      </a>
    </header>
  )
}