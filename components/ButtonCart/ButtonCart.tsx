import styles from './ButtonCart.styles';
import { BsCartPlus, BsFillCartCheckFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonCart(props: {

}){
    const [favourite, setFavourite] = useState<boolean>(false)
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "35"}}>
                <div
                    onClick = { () => setFavourite(!favourite)}
                    className = {styles.cart}
                >
                    {favourite ? <BsFillCartCheckFill /> : <BsCartPlus />}
                </div>
            </IconContext.Provider>
        );
}

export default ButtonCart;