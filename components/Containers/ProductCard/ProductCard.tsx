import styles from './ProductCard.styles';
import Image from '../../../node_modules/next/image';
import ProductCardRow from '../ProductCardRow/ProductCardRow';
import LabelPromo from '../../LabelPromo/LabelPromo';
import LabelStock from '../../LabelStock/LabelStock';

function ProductCard(props: {})
{
    return (
        <div
            className = {styles.container}
        >
            <ProductCardRow>
                <LabelPromo text={"En Oferta"} disabled={false} style={"onSale"} />
                <LabelStock text={"En Stock"} disabled={false} style={"onStock"}/>
            </ProductCardRow>
            <Image
                src="https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928"
                alt=""
                width={380}
                height={260}
            />
            <ProductCardRow>
                
            </ProductCardRow>
        </div>
    );
}

export default ProductCard;