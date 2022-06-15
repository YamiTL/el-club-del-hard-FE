import React,{useState,useEffect} from 'react';
import styles from './HeaderSearchBar.styles';
import Text24P from '../Texts/Left/Text 24P/index';

function HeaderSearchBar(props: {
    text: string;
    onClick: Function;
    value?: string;
    onChange?: Function;
}){
    const [inputText, setInputText] = useState(props.value ? props.value : '')
    return (
        <input 
            className={styles.container}
            onChange={e=>{
                if (props.onChange) props.onChange(e);
                setInputText(e.target.value)
            }}
            type="props" />
    );
}

export default HeaderSearchBar;