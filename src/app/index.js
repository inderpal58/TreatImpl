import React from "react";
import {render} from "react-dom";
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const TooltipInnerStyle = {
  padding: '10px 8px',
  backgroundColor: '#0000FF'
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
                         <ButtonGroup>
                            <Button bsStyle="primary"> Sign In </Button>     
                            <Button bsStyle="primary"> Sign Up</Button> 
                         </ButtonGroup>
                </div>
            </div>
        );
    }
}

render(<Treat/>, window.document.getElementById("treat"));