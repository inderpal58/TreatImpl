import React from "react";
import { render } from "react-dom";
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Center from 'react-center';
import FacebookLogin from 'react-facebook-login';

const MarginTopBottom = {
    margin: '10px 0px 10px 0px'
};

const MarginTopRight = {
    margin: '10px 10px 0px 0px'
};

const Width = {
    width: '300px'
};

const ResponseFacebook = (response) => {
    console.log(response);
}

class LogoAndName extends React.Component {
    render() {
        return (
            <div>
                <div className="row text-center " >
                    <Image width={128} height={128} />
                </div>
                <div className="row text-center" >
                    <h1>Our Treat</h1>
                </div>
            </div>
        );
    }
}

class Treat extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.SignIn = this.SignIn.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.FacebookClicked = this.FacebookClicked.bind(this);
        this.ForgotPassword = this.ForgotPassword.bind(this);
        this.ResetPassword = this.ResetPassword.bind(this);
        this.BackToLogin = this.BackToLogin.bind(this);
        this.UsernameChange = this.UsernameChange.bind(this);
        this.PasswordChange = this.PasswordChange.bind(this);
        this.FirstnameChange = this.FirstnameChange.bind(this);
        this.Lastnamechange = this.Lastnamechange.bind(this);
        this.EmailChange = this.EmailChange.bind(this);
        this.PasswordChange = this.PasswordChange.bind(this);
        this.Submit = this.Submit.bind(this);

        this.state = {
            SignIn: false, SignUp: false, ResetPassword: false,
            UsernameValue: "", PasswordValue: "", EmailValue: "", FirstnameValue: "", LastnameValue: ""
        };
    }

    ResetPassword() {

        /*var data = {
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment
        }

        $.ajax({
            type: 'POST',
            url: '/some/url',
            data: data
        })
            .done(function (data) {
                self.clearForm()
            })
            .fail(function (jqXhr) {
                console.log('failed to register');
            });*/


    }

    BackToLogin() {
        this.setState({ ResetPassword: false });
        this.setState({ SignUp: false });
        this.setState({ SignIn: false });
    }

    SignIn() {
        this.setState({ SignIn: true });
    }

    SignUp() {
        this.setState({ SignUp: true });
    }

    FacebookClicked() {
        console.log("Facebook Clicked");
    }

    ForgotPassword() {
        this.setState({ ResetPassword: true });
    }

    UsernameChange(event) {
        this.state.UsernameValue = event.target.value;
    }

    FirstnameChange(event) {
        this.state.FirstnameValue = event.target.value;
    }

    Lastnamechange(event) {
        this.state.LastnameValue = event.target.value;
    }

    EmailChange(event) {
        this.state.EmailValue = event.target.value;
    }

    PasswordChange(event) {
        this.state.PasswordValue = event.target.value;
    }

    Submit() {
        /*var data = {
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment
        }

        $.ajax({
            type: 'POST',
            url: '/some/url',
            data: data
        })
            .done(function (data) {
                self.clearForm()
            })
            .fail(function (jqXhr) {
                console.log('failed to register');
            });*/
    }

    render() {
        if (this.state.SignIn == false && this.state.SignUp == false) {
            return (
                <div style={{ padding: '100px 0px 0px 0px'}}>
                    <LogoAndName />
                    <div className="row text-center">
                        <Button style={MarginTopRight} bsStyle="primary" onClick={this.SignIn}> Sign In </Button>
                        <Button style={MarginTopRight} bsStyle="primary" onClick={this.SignUp}> Sign Up</Button>
                    </div>
                </div>
            );
        }
        else if (this.state.ResetPassword) {
            return (
                <div style={{ padding: '100px 0px 0px 0px'}}>
                    <LogoAndName />
                    <div style={MarginTopBottom} className="row text-center" >
                        <h1>Reset Your Password</h1>
                    </div>
                    <Center>
                        <FormGroup style={MarginTopBottom}>
                            <FormControl
                                style={MarginTopBottom}
                                type="text"
                                value={this.state.Username}
                                placeholder="Username"
                                onChange={this.UsernameChange}
                            />

                            <div style={MarginTopBottom} className="row text-center" >
                                <h onClick={this.BackToLogin}>Back To Login Page</h>
                            </div>
                        </FormGroup>
                    </Center>

                    <div className="row text-center">
                        <Button style={MarginTopBottom} bsStyle="primary" onClick={this.ResetPassword}> Reset </Button>
                    </div>
                </div>
            );
        }
        else if (this.state.SignIn) {
            return (
                <div style={{ padding: '100px 0px 0px 0px'}}>
                    <LogoAndName />
                    <Center>
                        <div style={MarginTopBottom}>

                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={this.FacebookClicked}
                                callback={this.ResponseFacebook} />
                        </div>
                    </Center>
                    <div className="row text-center" >
                        <h>--- or ---</h>
                    </div>
                    <Center>
                        <FormGroup style={MarginTopBottom}>
                            <FormControl
                                style={MarginTopBottom}
                                type="text"
                                value={this.state.Username}
                                placeholder="Username"
                                onChange={this.UsernameChange}
                            />
                            <FormControl
                                style={MarginTopBottom}
                                type="password"
                                value={this.state.Password}
                                placeholder="password"
                                onChange={this.PasswordChange}
                            />
                            <div style={MarginTopBottom} className="row text-center" >
                                <h onClick={this.ForgotPassword}>Forgot Password?</h>
                            </div>
                        </FormGroup>
                    </Center>

                    <div className="row text-center">
                        <Button style={MarginTopBottom} bsStyle="primary" onClick={this.SignIn}> Login </Button>
                    </div>

                </div>
            );
        }
        else if (this.state.SignUp) {
            return (
                <div style={{ padding: '100px 0px 0px 0px'}}>
                    <LogoAndName />
                    <Center>
                        <div style={MarginTopBottom}>
                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={this.FacebookClicked}
                                callback={this.ResponseFacebook} />
                        </div>
                    </Center>
                    <div className="row text-center" >
                        <h>--- or ---</h>
                    </div>
                    <Center>
                        <FormGroup style={MarginTopBottom}>
                            <FormControl
                                style={MarginTopBottom}
                                type="text"
                                value={this.state.Firstname}
                                placeholder="First Name"
                                onChange={this.FirstnameChange}
                            />
                            <FormControl
                                style={MarginTopBottom}
                                type="text"
                                value={this.state.Lastname}
                                placeholder="Last Name"
                                onChange={this.Lastnamechange}
                            />
                            <FormControl
                                style={MarginTopBottom}
                                type="text"
                                value={this.state.Username}
                                placeholder="Username"
                                onChange={this.UsernameChange}
                            />
                            <FormControl
                                style={MarginTopBottom}
                                type="text"
                                value={this.state.Email}
                                placeholder="Email"
                                onChange={this.EmailChange}
                            />
                            <FormControl
                                style={MarginTopBottom}
                                type="password"
                                value={this.state.Password}
                                placeholder="Password"
                                onChange={this.PasswordChange}
                            />
                        </FormGroup>
                    </Center>

                    <div className="row text-center">
                        <Button style={MarginTopBottom} bsStyle="primary" onClick={this.Submit}> Submit </Button>
                    </div>
                </div>
            );
        }
    }
}

render(<div style={{height: screen.height,
    backgroundColor: "Blue"}} className="content-wrapper"><Treat /></div>, window.document.getElementById("treat"));