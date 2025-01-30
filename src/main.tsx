import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {Provider} from "react-redux";
import {store} from "./store/store";
import {StrictMode} from "react";
import React from 'react';
import {ThemeProvider} from "@material-tailwind/react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>
)
