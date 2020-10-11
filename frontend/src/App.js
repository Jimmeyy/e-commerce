import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import routes from 'static/routes';
import Home from 'pages/home';
import Page404 from 'pages/page404';
import { Footer, Header } from 'components';

function App() {
    const { home } = routes;

    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route exact path={home.path}>
                        <Home />
                    </Route>
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;