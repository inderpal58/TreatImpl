import React from "react";
import {render} from "react-dom";
import { Button } from 'react-bootstrap';
import { ButtonToolbar  } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Center from 'react-center';
import FacebookLogin from 'react-facebook-login';

const TooltipInnerStyle = {
   background: '#0066cc',
   padding:'100px'
};

const Margin ={
    margin: '0px 5px 5px 5px'
};

const Width ={
    width: '300px'
};

const responseFacebook = (response) => {
  console.log(response);
}

class Treat extends React.Component{
    
    constructor(props, context) {
        super(props, context);
        this.SignIn = this.SignIn.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.FacebookClicked = this.FacebookClicked.bind(this);
        this.ForgotPassword = this.ForgotPassword.bind(this);
        this.ResetPassword = this.ResetPassword.bind(this);
        this.BackToLogin = this.BackToLogin.bind(this);

        this.state = {SignIn: false, SignUp:false, ResetPassword: false};
    }

    ResetPassword()
    {

    }

    BackToLogin()
    {
        this.setState({ResetPassword: false});
        this.setState({SignUp: false});
        this.setState({SignIn: false});
    }

    SignIn()
    {
        this.setState({SignIn: true});
    }

    SignUp()
    {
        this.setState({SignUp: true});
    }

    FacebookClicked()
    {
        console.log("Facebook Clicked");
    }

    ForgotPassword()
    {
        this.setState({ResetPassword: true});
    }

    render(){
        if(this.state.SignIn == false  && this.state.SignUp == false)
        {
            return (
            <div style={TooltipInnerStyle} className="content-wrapper"  >    
                <div className="row text-center " >
                    <Image width={128} height={128}/>
                </div> 
                <div className="row text-center" >
                    <h1>Our Treat</h1>
                </div>          
                <div className="row text-center">                
                            <Button style={Margin} bsStyle="primary" onClick={this.SignIn}> Sign In </Button>     
                            <Button style={Margin} bsStyle="primary" onClick={this.SignUp}> Sign Up</Button>                                   
                </div>
            </div>
            );
        }
        else if(this.state.ResetPassword){
            return (
            <div style={TooltipInnerStyle} className="content-wrapper"  >    
                <div className="row text-center " >
                    <Image width={128} height={128}/>
                </div> 
                <div className="row text-center" >
                    <h1>Our Treat</h1>
                </div> 
                 <div className="row text-center" >
                    <h1>Reset Your Password</h1>
                </div> 
                 <Center>  
                     <FormGroup style={Width}>
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.Username}
                            placeholder="Username"
                            onChange={this.handleChange}
                        />
                      
                        <div style={Margin} className="row text-center" >
                            <h onClick={this.BackToLogin}>Back To Login Page</h>
                        </div> 
                    </FormGroup>  
                </Center>    
                   
                <div className="row text-center">                
                            <Button style={Margin} bsStyle="primary" onClick={this.ResetPassword}> Reset </Button>     
                </div>
                
            </div>
            );
        }
        else if(this.state.SignIn){
            return (
            <div style={TooltipInnerStyle} className="content-wrapper"  >    
                <div className="row text-center " >
                    <Image width={128} height={128}/>
                </div> 
                <div className="row text-center" >
                    <h1>Our Treat</h1>
                </div> 
                <Center>  
                    <div style={Margin}>
                        
                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={this.FacebookClicked}
                                callback={responseFacebook} />                   
                    </div>
                </Center> 
                 <div className="row text-center" >
                    <h>--- or ---</h>
                </div> 
                 <Center>  
                     <FormGroup style={Width}>
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.Username}
                            placeholder="Username"
                            onChange={this.handleChange}
                        />
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.Password}
                            placeholder="password"
                            onChange={this.handleChange}
                        />
                        <div style={Margin} className="row text-center" >
                            <h onClick={this.ForgotPassword}>Forgot Password?</h>
                        </div> 
                    </FormGroup>  
                </Center>    
                   
                <div className="row text-center">                
                            <Button style={Margin} bsStyle="primary" onClick={this.SignIn}> LogIn </Button>     
                </div>
                
            </div>
            );
        }
        else if(this.state.SignUp){
            return (
            <div style={TooltipInnerStyle} className="content-wrapper"  >    
                <div className="row text-center " >
                    <Image width={128} height={128}/>
                </div> 
                <div className="row text-center" >
                    <h1>Our Treat</h1>
                </div>           
                       <Center>  
                    <div style={Margin}>
                        
                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={this.FacebookClicked}
                                callback={responseFacebook} />                   
                    </div>
                </Center> 
                 <div className="row text-center" >
                    <h>--- or ---</h>
                </div> 
                 <Center>  
                     <FormGroup style={Width}>
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.Firstname}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.Lastname}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.Username}
                            placeholder="Username"
                            onChange={this.handleChange}
                        />
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.Email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <FormControl
                            style={Margin}
                            type="text"
                            value={this.state.PAssword}
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                    </FormGroup>  
                </Center>    
                   
                <div className="row text-center">                
                            <Button style={Margin} bsStyle="primary" onClick={this.SignIn}> Submit </Button>     
                </div>
         
                
            </div>
            );
        }
        

        
    }
}

render(<Treat/>, window.document.getElementById("treat"));