import React from "react";
import {render} from "react-dom";
import { Button } from 'react-bootstrap';
import { ButtonToolbar  } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const TooltipInnerStyle = {
   background: 'red',
   padding:'100px'
};

const Margin ={
    margin: '5px 5px 5px 5px'
};

class Treat extends React.Component{
    render(){
        return (
            <div style={TooltipInnerStyle} className="content-wrapper"  >    
                <div className="row text-center " >
                    <Image width={128} height={128}/>
                </div> 
                <div className="row text-center" >
                    <h1>Our Treat</h1>
                </div>           
                <div className="row text-center">                
                            <Button style={Margin} bsStyle="primary"> Sign In </Button>     
                            <Button style={Margin} bsStyle="primary"> Sign Up</Button>                                   
                </div>
            </div>
        );
    }
}

render(<Treat/>, window.document.getElementById("treat"));