import styles from './LabelStock.styles';
function LabelStock(props: {
    text: string;
    disabled: boolean;
    style: string;
}){
    let currentStyle = props.style
    return (
        <div
            className = {currentStyle === "onStock" ? styles.onStock: styles.noStock}
        >
            {props.disabled ? null : props.text}
        </div>
    );
}

export default LabelStock;