import React, {Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import './Menue.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import './Challan';

export default class CheckLoginLogout extends Component
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
                        <div>

                           // <Link to="/">Login Again</Link>
                        </div>
              );
                }
      }