import styles from './ButtonSearchHeader.styles';
import { BsSearch } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonSearchHeader(props: {}){
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "40"}}>
                <div
                    onClick = {() => (
                        alert('A Buscar')
                    )}
                    className = {styles.cart}
                >
                    <BsSearch />
                </div>
            </IconContext.Provider>
        );
}

export default ButtonSearchHeader;