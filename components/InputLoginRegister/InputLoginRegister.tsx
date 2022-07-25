import styles from './InputLoginRegister.styles';
function InputLoginRegister(props: {
    type: string,
    name: string,
}){

    return (
        <input
            className = {styles.input}
            type={props.type}
            name={props.name}
        />
    );
}

export default InputLoginRegister;