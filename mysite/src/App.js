import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from'./components/Navbar';

function App() {

    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>

            </Switch>
        </Router>
        </>
    );
}
export default App;