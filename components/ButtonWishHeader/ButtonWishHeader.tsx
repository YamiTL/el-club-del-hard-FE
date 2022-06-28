import styles from './ButtonWishHeader.styles';
import { BsFillHeartFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonWishHeader(props: {}){
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "50"}}>
                <div
                    onClick = {() => (
                        alert('Al Wishlist')
                    )}
                    className = {styles.cart}
                >
                    <BsFillHeartFill />
                </div>
            </IconContext.Provider>
        );
}

export default ButtonWishHeader;