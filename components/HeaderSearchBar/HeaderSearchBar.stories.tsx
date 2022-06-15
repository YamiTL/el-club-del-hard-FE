import React from 'react';
import HeaderSearchBar from './HeaderSearchBar';

export default {
    title: 'inputFields/HeaderSearchBar',
    Component: HeaderSearchBar,
};

export const HeaderSearchBarStorie = (args:{
    text: string;
    onClick: Function;
}) => (
    <HeaderSearchBar 
        text={args.text}
        onClick={Function}
    />
);

HeaderSearchBarStorie.argTypes = {
    text: {control: 'text'},
}

HeaderSearchBarStorie.args ={
    text: 'Test text',
    onClick: () => alert('hello there'),
}