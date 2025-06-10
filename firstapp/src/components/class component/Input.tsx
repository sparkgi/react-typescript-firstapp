// State update with user input value
// e ----> event
// e.target.name         e.target.value

import React, {Component} from "react";

interface Test
{
    nm: string,
    em: string,
    ag: number
}

export default class Input extends Component
{
    state:Test={nm:" ",em:" ",ag:0};

    valupd=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }


    render(){
        return(
            <>
            <div className="form-group">Enter Name:
            <input type="text" name="nm" placeholder="Type your name here" onChange={this.valupd} />
            <br /><br />
            Enter Email:
            <input type="email" placeholder="Type your email here" name="em" onChange={this.valupd} />
            <br /><br />
            Enter Age:
            <input type="number" placeholder="Type your age here" name="ag" onChange={this.valupd} />
            <br /><br /></div>
            <ol>
                <li>Name: {this.state.nm} </li>
                <li>Email: {this.state.em} </li>
                <li>Age: {this.state.ag} </li>
            </ol>
            </>
        )
    }
}
