import React from "react";
import styles from "./Text36P.styles";	

export default function Text36P(props: {text:string, ariaHidden?: boolean}) {
    return (
        <span className={ styles.text } aria-hidden={props.ariaHidden}>{props.text}</span>
    )
}