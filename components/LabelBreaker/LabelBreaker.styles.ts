import {style} from 'typestyle';

const styles = {
    horizontalBreaker: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        margin: "20px",
        gap: "0px",

        width: "80%",
        height: "5px",

        background: "#63A8D4",
        borderRadius: "8px",
    }),
    verticalBreaker: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        margin: "20px",
        gap: "0px",

        width: "5px",
        height: "600px",

        background: "#63A8D4",
        borderRadius: "8px",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;