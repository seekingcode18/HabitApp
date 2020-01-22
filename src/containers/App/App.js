import React, {useState, useEffect} from 'react';
import './App.css';
import Home from '../Home/Home';
import fetch from '../../api/fetch';
import Add_habit from '../../components/Add_habit/Add_habit';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

function useFetch(url, defaultResponse){
  const [data, setData] = useState(defaultResponse);
  async function getDataFromApi(url){
    try{
      const res = await (fetch(url));
      const data = await (res.json());
      setData({
        isLoading: false,
        data
      }) 
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getDataFromApi(url);
  }, [])
  return data
}

function App() {
  const [state, setState] = useState({userId: null});
  fetch.findUserByUsername("username2")//only call this on form submit and use dynamic data
  .then(result => {
    setState({userId: result})
console.log(result)
  })
  



  return (
    <div className="App">
      <Link to='/'><h4>Persisting Title</h4></Link>
      <Switch>
        <Route exact path='/'>
          <Home userId={state.userId}/>
        </Route>
        <Route path='/add_habit' component={Add_habit} />
      </Switch>
    </div>
  );
}

export default App;
