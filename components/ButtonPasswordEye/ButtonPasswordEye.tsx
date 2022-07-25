import styles from './ButtonPasswordEye.styles';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import React, {useState} from 'react';
import {IconContext} from 'react-icons';

function ButtonPasswordEye(props: {

}){
    const [shown, setShown] = useState<boolean>(false)
        return (
            <IconContext.Provider value={{className: 'shared-class', size: "30"}}>
                <div
                    onClick = { () => setShown(!shown)}
                    className = {styles.current}
                >
                    {shown ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
            </IconContext.Provider>
        );
}

export default ButtonPasswordEye;