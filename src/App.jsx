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

                {false && (
                    <header className='App-header'>
                        {[1, 2, 3, 4, 5].map(el => (
                            <div key={el}>{el}</div>
                        ))}
                    </header>
                )}
            </Router>
        </div>
    );
};

export default App;
