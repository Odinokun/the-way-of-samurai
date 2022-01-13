import s from "./profile-info.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <>
            <div className={s.banner}>
                <img src="https://source.unsplash.com/collection/190727/1500x500" alt='banner'/>
            </div>

            <div className={s.profile__user}>AVA + DESCRIPTION</div>
        </>
    )
}