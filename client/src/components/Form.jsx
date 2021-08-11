import React, { Component } from 'react'
import './index.css';
import ThankYou from './ThankYou';
export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name : "",
            vid :  "" ,
            address :  "" ,
            city :  "" ,
            state :  "" ,
            pincode :  "" ,
            phone : "" ,
            email : ""         
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    handleSubmit(){

    }
    render() {
        return (
            <div class="card2" style={{backgroundColor:"white"}}>
                <form class="formpow" target='_blank' onSubmit='/thankyou'>
                    <h1 style={{textAlign:"center",paddingTop:"20px"}}>Apply for Mobile Vaccination</h1>
                    <hr style={{width: "100%", backgroundColor:"red",
                    height: "10px",borderRadius:"10px",marginBottom: "2rem"}}/>
                    <div style={{padding:"8px"}}>

                    <label class="formtag" >Name :</label>
                    <input class= "formsitem"type="text" name="name" 
                        value={this.state.name} onChange={this.handleInputChange} required/>
                    </div>
                    <div style={{padding:"8px"}}>
                        <select class="formtag" style={{height:"30px"}} name="aadhar">
                            <option value="aadhar">Aadhar Card</option>
                            <option value="pan">PAN Card</option>
                            <option value="voter">Voter's Card</option>
                            <option value="pan">Driving License</option>
                        </select>
                    
                    <input class= "formsitem"type="text" name="vid" 
                        value={this.state.vid} onChange={this.handleInputChange} required/>
                    </div>

                    <div style={{padding:"8px"}}>
                    <label class="formtag" >Address :</label>
                    <input class= "formsitem"type="text" name="address" 
                        value={this.state.address} onChange={this.handleInputChange} required/>
                    </div>

                    <div style={{padding:"8px"}}>
                    <label class="formtag" >City :</label>
                    <input class= "formsitem"type="text" name="city" 
                        value={this.state.city} onChange={this.handleInputChange} required/>
                    </div>
                    <div style={{padding:"8px"}}>
                    <label class="formtag" >State :</label>
                    <input class= "formsitem"type="text" name="state" 
                        value={this.state.state} onChange={this.handleInputChange} required/>
                    </div>
                    <div style={{padding:"8px"}}>
                    <label class="formtag" >Pincode :</label>
                    <input class= "formsitem"type="number" name="pincode" 
                        value={this.state.pincode} onChange={this.handleInputChange} required/>
                    </div>
                    <div style={{padding:"8px"}}>
                    <label class="formtag" >Contact Number :</label>
                    <input class= "formsitem"type="number" name="phone" 
                        value={this.state.phone} onChange={this.handleInputChange} required/>
                    </div>
                    <div style={{padding:"8px"}}>
                    <label class="formtag" >Email ID :</label>
                    <input class= "formsitem"type="email" name="email" 
                        value={this.state.email} onChange={this.handleInputChange} required/>
                    </div>
                    <div style={{padding:"8px"}}>
                        <a href="/thankyou"><input class="submitapplicant" type="Submit" name="Submit" onClick="https://localhost:3000/thankyou" /></a>
                        
                    </div>

                    <br/>
                </form>
            </div>
        )
    }
}
