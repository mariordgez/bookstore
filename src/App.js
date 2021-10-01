import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>Bookstore</h1>
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
            <Book />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Book() {
  return <h2>Book</h2>;
}

function Categories() {
  return <h2>Coming Soon!</h2>;
}

export default App;
