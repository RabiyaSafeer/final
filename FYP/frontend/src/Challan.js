import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Header from './Header';
import './Challan.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menue from './Menue';
import './App.css';
import Moment from 'moment';
import jsPDF from 'jspdf';
import $ from 'jquery';

export default class Challan extends Component
{
  constructor(props) {
    super(props);
    var user_name= localStorage.getItem('username');
    let showchallan=false;
   this.intialState =
                {
                    list: [],
                    uname:user_name,
                    cname : '',
                    session: '',

                    showchallan
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
           if( this.state.list.user_name== localStorage.getItem('username')){
           this.setState({
                showchallan:true
           })
        }
    }




    componentDidMount(){

    var user_name = localStorage.getItem('username')
        let url="http://127.0.0.1:8000/%5EChallan/";
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
             if(this.state.showchallan){
              return (
                <div className="App">
                <div className="disChallanMenu">
                    <Menue />
                </div>

                <center> <input type="text"  className="paid_unpaid"  defaultValue={this.state.list.challan_status} readOnly />   </center><br />

                            <button id="cmd" onClick={this.printDocument} className="btn btn-outline-primary" >Save as PDF</button>

                                <div className="div">

                                                    <center><b>1</b> </center> <br />
                                                    <center><b>Depositor's Copy</b></center><br />
                                                    <center><b>Habib Bank Limited</b></center><br />

                                                    <center><b>Date : <input type="text" className="input_field"    defaultValue={Moment(this.state.list.date).format('DD-MM-YYYY')} readOnly />

                                                      Challan No. <input type="text" className="input_field"   defaultValue={this.state.list.challan_number} readOnly />
                                                      </b></center><br /><br />
                                                    <center><b>Credit: Punjab University Old Campus</b> </center><br />

                                                    <center><b>Account Number: <input type="text" className="input_field"  name="date" defaultValue={this.state.list.account_number} readOnly /></b></center><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: <input type="text"  className="input_fieldName"   defaultValue={this.state.list.cname} readOnly /><br /><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Challan Form Deposit Deadline: <input type="text" className="input_field"   defaultValue={Moment(this.state.list.deposit_deadline).format('DD-MM-YYYY')} readOnly /><hr />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Department:<u>PUCIT</u></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Session: <input type="text"  className="input_field"   defaultValue={this.state.list.session} readOnly /></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Program: <input type="text"  className="input_field"   defaultValue={this.state.list.program} readOnly /></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNIC:    <input type="text"  className="input_fieldName"   defaultValue={this.state.list.cnic} readOnly /></b><br /><br />

                                <table  align="center" cellspacing="1" className="challan" width="90%" border="1">


                                <tbody><tr>
                                            <td className="td1"><b>Entry Test Fee</b></td>
                                            <td className="td2"><b>500</b></td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                        <tr>
                                        <td className="td3"><b>Total Rs.</b></td>
                                        <td className="td4"><b> &nbsp; 500 &nbsp; </b></td>
                                    </tr>
                                    <tr>
                                        <td className="td5"><u>Total (Rs. in Words):five hundred only.&nbsp;&nbsp;&nbsp;</u></td>
                                    </tr>


                                </tbody></table><br /><br />
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Officer__________________________CASHIER
                             <table>
                                    <tbody><tr height="30px">
	                                      <td colspan="2"></td>
	                                       </tr>
                                    </tbody></table>
                                        <br /><br /><br /><br /><br />
                                        &nbsp;
                                        Challan Form Deposit Deadline:<input type="text" className="input_field"   defaultValue={Moment(this.state.list.deposit_deadline).format('DD-MM-YYYY')} readOnly /><br /><br />
                                        &nbsp; The entrance test registration fee is neither refundable nor transferable.&nbsp;&nbsp;&nbsp;&nbsp;
                                        <br /> <br />

                             </div>

                            <div className="div">

                                                    <center><b>2</b> </center> <br />
                                                    <center><b>Depositor's Copy</b></center><br />
                                                    <center><b>Habib Bank Limited</b></center><br />

                                                    <center><b>Date : <input type="text" className="input_field"    defaultValue={Moment(this.state.list.date).format('DD-MM-YYYY')} readOnly />

                                                      Challan No. <input type="text" className="input_field"   defaultValue={this.state.list.challan_number} readOnly />
                                                      </b></center><br /><br />
                                                    <center><b>Credit: Punjab University Old Campus</b> </center><br />

                                                    <center><b>Account Number: <input type="text" className="input_field"  name="date" defaultValue={this.state.list.account_number} readOnly /></b></center><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: <input type="text"  className="input_fieldName"   defaultValue={this.state.list.cname} readOnly /><br /><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Challan Form Deposit Deadline: <input type="text" className="input_field"   defaultValue={Moment(this.state.list.deposit_deadline).format('DD-MM-YYYY')} readOnly /><hr />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Department:<u>PUCIT</u></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Session: <input type="text"  className="input_field"   defaultValue={this.state.list.session} readOnly /></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Program :<input type="text"  className="input_field"   defaultValue={this.state.list.program} readOnly /></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNIC:    <input type="text"  className="input_fieldName"   defaultValue={this.state.list.cnic} readOnly /></b><br /><br />

                                <table  align="center" cellspacing="1" className="challan" width="90%" border="1">


                                <tbody><tr>
                                            <td className="td1"><b>Entry Test Fee</b></td>
                                            <td className="td2"><b>500</b></td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                        <tr>
                                        <td className="td3"><b>Total Rs.</b></td>
                                        <td className="td4"><b> &nbsp; 500 &nbsp; </b></td>
                                    </tr>
                                    <tr>
                                        <td className="td5"><u>Total (Rs. in Words):five hundred only.&nbsp;&nbsp;&nbsp;</u></td>
                                    </tr>


                                </tbody></table><br /><br />
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Officer__________________________CASHIER
                             <table>
                                    <tbody><tr height="30px">
	                                      <td colspan="2"></td>
	                                       </tr>
                                    </tbody></table>
                                        <br /><br /><br /><br /><br />
                                        &nbsp;
                                        Challan Form Deposit Deadline:<input type="text" className="input_field"   defaultValue={Moment(this.state.list.deposit_deadline).format('DD-MM-YYYY')} readOnly /><br /><br />
                                        &nbsp; The entrance test registration fee is neither refundable nor transferable.&nbsp;&nbsp;&nbsp;&nbsp;
                                        <br /> <br />

                             </div>
                                <div className="div">

                                                    <center><b>3</b> </center> <br />
                                                    <center><b>Depositor's Copy</b></center><br />
                                                    <center><b>Habib Bank Limited</b></center><br />

                                                    <center><b>Date : <input type="text" className="input_field"    defaultValue={Moment(this.state.list.date).format('DD-MM-YYYY')} readOnly />

                                                      Challan No. <input type="text" className="input_field"   defaultValue={this.state.list.challan_number} readOnly />
                                                      </b></center><br /><br />
                                                    <center><b>Credit: Punjab University Old Campus</b> </center><br />

                                                    <center><b>Account Number: <input type="text" className="input_field"  name="date" defaultValue={this.state.list.account_number} readOnly /></b></center><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: <input type="text"  className="input_fieldName"   defaultValue={this.state.list.cname} readOnly /><br /><br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Challan Form Deposit Deadline: <input type="text" className="input_field"   defaultValue={Moment(this.state.list.deposit_deadline).format('DD-MM-YYYY')} readOnly /><hr />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Department:<u>PUCIT</u></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Session: <input type="text"  className="input_field"   defaultValue={this.state.list.session} readOnly /></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Program :<input type="text"  className="input_field"   defaultValue={this.state.list.program} readOnly /></b><br /><br />
                                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNIC:    <input type="text"  className="input_fieldName"   defaultValue={this.state.list.cnic} readOnly /></b><br /><br />

                                <table  align="center" cellspacing="1" className="challan" width="90%" border="1">


                                <tbody><tr>
                                            <td className="td1"><b>Entry Test Fee</b></td>
                                            <td className="td2"><b>500</b></td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                            <tr>
                                            <td className="td1">&nbsp;&nbsp;&nbsp;</td>
                                            <td className="td2">&nbsp;&nbsp;&nbsp;</td>
                                        </tr>
                                        <tr>
                                        <td className="td3"><b>Total Rs.</b></td>
                                        <td className="td4"><b> &nbsp; 500 &nbsp; </b></td>
                                    </tr>
                                    <tr>
                                        <td className="td5"><u>Total (Rs. in Words):five hundred only.&nbsp;&nbsp;&nbsp;</u></td>
                                    </tr>


                                </tbody></table><br /><br />
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Officer__________________________CASHIER
                             <table>
                                    <tbody><tr height="30px">
	                                      <td colspan="2"></td>
	                                       </tr>
                                    </tbody></table>
                                        <br /><br /><br /><br /><br />
                                        &nbsp;
                                        Challan Form Deposit Deadline:<input type="text" className="input_field"   defaultValue={Moment(this.state.list.deposit_deadline).format('DD-MM-YYYY')} readOnly /><br /><br />
                                        &nbsp; The entrance test registration fee is neither refundable nor transferable.&nbsp;&nbsp;&nbsp;&nbsp;
                                        <br /> <br />

                             </div>



                        </div>
                    );
                    }
                    return (
                             <div className="App">
                                 <div className="msg">
                                    <br /><br />
                                   Registration Form is Not Finalize
                                 </div>
                           </div>
                       );


              }
   }