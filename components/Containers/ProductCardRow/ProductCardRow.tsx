import styles from './ProductCardRow.styles';

function ProductCardRow(props: any)
{
    return (
        <div
            className = {styles.container}
        >
            {props.children}
        </div>
    );
}

export default ProductCardRow;