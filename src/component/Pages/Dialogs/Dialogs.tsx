import React from "react";
import s from "./dialogs.module.css"
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogPropsType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogPropsType) => {
    const path = '/dialogs/' + props.id

    return (
        <NavLink to={path} className={s.dialogs__item}>{props.name}</NavLink>
    )
}

type MessagePropsType = {
    id: string
    text: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <li className={s.messages__item}>{props.text + props.id}</li>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <h2 className={s.title}>Dialogs</h2>
            <div className={s.dialogs__body}>
                <ul className={s.dialogs__list}>
                    <DialogItem id={v1()} name={'Odinokun'}/>
                    <DialogItem id={v1()} name={'John'}/>
                    <DialogItem id={v1()} name={'Arnold'}/>
                    <DialogItem id={v1()} name={'Ferdinand'}/>
                    <DialogItem id={v1()} name={'Anna'}/>
                </ul>
                <ul className={s.messages__list}>
                    <Message id={v1()} text={'First message - '}/>
                    <Message id={v1()} text={'Second message - '}/>
                    <Message id={v1()} text={'Third message - '}/>
                    <Message id={v1()} text={'Fourth message - '}/>
                </ul>
            </div>
        </div>
    )
}