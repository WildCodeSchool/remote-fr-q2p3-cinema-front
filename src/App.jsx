import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';
import Shooting from './components/Shooting/Shooting';
import Funding from './components/Funding/Funding';
import Movies from './components/movies/Movies';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/funding" component={Funding} />
          <Route path="/shooting" component={Shooting} />
          <Route path="/movies" component={Movies} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
