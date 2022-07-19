import styles from './HeaderTop.styles';
import ButtonCartHeader from '../../ButtonCartHeader/ButtonCartHeader';
import ButtonWishHeader from '../../ButtonWishHeader/ButtonWishHeader';
import Image from '../../../node_modules/next/image';

function HeaderTop(props: {}){

    return (
        <div
            className = {styles.container}
        >
            <Image
                src={require('./LogoCDH.png')}
                alt={'logo'}
                width={150}
                height={150}
            />
            <div>
                SearchBar
            </div>
            <div style={{display: "flex"}}>
                <ButtonWishHeader />
                <ButtonCartHeader />
            </div>
        </div>
    );
}

export default HeaderTop;