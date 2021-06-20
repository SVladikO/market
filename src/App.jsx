import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.style.scss';

import Header, {ROUTE_PATH} from './components/header/header.component';
import CVPage from "./pages/cv/cv.component";
import GamePage from "./pages/games/game.component";
import HomePage from "./pages/home/home.component";
import PackagePage from "./pages/packages/package.component";
import Footer from "./components/footer/footer.component";

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Switch>
                    <div className="content">
                    <Route exact path={ROUTE_PATH.HOME}><HomePage/></Route>
                    <Route path={ROUTE_PATH.GAMES}><GamePage/></Route>
                    <Route path={ROUTE_PATH.PACKAGES}><PackagePage/></Route>
                    <Route path={ROUTE_PATH.CV}><CVPage/></Route>
                    </div>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
