import {style} from 'typestyle';

const styles = {
    current: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "40px",
        height: "40px",
        background: "#63A8D4",
        borderRadius: "50px",
    }),
    other: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "40px",
        height: "40px",
        background: "#414141",
        borderRadius: "50px",
    }),
    final: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
        width: "35px",
        height: "40px",
        background: "#414141",
        borderRadius: "8px",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;