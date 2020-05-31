
import React, {Component}  from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './LogSign.css';
import Header from './Header';
import Menue from './Menue';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Route , withRouter,Redirect,} from 'react-router-dom';
import { useAlert } from 'react-alert';
import axios from 'axios';

export default class LogSign extends Component{

  constructor() {
    super()

    let loggedin=false
    this.state = {

      username: "",
      password: "",
      user_name:"",
      email:"",
      degree_choice:"",
      password1:"",
      password2:"",
      status_data: {},
      error: null,
      loggedin
    }
    this.onChange=this.onChange.bind(this)
    this.loginsubmit=this.loginsubmit.bind(this)
    this.signupsubmit=this.signupsubmit.bind(this)
    }
setStatus =(data)=>{

        if( data.status== 'true'){
           localStorage.setItem('token','abc')
           localStorage.setItem('username', this.state.username)
           this.setState({
                loggedin:true
           })
        }
         else{

         alert("User name and Password incorrect")
        }
    }



 onChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
  }



setSigupStatus =(sdata)=>{

        if( sdata.status== 'true'){
        alert("You Have Successfully Account Registration");
          this.setState({
                      user_name:"",
                      email:"",
                      degree_choice:"",
                      password1:"",
                      password2:""
                    });
        }

         else{

          alert("User Name Already Exist");
            }
}

  loginsubmit(e){
   e.preventDefault()

        let url="http://127.0.0.1:8000/%5ELogin/";
        let data={
            username:this.state.username,
            password:this.state.password
        }

        fetch(url,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
            }).then((result)=>{
                result.json().then(this.setStatus)
                .catch(error => {
                    this.setState({error});
                })
            })


  }


 signupsubmit(e){
   e.preventDefault()
   if (this.state.password1 !== this.state.password2) {
        alert("Passwords don't match");
    } else {
       let url="http://127.0.0.1:8000/%5ESignUp/";
        let sdata={
            user_name:this.state.user_name,
            email:this.state.email,
            degree_choice:this.state.degree_choice,
            password1:this.state.password1,
            password2:this.state.password2
        }

        fetch(url,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(sdata)
            }).then((result)=>{
                result.json().then(this.setSigupStatus)
                .catch(error => {
                    this.setState({error});
                })

            })

    }

  }



 render(){
        if(this.state.loggedin){
            return<Redirect to="/Registrations" />
        }

      return (

<div>

 <div className="App">


                                        <Header />
                             <div className="container" >

                                <br />

                                <div><a href="./About">App</a></div>
                                 <div><a href="./Home">Home</a></div>
                                 <div><a href="./Registrations">Regu</a></div>

                                <h3 className="h3info">Wellcome to PUCIT Online Entrance Test Registration System</h3>
                                <br />
                              </div>
                              <div className="container" >
                               <p className="pinfo"><b>.</b> This portal can be used to register for Pre Admission Entrance Test 2020 for BS(CS/IT/SE) and MSc(CS/GIS) <br />
                                      &nbsp;&nbsp; degree programs at PUCIT.Deadline for Entrance Test Registration is .....
                                    <br /><br />
                                    <b>.</b> In order to Register, you must Sign Up a valid email adress is required to Sign Up.
                                    <br /><br />
                                    <b>.</b> Once you Sign Up, you can LOG IN to enter/update/view your application. <br /><br />
                                </p>
                              </div>
                            <div className="container-fluid bg">
                            <div className="row">
                                <div className="col-md-6 divlogin">
                                        <form onSubmit={this.loginsubmit}>

                                            <h1 style={{color:"white"}}>Log In</h1>
                                            <br />
                                            <div className="form-group">
                                            <input type="text" placeholder='User Name' className="inputtype" name="username"  value={this.state.username} onChange={this.myChangeHandler}   onChange={this.onChange} required/>
                                            </div>
                                            <br />
                                             <div className="form-group">
                                            <input type="password" onChange={this.myChangeHandler} name="password" placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" className="inputtype"  value={this.state.password} onChange={this.onChange} required/>
                                            </div>

                                             <div className="form-group">
                                            <lable> <a href="./ResetPassword" className="aforget">Forget Password? </a></lable>
                                            </div>

                                             <button type="submit"  className="btn btn-success button" >Login</button>
                                            </form>
                                </div>
                                <div className="col-md-6 divsignup">
                                    <form onSubmit={this.signupsubmit}>
                                            <h1 style={{color:"white"}}>Sign Up</h1>
                                            <br />
                                            <div className="form-group">
                                            <input type="text" placeholder='User Name' className="inputtype" name="user_name" value={this.state.user_name} onChange={this.myChangeHandler}   onChange={this.onChange} required/>
                                            </div>

                                             <div className="form-group">
                                                <input type="text" placeholder='Email' name="email" value={this.state.email} onChange={this.myChangeHandler}   onChange={this.onChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Example:abc@gmail.com" className="inputtype" required/>
                                            </div>
                                            <div className="form-group">
                                                <select id="degree_choice" className="inputtype" name="degree_choice" value={this.state.degree_choice} onChange={this.myChangeHandler}   onChange={this.onChange} required>
                                               <option value="">Select</option>
                                              <option value="bs">BS</option>
                                              <option value="mcs">MCS</option>
                                            </select>
                                            </div>

                                            <div className="form-group">
                                                <input type="password" placeholder='Password' name="password1" value={this.state.password1} onChange={this.myChangeHandler}   onChange={this.onChange}
                                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" className="inputtype" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" placeholder='Conform Password' name="password2" value={this.state.password2} onChange={this.myChangeHandler}   onChange={this.onChange}
                                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" className="inputtype" required/>
                                            </div>


                                             <button type="submit" className="btn btn-success button" >Sign Up</button>
                                            </form>
                                </div>
                            </div>
                        </div>
   </div>

</div>

                );
}
}

