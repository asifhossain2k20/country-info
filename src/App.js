import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home"
import CountryDetails from"./components/CountryDetails/CountryDetails"

function App() {
  return (
    <div>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route  path="/country/:countryName">
                      <CountryDetails></CountryDetails>
                    </Route>
                </Switch>
            </Router>
            
    </div>
  );
}

export default App;
