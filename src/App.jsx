import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieList from './pages/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>    
        <Switch>
          <Route exact path="/movies" component={MovieList}/>
        </Switch>
        </Router> 
    </div>
  );
}

export default App;
