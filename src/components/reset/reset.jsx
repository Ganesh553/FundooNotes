import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import './reset.scss'
import UserService from "../../service/userService";
const user = new UserService();

class Reset extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            password:'',
        }
    }
    handleChange=(e)=>{
        console.log("on change calling", e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    handle = (e) =>{
        console.log("calling handle")
        let data = {
            newPassword:this.state.password
        }
        const token = this.props.match.params.token
        console.log(data)
        console.log(token)
        user.resetpassword(data, token).then((response) =>{
            console.log(" Response is successfull", response);
        }).catch((error)=>{
            console.log("error", error);
        })
    }
    render(){
        return(<div>
            <div className="container-body3">
                <div class="box2"><Typography className="app_name" variant="h5" color="textSecondary">
                <span style={{ color: "#0606f8" }}>F</span>
                <span style={{ color: "#d10303" }}>u</span>
                <span style={{ color: "#f0b000" }}>n</span>
                <span style={{ color: "#0606f8" }}>d</span>
                <span style={{ color: "green" }}>o</span>
                <span style={{ color: "#d10303" }}>o</span>
                </Typography></div>
                <div className="sign1"><h4>Find Your password</h4></div>
                <div className="form1">
                    <Form.Group controlId="formBasicEmail">
                        <TextField
                            name="password"
                            id="outlined-textarea"
                            label="password"
                            placeholder="New password"
                            variant="outlined"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button className="but1" variant="primary" onClick={this.handle} type="submit">
                        Next
                    </Button>
                </div>
            </div>
        </div>)      
    }
}
export default Reset