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
        constructor(props)
        {
            var user_name=localStorage.getItem('username');
            super(props);
            let finalize_form=false
            this.intialState =
                {
                    list: [],
                    uname:user_name,
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
                    finalize_form
                };
         if(props.list)
            {
                this.state=props.list
            }
         else
            {
                this.state=this.intialState
             }
        this.onChange=this.onChange.bind(this);
        this.onRadioChange1 = this.onRadioChange1.bind(this);
        this.onRadioChange2 = this.onRadioChange2.bind(this);
        this.saveregistrationsubmit = this.saveregistrationsubmit.bind(this);
        this.loadFile=this.loadFile.bind(this);
        this.random_function=this.random_function.bind(this);
        this.random_function_city=this.random_function_city.bind(this);
    }
    buildList =(data)=>
    {

            this.setState({list: data})
     if( this.state.list.check== 'true'){
           this.setState({
                finalize_form:true
           })
        }
    }

    onChange(e)
    {
        this.setState({
        [e.target.name]:e.target.value
        })
    }


    onRadioChange1 = (e) => {
      this.setState({
        math:e.target.value,

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
         this.setState
         ({
                image:event.target.value
         })
         var images = document.getElementById('output');
         images.src = URL.createObjectURL(event.target.files[0]);
    };

    componentDidMount(){
        var user_name = localStorage.getItem('username')
        document.getElementById('result').innerHTML="Wellcome To"+"  "+user_name
        let url="http://127.0.0.1:8000/%5EUpdateRegistration/";
        let data={
            uname:this.state.uname,

        }

    fetch(url,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
            }).then((result)=>{
                result.json().then(this.buildList)
                .catch(error => {
                    this.setState({error});
                })
            })
    }

 handleFinalize(event) {
    event.preventDefault();
    const rdata = new FormData()
    rdata.append('image',  this.state.image);
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
    rdata.append('user_name',localStorage.getItem('username'));
    rdata.append('check','true');

   let statuss="";
   let url="http://127.0.0.1:8000/^SaveUpdateRegistration/";

      axios.post(url, rdata, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
            statuss=res.data;

        })
        .catch(err => console.log(err))
alert("Your Form Data is Finalize");
this.refreshPage();
  }


saveregistrationsubmit(e){
    e.preventDefault()
    const rdata = new FormData()
    rdata.append('image',  this.state.image);
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
    rdata.append('user_name',localStorage.getItem('username'));
    rdata.append('check','false');

    let statuss="";
    let url="http://127.0.0.1:8000/^SaveUpdateRegistration/";

      axios.post(url, rdata, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          statuss=res.data;
        })
        .catch(err => console.log(err))
 alert("Save Form Data");
this.refreshPage();
}

random_function_city(e){
       this.setState({
        city:e.target.value

    })
}
random_function(event)

            {
                var a=document.getElementById("Province").value;
                var b=this.state.list.city;
                 if(a==="Punjab" )
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
refreshPage() {
        window.location.reload();
      }

        render(){
              if(this.state.finalize_form){
            return(
           <div className="App">

                                        <Header />
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
                                    <form>
                                            <br />
                                            <div className="form-group form-inline">
                                             <p id="result" className="hlable1"></p>
                                            </div>

                                            <div className="form-group form-inline">

                                             <h3><span class="label label-default hlable1" >Profile Picture</span></h3>
                                             <input type="file" name="image" accept="image/png, image/jpeg"
                                              style={{color: "white"}} defaultValue={this.state.list.image} onChange={this.handleImageChange}  required/>

                                             <p><img src={this.state.list.image} accept="image/png, image/jpeg" id="output" width="100" height="100px" /></p>

                                            </div>
                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Name</span></h3>
                                              <input type="text" placeholder='Name' name="cname"  defaultValue={this.state.list.cname}
                                               className="hinputtype" readOnly/>


                                            </div>
                                            <div className="form-group form-inline">
                                                 <h3><span class="label label-default hlable1" >Father's Name</span></h3>
                                                <input type="text" placeholder='Father Name' className="hinputtype" defaultValue={this.state.list.father_name}  readOnly />

                                            </div>

                                            <div className="form-group form-inline">
                                            <h3> <span class="label label-default hlable1" >Date of Birth(MM-DD-YYYY)</span></h3>

                                                <input type="date" className="hinputtype" name="dob"  defaultValue={this.state.list.dob} readOnly/>
                                            </div>

                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Degree</span></h3>
                                             <input type="text" className="hinputtype"  defaultValue={this.state.list.degree_choice} readOnly/>
                                            </div>
                                            <div className="form-group form-inline">
                                            <h3><span class="label label-default hlable1" >CNIC No./B-form No.</span></h3>
                                               <input type="text" id="cnic" defaultValue={this.state.list.cnic}
                                                placeholder='00000-000000-0' pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                                               title="Must contain at this patteren (00000-0000000-0)"  className="hinputtype"  readOnly />
                                                </div>
                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Mobile No.</span></h3>
                                               <input type="tel" id="phone" maxlength="12" name="mobile"
                                                placeholder='0000-0000000' pattern="[0-9]{4}-[0-9]{7}"
                                               title="Must contain at this patteren 0000-0000000"  className="hinputtype"  readOnly />
                                                </div>
                                                 <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Land Line(PTCL)</span></h3>
                                               <input type="tel" id="phone" defaultValue={this.state.list.ptcl}
                                                placeholder="Land Line(PTCL)(000-00000000)"
                                                 className="hinputtype"  readOnly />
                                             </div>
                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Email</span></h3>
                                               <input type="text" placeholder='Email' name="email" defaultValue={this.state.list.email}
                                                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                className="hinputtype" readOnly/>
                                              </div>
                                               <div className="form-group form-inline">
                                                 <h3><span class="label label-default hlable1" >Province</span></h3>

                                                <input type="text" className="hinputtype"  defaultValue={this.state.list.province} readOnly/>

                                               </div>

                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >City</span></h3>

                                             <input type="text" className="hinputtype"  defaultValue={this.state.list.city} readOnly/>
                                            </div>
                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Postal Address</span></h3>
                                              <textarea placeholder='Postal Address' maxlength="100" className="hinputtype" name="address"
                                               defaultValue={this.state.list.address} readOnly></textarea>
                                              </div>
                                               <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Gender</span></h3>

                                             <input type="text" className="hinputtype"  defaultValue={this.state.list.gender} readOnly/>
                                            </div>
                                            <div className="form-group ">
                                                 <h5><span class="label label-default hlable1" >Have you studied Mathematics in intermediate?<br />(if case of NO. your are not eligible for Bs programs)</span></h5>
                                                  <input type="radio"  name="Math"  value="yes" checked ={this.state.list.math=== "yes"}  />
                                                  <label for="yes" className="hlable1">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  <input type="radio"  name="Math" value="no"  checked={this.state.list.math === "no"}   />
                                                  <label for="no" className="hlable1">No</label><br />
                                             </div>
                                             <div className="form-group">
                                                 <h5><span class="label label-default hlable1" >Have you studied Physics or Statistician or <br /> Computer Science  in intermediate?<br />(if case of NO. your are not eligible for Bs programs)</span></h5>
                                                  <input type="radio"  name="phystat" value="Yes" checked={this.state.list.phystat === "Yes" } />
                                                  <label for="yes" className="hlable1">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  <input type="radio"  name="phystat" value="No" checked={this.state.list.phystat === "No" }  />
                                                  <label for="no" className="hlable1">No</label><br />
                                             </div>
                                             </form>
                                </div>
                            </div>
                        </div>


                             </div>

            );
        }





                return (
                             <div className="App">

                                        <Header />
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
                                    <form  onSubmit={this.saveregistrationsubmit}>
                                            <br />
                                            <div className="form-group form-inline">
                                             <p id="result" className="hlable1"></p>
                                            </div>

                                            <div className="form-group form-inline">

                                             <h3><span class="label label-default hlable1" >Profile Picture</span></h3>
                                             <input type="file" name="image" accept="image/png, image/jpeg"
                                             style={{color: "white"}}  onChange={this.handleImageChange}  required/>

                                             <p><img src={this.state.list.image}  id="output" width="100" height="100px" /></p>

                                            </div>
                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Name</span></h3>
                                              <input type="text" placeholder='Name' name="cname"  defaultValue={this.state.list.cname} onChange={this.myChangeHandler}
                                              onChange={this.onChange} className="hinputtype" required/>


                                            </div>
                                            <div className="form-group form-inline">
                                                 <h3><span class="label label-default hlable1" >Father's Name</span></h3>
                                                <input type="text" placeholder='Father Name' className="hinputtype" name="father_name"  defaultValue={this.state.list.father_name} onChange={this.myChangeHandler}   onChange={this.onChange} required/>

                                            </div>

                                            <div className="form-group form-inline">
                                            <h3> <span class="label label-default hlable1" >Date of Birth(MM-DD-YYYY)</span></h3>

                                                <input type="date" className="hinputtype" name="dob"  defaultValue={this.state.list.dob} onChange={this.myChangeHandler}   onChange={this.onChange} required/>
                                            </div>

                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Degree</span></h3>
                                            <select id="degree_choice" className="hinputsel" name="degree_choice"   onChange={this.myChangeHandler}   onChange={this.onChange}>
                                              <option value="">Select</option>
                                              <option value="bs" selected={this.state.list.degree_choice==='bs'} >BS</option>
                                              <option value="mcs" selected={this.state.list.degree_choice==='mcs'}>MSc</option>
                                            </select>
                                            </div>
                                            <div className="form-group form-inline">
                                            <h3><span class="label label-default hlable1" >CNIC No./B-form No.</span></h3>
                                               <input type="text" id="cnic" name="cnic" maxlength="15" defaultValue={this.state.list.cnic} onChange={this.myChangeHandler}
                                               onChange={this.onChange} placeholder='00000-000000-0' pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                                               title="Must contain at this patteren (00000-0000000-0)"  className="hinputtype"  required />
                                                </div>
                                            <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Mobile No.</span></h3>
                                               <input type="tel" id="phone" maxlength="12" name="mobile" defaultValue={this.state.list.mobile} onChange={this.myChangeHandler}
                                               onChange={this.onChange}  placeholder='0000-0000000' pattern="[0-9]{4}-[0-9]{7}"
                                               title="Must contain at this patteren 0000-0000000"  className="hinputtype"  required />
                                                </div>
                                                 <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Land Line(PTCL)</span></h3>
                                               <input type="tel" id="phone" maxlength="12" name="ptcl" defaultValue={this.state.list.ptcl} onChange={this.myChangeHandler}   onChange={this.onChange} placeholder="Land Line(PTCL)(000-00000000)" pattern="[0-9]{3}-[0-9]{8}"  title="Must contain at this patteren 000-00000000"  className="hinputtype"  required />
                                             </div>
                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Email</span></h3>
                                               <input type="text" placeholder='Email' name="email" defaultValue={this.state.list.email} onChange={this.myChangeHandler}   onChange={this.onChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="hinputtype" required/>
                                              </div>
                                               <div className="form-group form-inline">
                                                 <h3><span class="label label-default hlable1" >Province</span></h3>
                                                   <select id="Province" className="hinputsel"  name="province"    onChange={this.random_function}   required >

                                                    <option value="Punjab" selected={this.state.list.province==='Punjab'}>Punjab</option>
                                                    <option value="Khyber_Pakhtunkhwa" selected={this.state.list.province==='Khyber_Pakhtunkhwa'}>Khyber_Pakhtunkhwa</option>
                                                    <option value="Balochistan" selected={this.state.list.province==='Balochistan'}>Balochistan</option>
                                                    <option value="Sindh" selected={this.state.list.province==='Sindh'}>Sindh</option>
                                                </select>

                                               </div>

                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >City</span></h3>
                                            <select id="City"  onChange={this.random_function_city} className="hinputsel" name="city" defaultValue={this.state.city} >

                                            </select>
                                            </div>
                                             <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Postal Address</span></h3>
                                              <textarea placeholder='Postal Address' maxlength="100" className="hinputtype" name="address" defaultValue={this.state.list.address} onChange={this.myChangeHandler}   onChange={this.onChange} required></textarea>
                                              </div>
                                               <div className="form-group form-inline">
                                             <h3><span class="label label-default hlable1" >Gender</span></h3>
                                            <select id="gender" className="hinputsel" name="gender" defaultValue={this.state.list.gender} onChange={this.myChangeHandler}   onChange={this.onChange} required>
                                              <option value="">Select</option>
                                              <option value="male" selected={this.state.list.gender==='male'}>Male</option>
                                              <option value="female" selected={this.state.list.gender==='female'}>Female</option>

                                            </select>
                                            </div>
                                            <div className="form-group ">
                                                 <h5><span class="label label-default hlable1" >Have you studied Mathematics in intermediate?<br />(if case of NO. your are not eligible for Bs programs)</span></h5>
                                                  <input type="radio"  name="Math"  value="yes" checked ={this.state.list.math=== "yes"||this.state.math=== "yes"}   onChange={this.onRadioChange1}   required />
                                                  <label for="yes" className="hlable1">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  <input type="radio"  name="Math" value="no"  checked={this.state.list.math === "no"|| this.state.math=== "no"}   onChange={this.onRadioChange1}    required />
                                                  <label for="no" className="hlable1">No</label><br />
                                             </div>
                                             <div className="form-group">
                                                 <h5><span class="label label-default hlable1" >Have you studied Physics or Statistician or <br /> Computer Science  in intermediate?<br />(if case of NO. your are not eligible for Bs programs)</span></h5>
                                                  <input type="radio"  name="phystat" value="Yes" checked={this.state.list.phystat === "Yes" ||this.state.phystat=== "Yes"} onChange={this.onRadioChange2}  required />
                                                  <label for="yes" className="hlable1">Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  <input type="radio"  name="phystat" value="No" checked={this.state.list.phystat === "No" ||this.state.phystat=== "No"} onChange={this.onRadioChange2} required />
                                                  <label for="no" className="hlable1">No</label><br />
                                             </div>
                                             <button type="submit" className="btn btn-success button" >SAVE</button><br /> <br />
                                             <button type="submit" onClick={this.handleFinalize.bind(this)} className="btn btn-success button" >FINALIZE</button>
                                           </form>
                                </div>
                            </div>
                        </div>


                             </div>

                );
        }
   }