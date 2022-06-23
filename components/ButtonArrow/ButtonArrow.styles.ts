import {style} from 'typestyle';

const styles = {
    buttonArrow: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "40px",
        height: "60px",
        background: "#63A8D4",
        borderRadius: "50px",
        color:"white",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;