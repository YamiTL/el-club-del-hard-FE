import React from 'react';
import ButtonCart from './ButtonCart';

export default {
    title: 'button/ButtonCart',
    Component: ButtonCart,
};

export const ButtonCartStorie = (args:{}) => (
    <ButtonCart/>
);

ButtonCartStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonCartStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}