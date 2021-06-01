import React, { Suspense } from 'react';

import Layout from './components/layout/Layout';
import { Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/ui/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Publications = React.lazy(() => import('./pages/Publications'));
const Contact = React.lazy(() => import('./pages/Contact'));
const InnerHealing = React.lazy(() => import('./pages/InnerHealing'));


function App() {
  return (
   <Layout>
    <Suspense fallback={<div className="centered"><LoadingSpinner></LoadingSpinner></div>}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/publications">
          <Publications />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/inner-healing">
          <InnerHealing />
        </Route>
      </Switch>
      </Suspense>
   </Layout>
  );
}

export default App;
