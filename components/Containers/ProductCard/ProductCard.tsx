import styles from './ProductCard.styles';
import Image from '../../../node_modules/next/image';
import ProductCardRow from '../ProductCardRow/ProductCardRow';
import LabelPromo from '../../LabelPromo/LabelPromo';
import LabelStock from '../../LabelStock/LabelStock';
import Text20P from '../../Texts/Center/20P_Buttons/Text20P';
import Text24P from '../../Texts/Center/24P_Buttons/Text24P';
import ProductCardRowButtons from '../ProductCardRowButtons/index';

function ProductCard(props: {
    labelPromo: string,
    labelPromoStyle: string,
    labelPromoDisabled: boolean,
    labelStock: string,
    labelStockStyle: string,
    imageURL: string,
    imageAlt?: string,
    productName: string,
    description: string,
    price: string,
})
{
    return (
        <div
            className = {styles.container}
        >
            <ProductCardRow disabled={props.labelPromoDisabled}>
                <LabelPromo 
                    text={props.labelPromo} 
                    disabled={props.labelPromoDisabled} 
                    style={props.labelPromoStyle} />
                <LabelStock 
                    text={props.labelStock} 
                    disabled={false} 
                    style={props.labelStockStyle}/>
            </ProductCardRow>
            <Image
                src={props.imageURL}
                alt={props.imageAlt}
                width={280}
                height={200}
            />
            <Text20P text={props.productName} />
            <Text20P text={props.description} />
            <ProductCardRow disabled={false}>
                <Text24P text={props.price} />
                <ProductCardRowButtons />
            </ProductCardRow>
        </div>
    );
}

export default ProductCard;