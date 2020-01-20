import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Add_habit from '../../components/Add_habit/Add_habit';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to='/'><h4>Persisting Title</h4></Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add_habit' component={Add_habit} />
      </Switch>
    </div>
  );
}

export default App;
