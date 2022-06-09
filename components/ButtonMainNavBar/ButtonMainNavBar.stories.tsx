import React from 'react';
import ButtonMainNavBar from './ButtonMainNavBar';

export default {
    title: 'button/ButtonMainNavBar',
    Component: ButtonMainNavBar,
};

export const ButtonMainNavBarStorie = (args:{
    text: string;
    style: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <ButtonMainNavBar 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
        onClick={Function}
    />
);

ButtonMainNavBarStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonMainNavBarStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}