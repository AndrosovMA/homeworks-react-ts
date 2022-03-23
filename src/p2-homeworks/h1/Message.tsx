import React from 'react'
import {MessageType} from "./HW1";
import styles from "./Message.module.css"


function Message(props: MessageType) {

    return (
        <div className={styles.container}>
            <div className={styles.container_avatar}>
                <img src={props.avatar} className={styles.avatar} alt=""/>
            </div>


            <div className={styles.corner}> </div>

            <div className={styles.innerText}>
                <div className={styles.name}>{props.name}</div>
                <div> {props.message}</div>
                <div className={styles.time}> {props.time}</div>
            </div>


        </div>
    )
}

export default Message
