import styles from './LabelPromo.styles';
function LabelPromo(props: {
    text: string;
    disabled: boolean;
    style: string;
}){
    let currentStyle = props.style
    return (
        <div
            className = {currentStyle === "onSale" ? styles.onSale: styles.mostSold}
        >
            {props.disabled ? null : props.text}
        </div>
    );
}

export default LabelPromo;