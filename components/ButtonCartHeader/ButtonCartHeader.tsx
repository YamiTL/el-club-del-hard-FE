import styles from './ButtonCartHeader.styles';
import { BsFillCartFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonCartHeader(props: {}){
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "50"}}>
                <div
                    onClick = {() => (
                        alert('Al Carrito')
                    )}
                    className = {styles.cart}
                >
                    <BsFillCartFill />
                </div>
            </IconContext.Provider>
        );
}

export default ButtonCartHeader;