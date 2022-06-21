import styles from './ProductCardRowButtons.styles';
import ButtonWishlist from '../../ButtonWishlist/ButtonWishlist';
import ButtonCart from '../../ButtonCart/ButtonCart';

function ProductCardRow(props: {
    children?: any,
})
{
    return (
        <div
            className = {styles.container}
        >
            <ButtonWishlist />
            <ButtonCart />
        </div>
    );
}

export default ProductCardRow;