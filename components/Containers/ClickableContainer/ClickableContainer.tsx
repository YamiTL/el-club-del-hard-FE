import styles from './ClickableContainer.styles';

function ClickableContainer(props: {
    children: any;
    alert?: string;
    style: string;
    onClick?: Function;
}){
    let currentStyle = props.style
    return (
        <div
            onClick = {() => (
                alert(props.alert)
            )}
            className = {currentStyle === "column" ? styles.column : styles.row}
        >
            {props.children}
        </div>
    );
}

export default ClickableContainer;