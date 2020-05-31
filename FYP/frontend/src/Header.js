import React, {Component} from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
export default class Header extends Component
{
    render(){
              return (
                        <div className="container-fluid head1">

                          <div className="divtxtimg">
                                    <img src={process.env.PUBLIC_URL + "/pucit.jpg"} width="100px" />

                                    <b>Punjab University College of Information Technology</b>
                                     </div>

                        </div>

              );
    }
}