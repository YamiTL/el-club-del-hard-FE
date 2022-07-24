import styles from './BrandFilterContainer.styles';

function BrandFilterContainer(props: {
    children?: any,
}){

    return (
        <div
            className = {styles.container}
        >
            {props.children}
        </div>
    );
}

export default BrandFilterContainer;