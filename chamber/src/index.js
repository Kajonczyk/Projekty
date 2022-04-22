import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Chamber} from "./components/Chamber/Chamber";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Chamber/>
    </React.StrictMode>
);
