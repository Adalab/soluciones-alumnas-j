import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import Relax from './components/Relax/Relax';

class App extends React.Component {
  
  render() {
    return (
      <div>
      <Switch>
        <Route path="/counter" render={() => <Counter />} />
        <Route path="/relax" render={() => <Relax />} />
      </Switch>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/relax">Relax</Link>
          </li>
        </ul>
      </nav>
      </div>

    );
  }
}

export default App;