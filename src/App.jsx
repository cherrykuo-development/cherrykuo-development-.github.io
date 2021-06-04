import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';

import Header from './components/Header';

const App = () => {
    return (
        <div className='w-full h-full'>
            <Router>
                <Header />
                <Route path='/' component={Routes} />
            </Router>
        </div>
    );
};

export default App;
