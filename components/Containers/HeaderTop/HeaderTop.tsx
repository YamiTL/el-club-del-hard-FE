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
                width={200}
                height={200}
            />
            <div>
                SearchBar
            </div>
            <ButtonWishHeader />
            <ButtonCartHeader />
        </div>
    );
}

export default HeaderTop;