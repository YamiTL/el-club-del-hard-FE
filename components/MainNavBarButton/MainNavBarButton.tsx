import styles from './MainNavBarButton.styles';
function LabelStock(props: {
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

export default LabelStock;