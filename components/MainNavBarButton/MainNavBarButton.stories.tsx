import React from 'react';
import MainNavBarButton from './MainNavBarButton';

export default {
    title: 'button/MainNavBarButton',
    Component: MainNavBarButton,
};

export const MainNavBarButtonStorie = (args:{
    text: string;
    style: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <MainNavBarButton 
        text={args.text}
        disabled={args.disabled}
        style={args.style}
        onClick={Function}
    />
);

MainNavBarButtonStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

MainNavBarButtonStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}