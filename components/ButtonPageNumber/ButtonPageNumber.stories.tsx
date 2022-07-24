import React from 'react';
import ButtonPageNumber from './ButtonPageNumber';

export default {
    title: 'button/ButtonPageNumber',
    Component: ButtonPageNumber,
};

export const ButtonPageNumberStorie = (args:{
    text: string;
    style: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <ButtonPageNumber 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
        onClick={Function}
    />
);

ButtonPageNumberStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonPageNumberStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}