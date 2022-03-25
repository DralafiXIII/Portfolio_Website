import React from 'react';

import { Header, Footer } from './containers';
import { Navbar } from './components';
import './app.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            {/*<Footer />*/}
        </div>
    )
}

export default App
