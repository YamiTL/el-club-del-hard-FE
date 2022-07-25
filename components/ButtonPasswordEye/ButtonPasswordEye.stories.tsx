import React from 'react';
import ButtonPasswordEye from './ButtonPasswordEye';

export default {
    title: 'button/ButtonPasswordEye',
    Component: ButtonPasswordEye,
};

export const ButtonPasswordEyeStorie = (args:{}) => (
    <ButtonPasswordEye/>
);

ButtonPasswordEyeStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonPasswordEyeStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}