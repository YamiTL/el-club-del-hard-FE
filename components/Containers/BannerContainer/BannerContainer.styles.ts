import {style} from 'typestyle';

const styles = {
    carousel: style({
        overflow: 'hidden',
        width: '100%',
    }),
    inner: style({
        whiteSpace: 'nowrap',
    }),
    carouselItem: style({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    controls: style({
        display: 'flex',
        justifyContent: 'center',
        nest: {
            button: style({
                margin: 10,
            }
        )}
    }),
}

export default styles;