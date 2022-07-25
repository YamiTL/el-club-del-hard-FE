import React from 'react';
import ButtonBlue from './ButtonBlue';

export default {
    title: 'button/ButtonBlue',
    Component: ButtonBlue,
};

export const ButtonBlueStorie = (args:{
    text: string;
    style: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <ButtonBlue 
        text={args.text}
        style={args.style}
        onClick={Function}
    />
);

ButtonBlueStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonBlueStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}