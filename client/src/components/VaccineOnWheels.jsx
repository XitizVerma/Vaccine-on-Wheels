import React from 'react';
import './index.css';
class VaccineOnWheels extends React.Component {
    render(){
    return (
        <div>
            <div class="navbar">
                <ul> 
                    <li style={{float:"left", backgroundColor:"rgb(0, 0, 148)"}}>
                    <a href="/login" onClick="/login" method="POST" target="_blank">Sign In</a></li>
                    <li><a href="#videos">Contact Us</a></li>
                    <li><a href="#ebooks">Support</a></li>
                    <li><a href="#magazines">Resources</a></li>
                    <li><a href="#books">Services</a></li>
                    <li><a href=
                    {"https://www.google.com/search?q=cowin+vaccination+news&sxsrf=ALeKk01akqcEGiMBF4btnp5Qr4FCXaZOlg:1628440129860&source=lnms&tbm=nws&sa=X&ved=2ahUKEwi_qemb7KHyAhVy73MBHfsiDlYQ_AUoAXoECAEQAw&biw=1280&bih=569"}>
                    News</a></li>
                    <li><a class="active" href="/">Home</a></li>
                </ul>
            </div>

           <div class="pad">
            <div >
                <img src="./images/icon.png" alt="vaccine" style={{float:"left",width:"7%",paddingLeft:"20%"}}/>
                <h1 style={{color:"rgb(0, 22, 119)",width:"50%",float:"left",
                fontSize:"4rem",textAlign: "center",padding:0,margin:0}}>
                Vaccine On Wheels
                </h1> 
            </div>
            <br/>
            <hr style={{width: "90%", backgroundColor:"rgb(0, 22, 119)",height: "10px",borderRadius:"10px"}}/>

            <section class="searchtext">Search Vaccination data for any country :</section>
            
            <div class="bar">
                <a href={"http://integratedonlineedigitallibraryact.s3.amazonaws.com/"}> 
                <input class="searchbar" type="text" title="Search" placeholder="Search Vaccine data of any Country!"/>
                <img class="voice" alt ="google mic"  
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"}
                title={"Search by Voice"}/>
                </a>
            </div>
            <br/>

            <img alt="UI" src="./images/howto.png" style={{width: "100%",paddingBottom: "1em"}}/>
            <section class="searchtext"><b>Live World Covid Vaccine Statistics:</b></section>
        <iframe title="worldvaccinemap" style={{width: "95%", height: "600px",border:"none",margin:"auto",paddingLeft:"40px",paddimgTop:"10px",paddingRight:"40px"}}
        src="https://ourworldindata.org/grapher/covid-vaccination-doses-per-capita?tab=map&time=latest"/>
            <img alt="UI" src="./images/dashboard c1.png" style={{width: "100%",paddingBottom: "1em"}}/>
            <img alt="UI" src="./images/dashboard c2.png" style={{width: "100%",paddingBottom: "1em"}}/>
            <img alt="UI" src="./images/VD Data.png" style={{width: "100%",paddingBottom: "1em"}}/>
            <br/>
            <img alt="UI" src="./images/faqs.png" style={{width: "100%",paddingBottom: "1em"}}/>

            <section class="searchtext">Trending Articles:</section><br/>
            
            <div style={{width: "100%",margin:"auto"}}>
                <div class="gallery">
                    <a target="_blank" rel="noreferrer"
                    href={"https://main.mohfw.gov.in/help"}>
                        <img alt="ML" src="./images/help.png" width="30%" height="400"/>
                    </a>
                    <div class="desc">How can we help you?</div>
                </div>
                
                <div class="gallery">
                    <a target="_blank" rel="noreferrer"
                    href={"hhttps://www.google.com/maps/search/vaccination+map+nearest/@12.9096843,77.5734042,15z/data=!3m1!4b1"}>
                        <img alt="DevOps" src="./images/center.jpg" width="30%" height="400"/>
                    </a>
                    <div class="desc">View Nearest Vaccine Centers</div>
                </div>
            
                <div class="gallery">
                    <a target="_blank" rel="noreferrer"
                    href="/login">
                        <img alt="DSCE" src="./images/certificate.jpeg" width="30%" height="400"/>
                    </a>
                    <div class="desc">Get your Certification</div>
                </div>
            </div>
            <br/>
            <div class="space">
                <hr style={{width: "90%", backgroundColor:"red",height: "10px",borderRadius:"10px",marginBottom: "2rem"}}/>
            </div>
           </div>
   
        </div>
    );
}
}
export default VaccineOnWheels;