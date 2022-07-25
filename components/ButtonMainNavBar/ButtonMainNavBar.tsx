import styles from './ButtonMainNavBar.styles';
import Text32P_W from '../Texts/Center/32P_White/Text32P_W';
function ButtonMainNavBar(props: {
    text: string;
    disabled: boolean;
    style: string;
    onClick: Function;
}){
    let currentStyle = props.style
    return (
        <div
            onClick = { () => props.onClick()}
            className = {styles.mainNavBarButton}
        >
            {props.disabled ? null : <Text32P_W text={props.text} />}
        </div>
    );
}

export default ButtonMainNavBar;