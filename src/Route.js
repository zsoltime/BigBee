import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Login from "./components/formtable/Login";
import AddUser from "./components/formtable/AddUser";
import FormDisplay from "./components/formtable/FormDisplay";
import Index from "./components/musiclyrics/Index";
import Mern from "./projects/Mern";
import About from "./projects/About";
import NotFound from "./utils/NotFound";
import LoginPage from "./components/defecttracker/Login";
import DetailsPage from "./components/defecttracker/DetailsPage";
import Navb from "./utils/Navbar";
import counterIndex from './components/reduxcounter/index';
import hooksIndex from './components/hooks/Index';

class Root extends Component {
    state={
        projects:false,mern:false
    }
    handleProjects = _ => {
        this.setState({projects:true})
      };
    mernStack = _ => {
        this.setState({mern:true})
      };
  render() {
      const {projects ,mern}=this.state;
      //if(projects) return <Redirect to='/'/>;
      if(mern) return <Redirect to='/mern'/>;
      return (
      <>
        <Navb />
        <main className="container my-5">
          <Switch>
            <Route path="/formtable/adduser" component={AddUser} />
            <Route
              path="/formtable/form"
              render={props => <FormDisplay {...props} />}
            />
            <Route path="/deftracker/defdetails" component={DetailsPage} />
            <Route path="/formtable" component={Login} />
            <Route path="/musiclyrics" component={Index} />
            <Route path="/counter" component={counterIndex} />
            <Route path="/hooks" component={hooksIndex} />
            <Route path="/deftracker" component={LoginPage} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/mern" component={Mern} />
            <Route path="/about" component={About} />
            <Route path="/react" component={App} />
            <Redirect from="/" exact to="/react" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}
export default Root;
