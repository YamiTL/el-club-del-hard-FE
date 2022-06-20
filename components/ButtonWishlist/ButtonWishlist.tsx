import styles from './ButtonWishlist.styles';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import React, {useState} from 'react';

function ButtonWishlist(props: {

}){
    const [favourite, setFavourite] = useState<boolean>(false)
    return (
        <div
            onClick = { () => setFavourite(!favourite)}
            className = {styles.wishlist}
        >
            {favourite ? <BsHeartFill /> : <BsHeart />}
        </div>
    );
}

export default ButtonWishlist;