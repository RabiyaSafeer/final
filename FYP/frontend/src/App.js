
import React, {Component}  from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Header';
import Menue from './Menue';
import LogSign from './LogSign';
import Home from './Home';
import About from './About';
import Challan from './Challan';
import RollNo_Slip from './RollNo_Slip';
import Print_Application from './Print_Application';
import Registrations from './Registrations';
import Logout from './Logout';
import { Route , withRouter} from 'react-router-dom';

var selectedTab;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    selectedTab = 0;
  }

  handleClick(value) {
    selectedTab = value;
    // console.log(selectedTab);
    this.props.history.push('./LogSign');
    // console.log(this.props);
  }



 render(){
              var _this = this;


      return (

<div>

      <div>
        <Route exact path="/" render={(props) => <LogSign {...props} handleClick={_this.handleClick} />} />
        <Route exact path="/Home" component={Home} curTab={selectedTab} />
        <Route exact path="/About" component={About} curTab={selectedTab} />
        <Route exact path="/Registrations" component={Registrations} curTab={selectedTab} />
        <Route exact path="/Print_Application" component={Print_Application} curTab={selectedTab} />
        <Route exact path="/Challan" component={Challan} curTab={selectedTab} />
        <Route exact path="/RollNo_Slip" component={RollNo_Slip} curTab={selectedTab} />
        <Route exact path="/LogSign" component={LogSign} curTab={selectedTab} />
        <Route exact path="/Logout" component={Logout} curTab={selectedTab} />

      </div>


</div>

                );
}
}


export default withRouter(App);