import styles from './ButtonArrow.styles';
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
            className = {styles.buttonArrow}
        >
            {props.disabled ? null : props.text}
        </div>
    );
}

export default LabelStock;