import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';
import SupportedFilms from './components/Supported-films/SupportedFilms';
import Funding from './components/Funding/Funding';
import Footer from './components/footer/Footer';
import FilmInTheRegion from'./components/FilmInTheRegion/FilmInTheRegion';
import Financement from './components/financement/Financement'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>  
       
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path ="/SupportedFilms" component = {SupportedFilms} />
          <Route path ="/Funding" component = {Funding} />
          <Route path ="/FilmInTheRegion" component = {FilmInTheRegion} />
          <Route path ="/financement"  component={Financement} />     
          </Switch>
        </Router> 
        
      <Footer />
    </div>
  );
}

export default App;
