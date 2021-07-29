import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Blog from './components/Blog';

function App() {
  return (<>
  <Router>
                <Header></Header>

                <Switch>

                
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Service" component={Service} />
                 <Route path="/Blog" component={Blog} />

                </Switch>

                <Footer></Footer>
  </Router>
        </>
  );
}

export default App;
