import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Print_Application.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Menue from './Menue';
import LogSign from './LogSign';
import $ from 'jquery';
import axios from 'axios';
import App from './App';
export default class Print_Application extends Component
    {
        constructor(props)
        {
            super(props);
        }
        render(){

            return(
           <div className="App">
            <div class="printBTN">
        <input type="button" id="custom-button"value="Print Form" onclick="myfun()" />
    </div>
    <div class="header">
        <div class="logo">
            <img src="images/logo.png" />
        </div>
        <div class="title">
            Punjab University College Of Information Technology<br />
            University Of the Punjab, Lahore<br />
            Online Entry Test Application For Fall
        </div>
    </div>
    <div class="data">
        <div class="print">
            <h3 className="h3back">Reference ID</h3>
            <table>
                <tr>
                    <td>Form ID</td>
                    <td> 136980 </td>
                </tr>
                <tr>
                    <td>Degree applied for</td>
                    <td>BS</td>
                </tr>
            </table>
            <h3 className="h3back">Reference ID</h3>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Muhammad Haseeb Malik</td>
                </tr>
                <tr>
                    <td>Father's Name</td>
                    <td>Muhammad Nazeer</td>
                </tr>
                <tr>
                    <td>CNIC Number</td>
                    <td>00000-0000000-0</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>01-08-2000</td>
                </tr>
                <tr>
                    <td>Postal Address</td>
                    <td>VILLAGE BARKA KALAN, P/O BARKI, LAHORE CANTT</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>abc@xyz.com</td>
                </tr>
                <tr>
                    <td>Cell</td>
                    <td>03000000000</td>
                </tr>
                <tr>
                    <td>Telephone</td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="image">
            <div class="picture">
                picture here
            </div>
        </div>
       </div>
           </div>

           );
   }
 }