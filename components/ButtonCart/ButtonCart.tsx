import styles from './ButtonCart.styles';
import { BsCartPlus, BsFillCartCheckFill } from 'react-icons/bs';
import React, {useState} from 'react';

function ButtonCart(props: {

}){
    const [favourite, setFavourite] = useState<boolean>(false)
    return (
        <div
            onClick = { () => setFavourite(!favourite)}
            className = {styles.cart}
        >
            {favourite ? <BsFillCartCheckFill /> : <BsCartPlus />}
        </div>
    );
}

export default ButtonCart;