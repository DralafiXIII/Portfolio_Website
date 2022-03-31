import React, { useState } from 'react';

import { Header, Footer } from './containers';
import { Navbar } from './components';
import { ComponentDisplayContext } from "./contexts/ComponentDisplayContext";
import './app.css';

function App() {
    const [comp, setComp] = useState(<Header />)

    return (
        <div className="App">
            <div className="gradient__bg">
                <ComponentDisplayContext.Provider value={{ comp, setComp }}>
                    <Navbar />
                </ComponentDisplayContext.Provider>
                {comp}
            </div>
            <Footer />
        </div>
    )
}

export default App
