import styles from './HeaderTop.styles';
import ButtonCartHeader from '../../ButtonCartHeader/ButtonCartHeader';
import ButtonWishHeader from '../../ButtonWishHeader/ButtonWishHeader';
import ButtonSearchHeader from '../../ButtonSearchHeader/ButtonSearchHeader';
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
            <div style={{display: "flex", gap:"50px", alignItems:"center"}}>
                <ButtonSearchHeader />
            </div>
            <div style={{display: "flex", gap:"50px"}}>
                <ButtonWishHeader />
                <ButtonCartHeader />
            </div>
        </div>
    );
}

export default HeaderTop;