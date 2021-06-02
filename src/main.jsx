import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RwdProvider } from './constant/RwdContext';
import { LangProvider } from './constant/LangContext';
import './index.css';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
    // <React.StrictMode>
    <Suspense fallback={<div className='w-full h-full flex-center'>Loading ...</div>}>
        <RwdProvider>
            <LangProvider>
                <App />
            </LangProvider>
        </RwdProvider>
    </Suspense>,
    // </React.StrictMode>,
    document.getElementById('root')
);
