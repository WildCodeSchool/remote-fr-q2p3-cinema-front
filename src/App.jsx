import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      CINEMA FRONT
      <Router>  
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Router> 
      <Footer />
    </div>
  );
}

export default App;
