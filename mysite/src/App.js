import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from'./components/Navbar';
import Bio from './components/Bio';
import Footer from './components/Footer';
function App() {

    return (
        <div className='app'>
            <Router>
                <Navbar/>
                <Bio/>
                <Footer/>
            </Router>
        </div>
    );
}
export default App;