import React from "react";
import styles from "./Text36P_L.styles";	

export default function Text36P_L(props: {text:string, ariaHidden?: boolean}) {
    return (
        <span className={ styles.text } aria-hidden={props.ariaHidden}>{props.text}</span>
    )
}