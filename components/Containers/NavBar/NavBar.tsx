import styles from './NavBar.styles';
import ButtonMainNavBar from '../../ButtonMainNavBar/ButtonMainNavBar';
function NavBar(props: {}){

    return (
        <div
            className = {styles.container}
        >
            <ButtonMainNavBar 
                text={"Categorias"} 
                disabled={false} 
                onClick={Function} />
            <ButtonMainNavBar 
                text={"Button 1"} 
                disabled={false} 
                onClick={Function} />
            <ButtonMainNavBar 
                text={"Button 2"} 
                disabled={false} 
                onClick={Function} />
            <ButtonMainNavBar 
                text={"Mi cuenta"} 
                disabled={false} 
                onClick={Function} />
            <ButtonMainNavBar 
                text={"Help"} 
                disabled={false} 
                onClick={Function} />
        </div>
    );
}

export default NavBar;