import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Singin from '../Pages/Singin';
import NotFound from '../Pages/NotFountd';
import Layout from '../Components/Layout';

function App() {
    
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/Login" component={ Login } />
                    <Route exact path="/Singin" component={ Singin } />
                    <Route component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App
