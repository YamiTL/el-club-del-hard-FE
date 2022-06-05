import {style} from 'typestyle';

const styles = {
    mainNavBarButton: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",

        width: "200px",
        height: "60px",

        background: "#6181BC",
    }),
    disabled: style({
        display: 'none',
    })
}

export default styles;