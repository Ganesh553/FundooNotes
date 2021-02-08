import React from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import './password.scss'
import UserService from "../../service/userService";
const user = new UserService();


class Password extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            password:'',
            ConfirmPassword:''
        }
    }
    handleChange=(e)=>{
        console.log("on change calling", e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    handleRegister = (e) =>{
        console.log("calling handle")
        let data = {
            password:this.state.password,
            ConfirmPassword:this.state.ConfirmPassword
        }
        console.log(data)
        user.registration(data).then((response) =>{
            console.log(" Response is successfull", response);
        }).catch((error)=>{
            console.log("error", error);
        })
    }

    render(){
        return(<div>
                <div class="main">
                    <Form className="App1">
                        <h2>
                        <mark class="F">F</mark>
                        <mark class="u">u</mark>
                        <mark class="n">n</mark>
                        <mark class="d">d</mark>
                        <mark class="o1">o</mark>
                        <mark class="o">o</mark>
                        </h2>
                    </Form>
                    <h1 class="header">Welcome</h1>
                    <input class="classPas" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
                    <input class="classPas1" type="Cpassword" name="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleChange} placeholder="Conform Password" required />
                    <h4 class="fpas">Forgot password?</h4>
                    <Button class="paspwd" onClick={this.handleRegister} type="submit" >Next</Button>
                </div>
            </div>)      
    }
}
export default Password