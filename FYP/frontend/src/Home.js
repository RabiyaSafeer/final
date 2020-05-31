import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Menue from './Menue';
import LogSign from './LogSign';
import $ from 'jquery';
import axios from 'axios';
import App from './App';
export default class Home extends Component
{
 constructor() {
        super();



this.state = {
    title: '',
    content: '',
    image:null,
    cname:'',
    father_name:'',
    dob:'',
    degree_choice:'',
    cnic:'',
    mobile:'',
    ptcl:'',
    email:'',
    province:'',
    city:'',
    address:'',
    gender:'',
    math: '',
    phystat:'',

  };
  this.onChange=this.onChange.bind(this);
  this.onRadioChange1 = this.onRadioChange1.bind(this);
  this.onRadioChange2 = this.onRadioChange2.bind(this);
  this.registrationsubmit = this.registrationsubmit.bind(this);
  this.loadFile=this.loadFile.bind(this);
  this.random_function=this.random_function.bind(this);
  this.random_function_city=this.random_function_city.bind(this);
}

  onChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
  }


  onRadioChange1 = (e) => {
      this.setState({
        math:e.target.value
      });
    }
 onRadioChange2 = (e) => {
      this.setState({
        phystat:e.target.value
      });
    }

  handleImageChange = (e) => {
  this.loadFile(e);
    this.setState({
      image: e.target.files[0],
      loaded: 0,
    })
  };

  loadFile(event) {
 this.setState({
        image:event.target.value
    })
	var images = document.getElementById('output');
	images.src = URL.createObjectURL(event.target.files[0]);
};

setRegistrationStatus =(rdata)=>{

        if( rdata.status== 'true'){
         alert("User Name Already Exist");
        }
         else{

         alert("You Have Successfully Account Registration");

        }
    }
    componentDidMount(){
    var user_name = localStorage.getItem('username')
        document.getElementById('result').innerHTML="Wellcome To"+"  "+user_name
    }
registrationsubmit(e){
   e.preventDefault()

    const rdata = new FormData()
    rdata.append('image',  this.state.image, this.state.image.name);
    rdata.append('cname', this.state.cname);
    rdata.append('father_name', this.state.father_name);
    rdata.append('dob', this.state.dob);
    rdata.append('degree_choice', this.state.degree_choice);
    rdata.append('cnic', this.state.cnic);
    rdata.append('mobile', this.state.mobile);
    rdata.append('ptcl', this.state.ptcl);
    rdata.append('email', this.state.email);
    rdata.append('province', this.state.province);
    rdata.append('city', this.state.city);
    rdata.append('address', this.state.address);
    rdata.append('gender', this.state.gender);
    rdata.append('math', this.state.math);
    rdata.append('phystat', this.state.phystat);
    rdata.append('user_name', localStorage.getItem('username'));
    alert(rdata);
    let url="http://127.0.0.1:8000/%5ERegistration/";

       axios.post(url, rdata, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))


}

random_function_city(e){
       this.setState({
        city:e.target.value

    })
}
random_function(event)

            {
                var a=document.getElementById("Province").value;
                if(a===""){

                    var arr=[];
                }
                else if(a==="Punjab")
                {
                    var arr=["Lahore","Multan","Faisalabad","Gujranwala","Rawalpindi","Sargodha","Bahawalpur","Sialkot","Sheikhupura","Gujrat","Jhang","Sahiwal"];
                }
                else if(a==="Khyber_Pakhtunkhwa")
                {
                    var arr=["Peshawar","Abbottabad","Mardan","Mingora","Kohat","Dera_Ismail_Khan","Swabi","Nowshera"];
                }
                else if(a==="Balochistan")
                {
                    var arr=["Quetta","Khuzdar","Chaman","Turbat","Sibi","Gwadar","Nasirabad"];
                }
                else if(a==="Sindh")
                {
                    var arr=["Karachi","Hyderabad","Sukkur","Larkana","Nawabshah","Mirpur_Khas","Jacobabad","Shikarpur"];
                }
                var string="";

                for(var i=0;i<arr.length;i++)
                {
                    string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
                }
                 this.setState({
        province:event.target.value,

                 })
                document.getElementById("City").innerHTML=string;
   }


        render(){

                return (
                             <div className="App">

                                        <Header />
                                        <div><a href="./LogSign">App</a></div>
                                      <div className="container" >
                                        <br /> <br /> <br /> <br /> <br />
                                        <h3 className="h3info">Wellcome to PUCIT Online Entrance Test Registration System</h3>
                                        <br />
                                      </div>

                                <div className="container-fluid hbg">
                            <div className="row">
                                <div className="col-md-3">
                                <br />
                                    <Menue />
                                </div>

                                <div className="col-md 9  hdivreg">
                                    <form  onSubmit={this.registrationsubmit} novalidate>
                                            <br />
                                            <div className="form-group form-inline">
                                             <p id="result" className="hlable1"></p>
                                            </div>

                                            <div className="form-group form-inline">

                                             <h3><span class="label label-default hlable1" >Profile Picture</span></h3>
                                             <input type="file"
                   name="image"
                   accept="image/png, image/jpeg" style={{color: "white"}}   onChange={this.handleImageChange}  required/>

                                             <p><img id="output" width="100" height="100px" /></p>

                                            </div>
                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Name</span></h3>
                                              <input type="text" placeholder='Name' name="cname"  value={this.state.cname} onChange={this.myChangeHandler}
                                              onChange={this.onChange} className="hinputtype" required/>


                                            </div>
                                            <div className="form-group form-inline">
                                                 <h3><span class="label label-default hlable1" >Father's Name</span></h3>
                                                <input type="text" placeholder='Father Name' className="hinputtype" name="father_name"  value={this.state.father_name} onChange={this.myChangeHandler}   onChange={this.onChange} required/>

                                            </div>

                                            <div className="form-group form-inline">
                                            <h3> <span class="label label-default hlable1" >Date of Birth(MM-DD-YYYY)</span></h3>

                                                <input type="date" className="hinputtype" name="dob"  value={this.state.dob} onChange={this.myChangeHandler}   onChange={this.onChange} required/>
                                            </div>

                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Degree</span></h3>
                                            <select id="degree_choice" className="hinputsel" name="degree_choice"  value={this.state.degree_choice} onChange={this.myChangeHandler}   onChange={this.onChange}>
                                              <option value="">Select</option>
                                              <option value="bs">BS</option>
                                              <option value="mcs">MSc</option>
                                            </select>
                                            </div>
                                            <div className="form-group form-inline">
                                            <h3><span class="label label-default hlable1" >CNIC No./B-form No.</span></h3>
                                               <input type="text" id="cnic" name="cnic" maxlength="15" value={this.state.cnic} onChange={this.myChangeHandler}   onChange={this.onChange} placeholder='00000-000000-0' pattern="[0-9]{5}{-}[0-9]{6}{-}-[0-9]{1}" title="Must contain at this patteren (00000-0000000-0)"  className="hinputtype"  required />
                                                </div>
                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Mobile No.</span></h3>
                                               <input type="tel" id="phone" maxlength="12" name="mobile" value={this.state.mobile} onChange={this.myChangeHandler}   onChange={this.onChange}  placeholder='0000-0000000' pattern="[0-9]{4}-[0-9]{7}" title="Must contain at this patteren 0000-0000000"  className="hinputtype"  required />
                                                </div>
                                                 <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Land Line(PTCL)</span></h3>
                                               <input type="tel" id="phone" maxlength="12" name="ptcl" name="ptcl" value={this.state.ptcl} onChange={this.myChangeHandler}   onChange={this.onChange} placeholder="Land Line(PTCL)(000-00000000)" pattern="[0-9]{3}-[0-9]{8}"  title="Must contain at this patteren 000-00000000"  className="hinputtype"  required />
                                             </div>
                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Email</span></h3>
                                               <input type="text" placeholder='Email' name="email" value={this.state.email} onChange={this.myChangeHandler}   onChange={this.onChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="hinputtype" required/>
                                              </div>
                                               <div className="form-group form-inline">
                                                 <h3><span class="label label-default hlable1" >Province</span></h3>
                                                   <select id="Province" className="hinputsel"  name="province"   onChange={this.random_function} value={this.state.province}  required >
                                                    <option value="">Select</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Khyber_Pakhtunkhwa">Khyber_Pakhtunkhwa</option>
                                                    <option value="Balochistan">Balochistan</option>
                                                    <option value="Sindh">Sindh</option>
                                                </select>

                                               </div>

                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >City</span></h3>
                                            <select id="City"  onChange={this.random_function_city} className="hinputsel" name="city" value={this.state.city} >

                                            </select>
                                            </div>
                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Postal Address</span></h3>
                                              <textarea placeholder='Postal Address' maxlength="100" className="hinputtype" name="address" value={this.state.address} onChange={this.myChangeHandler}   onChange={this.onChange} required></textarea>
                                              </div>
                                               <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Gender</span></h3>
                                            <select id="gender" className="hinputsel" name="gender" value={this.state.gender} onChange={this.myChangeHandler}   onChange={this.onChange} required>
                                              <option value="">Select</option>
                                              <option value="male">Male</option>
                                              <option value="female">Female</option>

                                            </select>
                                            </div>
                                            <div className="form-group ">
                                                 <h5><span class="label label-default hlable1" >Have you studied Mathematics in intermediate?<br />(if case of NO. your are not eligible for Bs programs)</span></h5>
                                                  <input type="radio"  name="Math" value="yes" checked={this.state.math === "yes"} onChange={this.onRadioChange1}  required />
                                                  <label for="yes" className="hlable1">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  <input type="radio"  name="Math" value="no" checked={this.state.math === "no"} onChange={this.onRadioChange1} required />
                                                  <label for="no" className="hlable1">No</label><br />
                                             </div>
                                             <div className="form-group">
                                                 <h5><span class="label label-default hlable1" >Have you studied Physics or Statisticsin or <br /> Computer Science  in intermediate?<br />(if case of NO. your are not eligible for Bs programs)</span></h5>
                                                  <input type="radio"  name="phystat" value="Yes" checked={this.state.phystat === "Yes"} onChange={this.onRadioChange2}  required />
                                                  <label for="yes" className="hlable1">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  <input type="radio"  name="phystat" value="No" checked={this.state.phystat === "No"} onChange={this.onRadioChange2} required />
                                                  <label for="no" className="hlable1">No</label><br />
                                             </div>
                                             <button type="submit" className="btn btn-success button" >SAVE</button><br /> <br />
                                             <button type="submit" className="btn btn-success button" >FINALIZE</button>
                                            </form>
                                </div>
                            </div>
                        </div>


                             </div>

                );
        }
   }