import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route path ="/Supported-Films" component = {SupportedFilms} />
          <Route path="/funding" component={Funding}/>
        </Switch>
        </Router> 
      <Footer />
    </div>
  );
}

export default App;
