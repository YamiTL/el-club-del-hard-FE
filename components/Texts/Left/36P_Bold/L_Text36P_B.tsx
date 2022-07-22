import React from "react";
import styles from "./L_Text36P_B.styles";	

export default function Text36P_L(props: {text:string, ariaHidden?: boolean}) {
    return (
        <span className={ styles.text } aria-hidden={props.ariaHidden}>{props.text}</span>
    )
}