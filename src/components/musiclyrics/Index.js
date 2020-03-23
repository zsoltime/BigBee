import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "./context";
import Navbar from "./components/layout/Navbar";
import App from './App';
import Lyrics from './components/tracks/Lyrics';
//import Footer from "./components/layout/Footer";
import rootApp from './../../App';

class Index extends React.Component {
  
  render() {
    return (
      <div>
        <Provider>
          <Router>
            <React.Fragment>   
              <div className="container">
                <Switch>
                  <Route  path="/musiclyrics" component={App} />
                  <Route path="/lyrics/track/:id" component={Lyrics} />
                  <Route path='/' component={rootApp}/>
                </Switch>
              </div>
            </React.Fragment>
          </Router>
        </Provider>
        
      </div>
    );
  }
}
export default Index;
