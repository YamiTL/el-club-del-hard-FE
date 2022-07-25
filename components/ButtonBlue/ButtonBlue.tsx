import styles from './ButtonBlue.styles';
import Text24P_W from '../Texts/Center/24P_White/Text24P_W';
function ButtonBlue(props: {
    alert: string;
    text: string;
    style: string;
    onClick: Function;
}){
    let currentStyle = props.style
    return (
        <div
            onClick = { () => props.onClick(
                alert(props.alert)
            )}
            className = {currentStyle=='add' ? styles.add : styles.delete}
        >
            <Text24P_W text={props.text} />
        </div>
    );
}

export default ButtonBlue;