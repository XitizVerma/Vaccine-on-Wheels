import React from "react";
import './index.css';
class Doctor extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
      render() {
        return (
        <div>
        <div style={{fontFamily: "Courier New"}}>
            <h1 style={{color: "rgb(3, 5, 141)", textAlign:"center",fontSize:"6rem",margin:0}}>
                Doctor Portal</h1>
            <hr style={{width: "90%", backgroundColor:"rgb(0, 22, 119)",height: "8px",borderRadius:"10px"}}/>
            <h1 class="webkit" style={{color: "rgb(0, 200, 250)",textAlign:"center",fontSize:"3rem",marginTop:0}}>
                Vaccinator Dashboard</h1>
            <header class="enter" style={{float:"left",paddingLeft:"8%",color:"rgb(11, 11, 129)"}}>
                Easily Manage Vaccinators in any Area from a Powerful Dashboard!</header><br/>
            <p class="enter" >Checklist the people that have been vaccinated:</p>
            <p style={{fontSize:"40px",backgroundColor:"black",width:"20%",margin:"auto"}}>
                <a style={{color:"white"}}
                href="https://cloud.mongodb.com/v2/5fc80dde06836250d026daa7#metrics/replicaSet/610805a753c59248ce3ce3d6/explorer/testDB/notes/find">Click Me</a>
            </p>
            </div>
        </div>
    )
}
}
export default Doctor;
