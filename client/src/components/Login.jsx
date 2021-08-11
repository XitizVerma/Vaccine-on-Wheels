import React from 'react'
import './index.css';
export default class Login extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            uid:"",
            pass:"",
            check:""
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    handleInputChange(event){
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    onValueChange(event) {
        this.setState({
          check: event.target.value
        });
      }
    handleSubmit(event){
        event.preventDefault();
        var uid=this.state.uid;
        var pass=this.state.pass;
        var check=this.state.check;
        var win;
        if (uid ==="XITIZ")
        {
            if (pass==="12345678") 
            {
                if(check==="tlogin")
                {
                    win = window.open('/doctor', '_self');
                    win.focus();
                }
                else if (check==="slogin")
                {
                    win = window.open('/applicant', '_self');
                    win.focus();
                }
            }      
        }
        else
            alert("UID and Password do not match.Please try again!");
    }
    render(){
    return (
    <div style={{backgroundImage:`url('${process.env.PUBLIC_URL}/images/password.jpg')`,
            backgroundRepeat: "no-repeat",backgroundAttachment: "fixed",textAlign: "center",
            backgroundSize:"cover"}}>
        <header class="headerLogin">
            Login 
        </header>
        <div class="card">
            <form target="_self" onSubmit={this.handleSubmit}  method="GET">
                <label class="items" >Unique Access Number:</label>
                <input class= "loginin"type="text" name="uid" 
                    value={this.state.uid} onChange={this.handleInputChange} required/>
                <br/>
                <label class="items" >Password:</label><br/>
                <input class="loginin" type="password" name ="pass"
                    value={this.state.pass} onChange={this.handleInputChange} required/>
                <br/>
                <input type="radio" name="check" value="tlogin" 
                    checked={this.state.check === "tlogin"}
                    onChange={this.onValueChange} required/>
                <label for="tlogin">Doctor's Login</label>
                <br/>
                <input type="radio" name="check" value="slogin" 
                    checked={this.state.check === "slogin"}
                    onChange={this.onValueChange}/>
                <label for="slogin">Vaccine Applicant's Login</label>
                <br/>
                <input class="loginsubmit" type="submit" value="Submit"/>
            </form>
        </div>
        <footer style={{padding:"6%"}}>
        </footer>
    </div>
    )
}
}