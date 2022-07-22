import React from 'react';
import styles from './L_Text24P.styles';

export default function Text24P_L(props: { text: string; ariaHidden?: boolean }) {
  return (
    <span className={styles.text} aria-hidden={props.ariaHidden}>
      {props.text}
    </span>
  );
}
