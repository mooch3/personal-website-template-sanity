import Layout from './components/layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import InnerHealing from './pages/InnerHealing';

function App() {
  return (
   <Layout>
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
   </Layout>
  );
}

export default App;
