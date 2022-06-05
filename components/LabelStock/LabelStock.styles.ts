import {style} from 'typestyle';

const styles = {
    onStock: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "150px",
        height: "40px",

        background: "#29A8B5",
        borderRadius: "8px",
    }),
    noStock: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "150px",
        height: "40px",

        background: "#CC3721",
        borderRadius: "8px",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;