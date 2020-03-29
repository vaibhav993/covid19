import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from "./components/Layout";
import './App.scss';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const App = React.memo(() => {
    return (
        <Router basename={process.env.PUBLIC_URL}>>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Suspense>
            </Layout> 
        </Router>
    );
});

export default App;
