import React from 'react';
import { render } from 'react-dom';

import { ChakraProvider } from "@chakra-ui/react"

import Popup from './Popup';
import './index.css';

render(
    <ChakraProvider>
        <Popup />
    </ChakraProvider>, window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
