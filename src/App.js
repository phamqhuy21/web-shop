import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Header from './containers/Header/index';
import Footer from './components/Footer/index';

function App() {
    const showBody = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };

    return (
        <Router>
            <div id="app">
                <Header />
                {showBody(routes)}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
