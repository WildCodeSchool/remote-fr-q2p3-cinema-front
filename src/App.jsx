import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';
import Shooting from './components/Shooting/Shooting';
import Footer from './components/footer/Footer';
import FundingList from './components/Funding/FundingList';
import Financement from './components/financement/Financement';
import Contact from './components/Contact/Contact';

import './App.css';





function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/funding" component={FundingList} />
          <Route path="/shooting" component={Shooting} />
          <Route path="/list" component={FundingList} />
          <Route exact path="/movies" component={MovieList} />
          <Route path="/financement" component={Financement} />
          <Route path ="/Contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
