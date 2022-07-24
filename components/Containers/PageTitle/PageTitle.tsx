import styles from './PageTitle.styles';
import Text40P_B from '../../Texts/Center/40P_Bold/Text40P_B';

function PageTitle(props: {
    title: string,
}){

    return (
        <div
            className = {styles.container}
        >
            <Text40P_B text={props.title}/>
            
        </div>
    );
}

export default PageTitle;