import styles from './ButtonMainNavBar.styles';
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
            {props.disabled ? null : props.text}
        </div>
    );
}

export default ButtonMainNavBar;