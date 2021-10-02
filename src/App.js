import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="panel-bg">
        <nav className="navbar panel-bg-navbar">
          <h1 className="Bookstore-CMS">Bookstore</h1>
          <ul className="navbar-list">
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Categories() {
  return <h2>Coming Soon!</h2>;
}

export default App;
