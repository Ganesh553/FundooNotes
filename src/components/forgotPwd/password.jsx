import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import './password.scss'
import UserService from "../../service/userService";
const user = new UserService();


class Password extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:''
        }
    }
    handleChange=(e)=>{
        console.log("on change calling", e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    handleReset = (e) =>{
        console.log("calling handle")
        let data = {
            email:this.state.email
        }
        console.log(data)
        user.reset(data).then((response) =>{
            console.log(" Response is successfull", response);
        }).catch((error)=>{
            console.log("error", error);
        })
    }

    render(){
        return(<div>
            <div className="container-body2">
                <div class="box1"><Typography className="app_name" variant="h5" color="textSecondary">
                <span style={{ color: "#0606f8" }}>F</span>
                <span style={{ color: "#d10303" }}>u</span>
                <span style={{ color: "#f0b000" }}>n</span>
                <span style={{ color: "#0606f8" }}>d</span>
                <span style={{ color: "green" }}>o</span>
                <span style={{ color: "#d10303" }}>o</span>
                </Typography></div>
                <div className="sign"><h4>Find Your password</h4></div>
                <div className="form">
                    <Form.Group controlId="formBasicEmail">
                        <TextField
                            name="email"
                            id="outlined-textarea"
                            label="Email"
                            placeholder=""
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button className="but" variant="primary" onClick={this.handleReset} type="submit">
                        Next
                    </Button>
                </div>
            </div>
        </div>)      
    }
}
export default Password