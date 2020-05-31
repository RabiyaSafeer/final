import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './RollNo_Slip.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menue from './Menue';
import './App.css';
import jsPDF from 'jspdf';
import Moment from 'moment';
import $ from 'jquery';

export default class RollNo_Slip extends Component
{
 constructor(props) {
    super(props);
    var user_name= localStorage.getItem('username');
    let showslip=false;
   this.intialState =
                {
                    list: [],
                    uname:user_name,
                    showslip
                };
         if(props.list)
            {
                this.state=props.list
            }
         else
            {
                this.state=this.intialState
             }
  }
 buildList =(data)=>
    {

            this.setState({list: data})
           if( this.state.list.Slip_Show== 'yes'){
           this.setState({
                showslip:true
           })
        }
    }




componentDidMount(){

    var user_name = localStorage.getItem('username')
        let url="http://127.0.0.1:8000/%5ESlip/";
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
              render(){
              if(this.state.showslip){
                return (
                    <div class="App">
                        <div className="disRollMenu">
                            <Menue />
                        </div>
                         <div className="container-fluid headcontain">

                            <div className="divtxt">
                                        <h2>Punjab University College Of Information Technology</h2>
                                        <h2>University Of the Punjab, Lahore</h2>
                                        <h1>Entrance Test Roll No. Slip </h1>
                            </div>
                            <div align="center">
                                <div className="form-group Rollno">
                                    <div>Entrance Test Roll No.</div>
                                    <input type="text" defaultValue={this.state.list.Roll_No} className="inputdata" style={{textAlign:"center",fontSize:'35px'}} readOnly />
                                </div>
                            </div>
                          </div>
                         <div className="container-fluid">
                                <div className="row div_info_row">
                                    <div className="col-md-6" >
                                        <br />
                                        <h4>Form ID: <input type="text"  defaultValue={this.state.list.Form_ID}  className="inputdataFormid" readOnly /> <br /><br />
                                            Name : <input type="text" defaultValue={this.state.list.cname} className="inputdataFormid" readOnly /><br /><br />
                                            Father's Name : <input type="text" defaultValue={this.state.list.father_name} className="inputdataFormid" readOnly /> <br /><br />
                                            CNIC/Form B : <input type="text" defaultValue={this.state.list.cnic} className="inputdataFormid" readOnly /><br /><br />

                                         </h4>
                                    </div>
                                    <div className="col-md-6 imge">
                                         <br />
                                        <p><img src={this.state.list.Image_url}  width="100" height="100px" /></p>
                                    </div>
                                </div>
                         </div>
                         <br />
                         <div className="container-fluid">
                            <div className="row div_info_row">
                                <div className="col-md-3" >
                                    <br />
                                    <div class="sidebar">
                                        Test Date/Reporting Time
                                        <hr class="hr_line" />

                                           Date: <input type="text" className="inputRoomDate" defaultValue={Moment(this.state.list.date_time).format('DD-MM-YYYY')} readOnly />
                                           <br />
                                           Time: <input type="text" className="inputRoomDate" defaultValue={Moment(this.state.list.date_time).utcOffset('+00:00').format('hh:mm a')}  readOnly />

		                            </div>
                                </div>

                                <div className="col-md-6">
                                    <br />
                                    <center><div class="sidebar">
                                        Test Center
                                        <hr class="hr_line" />
                                         <textarea className="inputdata" style={{height:"120px"}} defaultValue={this.state.list.center}  readOnly />

		                            </div></center>
                                </div>
                                <div className="col-md-3 ">
                                     <br />
                                    <div class="sidebar">
                                        Sitting Place
                                        <hr class="hr_line" />
                                        Room: <input type="text" className="inputRoomDate" defaultValue={this.state.list.hall_no} /><br />
                                        SeatNo: <input type="text" className="inputRoomDate" defaultValue={this.state.list.seat_no.split(/([0-9]+)/)[1]} />

		                            </div>
                                </div>
                            </div>
                         </div>



                         <div className="container-fluid">
                            <div className="row div_info_row">
                                <div className="col-md-12" >
                                    <br />
                                    <h4>
                                    Note:
                                    <ul>
                                      <li>It is COMPULSORY to bring entrance test Roll No. slip and orignal picture identity to appera in the test.</li>
                                      <ul>
                                      <li> Possible picture identity: Orignal CNIC or Password or Driving License or Secondary School Certificte with picture.</li>
                                      <li>A Candidate is allowed to enter the test center only with ORIGNAL picture identity</li>
                                      <li>Photocopy of any picture identity is NOT acceptable to enter the test center.</li>
                                      </ul>
                                      <li>Mobile phones, handlbags, calculator, gadgets,etc or any helping material is NOT allowed in the test center.</li>
                                      <li>Keep visiting www.pucit.edu.pk or www.pu.edu.pk/pucit for updates.</li>
                                      <li> For further queries you may contact UAN: 111-923-923 Ext(149, 161) or send an e-mail:info@pucit.edu.pk</li>
                                    </ul>
                                    </h4>
                                </div>
                            </div>
                         </div>


                         <div className="container-fluid">
                            <div className="row div_info_row">
                                <div className="col-md-12" >
                                    <br />
                                    <h4>
                                        <span id="urdu">
                                            <ul>
                                              <li>امتحانی مرکز میں یہ رول نمبر سلیپ اور ایک اصل تصویری دستاویز لانا ضروری ھے جس سے آپ کی شناخت کی جا سکے</li>
                                              <li>ممکنہ تصویری دستاویز: شناختی کارڈ ‘ پاسپورٹ ‘ ڈرایونگ لا ٰنسنس یا میٹرک کی تصویر والی سند۔</li>
                                              <li> صرف اصل تصویری دستاویز بی قابل قبول بوگی۔ فوٹو کاپی کی بنیاد پر امتحان دینے کی اجازت نبیں دی جاےگی۔</li>
                                              <li> فارم ب یا سکول اور کالج کارڈ قابل قبول نہ ہوگا۔</li>
                                              <li>امتحانی مرکز میں موبابل فون ‘ کیلکولیٹر‘ ٰبینڈ بیگ ‘ اسلحہ یا کسی بھی قسم کے امدادی مواد کے لانے کی قطعااجازت نبیں بے</li>
                                            </ul>
                                        </span>
                                    </h4>
                                </div>
                            </div>
                         </div>


                         <div className="container-fluid">
                            <div className="row div_info_row">
                                <div className="col-md-12" >
                                    <br />
                                    <center>
                                        <div class="center">
                                            <center> <input type="text" style={{textAlign:"center"}}  defaultValue={this.state.list.shifts} readOnly /></center>
                                        </div>
                                    </center>
                                </div>
                            </div>
                         </div>
                         <br />
                         <h5>This is a PUCIT online entrance test system generated Roll No Slip. No Signature is required.</h5>
                         <br />

                    </div>
                 );
                }
                 return (
                             <div className="App">
                                 <div className="msg">
                                    <br /><br />
                                   Challan Form is Unpaid...
                                 </div>
                           </div>
                       );

              }
   }