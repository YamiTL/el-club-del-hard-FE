import React from 'react';
import InputLoginRegister from './InputLoginRegister';

export default {
    title: 'path/to/InputLoginRegister',
    Component: InputLoginRegister,
};

export const InputLoginRegisterStorie = (args:{
    text: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <InputLoginRegister 
        text={args.text}
        disabled={args.disabled}
        onClick={Function}
    />
);

InputLoginRegisterStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'}
}

InputLoginRegisterStorie.args ={
    text: 'Test text',
    onClick: () => alert('hello there'),
    disabled: false,
}