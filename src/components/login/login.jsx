import React from "react";
import { Form, Button, Input, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import './login.scss'
import UserService from "../../service/userService";
const user = new UserService();


class Register extends React.Component{

        constructor(props){
            super(props)
            this.state = {
                mail:'',
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
                mail:this.state.mail,
                password:this.state.password
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
                    <Form className="App">
                        <h2>
                        <mark class="F">F</mark>
                        <mark class="u">u</mark>
                        <mark class="n">n</mark>
                        <mark class="d">d</mark>
                        <mark class="o1">o</mark>
                        <mark class="o">o</mark>
                        </h2>
                        <h1>Sign in</h1>
                        <h5>Use your Google Account</h5>
                        <input class="email" type="email" name="mail" placeholder="Email or phone" required />
                        <h4 class="forgot">Forgot email?</h4>
                        <input class="email1" type="password" name="password" placeholder="Password" required />
                        <h4 class="forgot1">Forgot password?</h4>
                        <p>Not your computer? Use Guest mode to sign in privately.</p>
                        <h4 class="learn">Learn more</h4>
                        <h4 class="create">Create account</h4>
                        <input class="but" type="submit" onClick={this.handleRegister} value="Next"></input>
                    </Form>
                </div>
            </div>)   
    }
}
export default Register
// <Button class="But" onClick={this.handleRegister} >Next</Button>