import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieList from './pages/MovieList';
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';
import SupportedFilms from './components/supported-films/SupportedFilms';
import Funding from './components/Funding/Funding';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Supported-Films" component={SupportedFilms} />
          <Route path="/Funding" component={Funding} />
          <Route exact path="/movies" component={MovieList} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
