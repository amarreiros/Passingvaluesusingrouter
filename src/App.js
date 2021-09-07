import logo from './logo.svg';
import './App.css';
import TableComponent from './TableComponent';
import ItemComponent from './ItemComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/' component={TableComponent} />
            <Route path='/item' component={ItemComponent} />
            
        </Switch>
      </div>
  </Router>
  );
}

export default App;
