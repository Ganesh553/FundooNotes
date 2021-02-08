import React from "react"
import './register.scss'
import logo from '../../assert/img.png'
import logo1 from '../../assert/download.jpg';
import UserService from "../../service/userService";
const user = new UserService();

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
        console.log("on change calling", e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRegister = (e) =>{
        console.log("calling handle")
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            service:"advance"
        }
        console.log(data)
        user.registration(data).then((response) =>{
            console.log(" Response is successfull", response);
        }).catch((error)=>{
            console.log("error", error);
        })
    }

    render(){
        return ( 
             <div class="main">
                <div class="Main">
                   <div class="header1">
                        <img src={logo} class="logo"></img>
                        <h3 class="Acc">Create your google Account</h3>
                    </div>
                    <div class="name">
                        <input type="name" name="firstName" value={this.state.firstName} onChange={this.handleChange} required></input>
                        <label>First Name</label>
                    </div>

                    <div class="name">
                        <input type="name" name="lastName" value={this.state.lastName} onChange={this.handleChange} required></input>
                        <label>Last Name</label>
                    </div>

                    <div class="user-name">
                        <input type="name" name="email" value={this.state.email} onChange={this.handleChange} required></input>
                         <label class="Username">Username</label>
                         <span class="gmail1">@gmail.com</span>
                    </div>

                    <a href="" class="line1" >You can use letter, number and period</a>
                    <a href="" class="line2">Use my current email address instead</a>
                    <div class="pass12">
                        <input type="password" class="password" name="password" value={this.state.password} onChange={this.handleChange} required></input>
                         <label>Password</label>
                    </div>

                    <div class="pass12">
                        <input type="password" class="password" name="cpassword" value={this.state.cpassword} onChange={this.handleChange} required></input>
                         <label>Confirm</label>
                    </div>
                    
                    <a href="" class="line3">Use 8 more characters with a mix of letters, number and Symbols</a>
                    <a href="" class="line4">Sign in instead</a>
                    <input type="submit" onClick={this.handleRegister} class="submit" value="next"></input>
                    <img src={logo1} class="logo1"></img>
                </div>
             </div> )
    }
}
export default Login