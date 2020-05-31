import React,{Component} from 'react'
import { Link,Redirect} from 'react-router-dom'
export default class Logout extends Component

{
constructor(props){
        super(props)
        const token= localStorage.removeItem("token")
        }

    render(){
              return (
                        <div>
                        <Redirect to="/" />
                           // <Link to="/">Login Again</Link>
                        </div>
              );
    }
}