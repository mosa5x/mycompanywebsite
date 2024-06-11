import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ServiceListConatainer from './components/ServiceListConatainer';
import './App.css';
import HomeConatainer from './components/HomeContainer';
import Contactuscontainer from './components/Contactuscontainer';
function App() {
    return (
        <Router>
            <div className="App">
                <main>
                    <Routes>
                        <Route path="/" element={<HomeConatainer />} />
                        <Route path="/services" element={<ServiceListConatainer />} />
                        <Route path="/contactus" element={<Contactuscontainer />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;


