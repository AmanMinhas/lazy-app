import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
