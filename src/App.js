import './App.css';
import Header from './components/Header'
import Cards from './components/Cards';
import SwipeActions from './components/SwipeActions';
import AddProfile from './components/AddProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Cards} exact />
      </Switch>
      <SwipeActions />
    </div>
    </Router>
  );
}

export default App;
