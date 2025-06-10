// State update with user input with button 

import React, {Component} from "react";

interface Test
{
    nm: string,
    em: string,
    ag: number,
    msg: string
}

export default class Details extends Component
{
    state:Test={nm:" ",em:" ",ag:0,msg:" "};
    
        valupd=(e:React.ChangeEvent<HTMLInputElement>)=>{
            this.setState({[e.target.name]:[e.target.value]})
        }

        disp=()=>{
            let r=`Name: ${this.state.nm} Email: ${this.state.em} Age: ${this.state.ag}`;
            this.setState({msg:r});
        }
    
    
        render(){
            return(
                <>
                Enter Name:
                <input type="text" name="nm" placeholder="Type your name here" onChange={this.valupd} />
                <br /><br />
                Enter Email:
                <input type="email" placeholder="Type your email here" name="em" onChange={this.valupd} />
                <br /><br />
                Enter Age:
                <input type="number" placeholder="Type your age here" name="ag" onChange={this.valupd} />
                <br /><br />
                <button onClick={this.disp}>SHOW</button>
                <br />
                <h3>{this.state.msg}</h3>
                <ol>
                    <li>Name: {this.state.nm} </li>
                    <li>Email: {this.state.em} </li>
                    <li>Age: {this.state.ag} </li>
                </ol>
                </>
            )
        }
}