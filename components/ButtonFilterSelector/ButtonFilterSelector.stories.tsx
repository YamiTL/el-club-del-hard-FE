import React from 'react';
import ButtonFilterSelector from './ButtonFilterSelector';

export default {
    title: 'button/ButtonFilterSelector',
    Component: ButtonFilterSelector,
};

export const ButtonFilterSelectorStorie = (args:{}) => (
    <ButtonFilterSelector/>
);

ButtonFilterSelectorStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonFilterSelectorStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}