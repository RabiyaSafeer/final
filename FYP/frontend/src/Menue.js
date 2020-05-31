import React, {Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import './Menue.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import './Challan';
import './Print_Application';
import './RollNo_Slip';
import './Registrations';
import './Home';


export default class Menue extends Component
{
 constructor(props){
        super(props)
        const token= localStorage.getItem("token")
        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }
               render(){
                if(this.state.loggedIn==false){
                    return <Redirect to="/" />
                }
              return (
                        <div className="App">
                            <div class="container">

                              <button type="button" class="btn btn-default btn-sm btn-block btn-outline-light"><a href="./Home">Instructions</a></button>
                               <button type="button" class="btn btn-default btn-sm btn-block btn-outline-light"><a href="./Registrations">Registration Form</a></button>
                               <button type="button" class="btn btn-default btn-sm btn-block btn-outline-light"><a href="./Challan">Challan Form</a></button>
                               <button type="button" class="btn btn-default btn-sm btn-block btn-outline-light"><a href="./Print_Application">Print Application</a></button>
                               <button type="button" class="btn btn-default btn-sm btn-block btn-outline-light"><a href="./RollNo_Slip">Roll Number Slip</a></button>
                              <Link to="/Logout"><button type="button" class="btn btn-default btn-sm btn-block btn-outline-light"><a href="#" style={{color:"red"}}>Logout</a></button></Link>

                            </div>
                        </div>
              );
    }
}