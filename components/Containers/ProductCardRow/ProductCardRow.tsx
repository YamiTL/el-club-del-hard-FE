import styles from './ProductCardRow.styles';

function ProductCardRow(props: {
    children?: any,
    disabled: boolean,
})
{
    return (
        <div
            className = {props.disabled ? styles.noPromo : styles.container}
        >
            {props.children}
        </div>
    );
}

export default ProductCardRow;