import React from 'react';
import ButtonWishlist from './ButtonWishlist';

export default {
    title: 'button/ButtonWishlist',
    Component: ButtonWishlist,
};

export const ButtonWishlistStorie = (args:{}) => (
    <ButtonWishlist />
);

ButtonWishlistStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'},
    style: {control: 'text'}
}

ButtonWishlistStorie.args ={
    text: 'Test text',
    style: 'onSale',
    disabled: false,
}