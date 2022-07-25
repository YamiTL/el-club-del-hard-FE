import {style} from 'typestyle';

const styles = {
    add: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        gap: "10px",
        height: "48px",
        background: "#63A8D4",
        borderRadius: "4px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    }),
    delete: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        height: "40px",
        background: "#63A8D4",
        borderRadius: "4px",
        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    })
}

export default styles;