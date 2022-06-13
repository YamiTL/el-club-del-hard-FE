import styles from './ButtonMainNavBar.styles';
import Text32P from '../Texts/Center/32P_Buttons/Text32P';
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
            {props.disabled ? null : <Text32P text={props.text} />}
        </div>
    );
}

export default ButtonMainNavBar;