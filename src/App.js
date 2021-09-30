import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>Math Magicians</h1>
          <ul className="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
