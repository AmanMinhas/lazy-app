import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./Pages/Home'));
const AboutPage = lazy(() => import('./Pages/About'));
const ContactPage = lazy(() => import('./Pages/Contact'));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
