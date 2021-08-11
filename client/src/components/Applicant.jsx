import React from 'react';
import './index.css';
import Form from './Form';
export default class Applicant extends React.Component 
{
    speed()
          {
            alert("Your slot for Vaccination has been booked Successfully !");
          }

    render(){
    return (
    <div style={{fontFamily:"Courier New"}}>
        <br/>
        <ul>
            <li style={{float:"left",fontSize:"18px",fontFamily:"ComicSans", backgroundColor:"rgb(0, 0, 148)"}}>
                    <a href="/" onClick="/" method="POST" target="_self">Home</a></li>
            <li><a class="active" style={{fontSize:"18px",fontFamily:"ComicSans"}} href="/applicant">Profile</a></li>
        </ul>

        <h1 class="webkit" style={{color: "dodgerblue",textAlign:"center",fontSize:"5rem",margin:0}}>
        Applicant's Dashboard</h1>
        <hr style={{width: "90%", backgroundColor:"dodgerblue",height: "8px",borderRadius:"10px"}}/>
        <header class="enter" style={{paddingLeft:"8",color: "rgb(11, 11, 129)"}}>
            Easily Manage your Profile from a Powerful Dashboard!</header><br/>
        <section class="searchtext"><b>Search Vaccination data for any country :</b></section>
        <div class="bar">
        <a href={"http://integratedonlineedigitallibraryact.s3.amazonaws.com/"}>
            <input class="searchbar" type="text" title="Search" 
            placeholder="Search Vaccine data of any Country!"/>
                <img class="voice" alt="Google mic"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
                title="Search by Voice"/>
            </a>
        </div>
        <br/>
        <section class="searchtext"><b>Live World Covid Vaccine Statistics:</b></section>
        <iframe title="worldvaccinemap" style={{width: "95%", height: "600px",border:"none",margin:"auto",paddingLeft:"40px",paddimgTop:"10px",paddingRight:"40px"}}
        src="https://ourworldindata.org/grapher/covid-vaccination-doses-per-capita?tab=map&time=latest"/>
        <hr style={{width: "90%", backgroundColor:"limegreen",height: "10px",borderRadius:"10px",marginBottom: "2rem"}}/>
        <p class="enter" style={{textAlign:"center",margin:"auto"}}>Please Apply below for your Vaccine Slot :</p>
        <br/>
    
        <Form/>
        <iframe title="graph" src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&facet=none&pickerSort=asc&pickerMetric=location&Metric=People+vaccinated+%28by+dose%29&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=OWID_WRL~IND~USA~IDN~NGA~RUS~MEX~JPN~PHL~EGY~VNM~TUR~IRN~DEU~THA~GBR~FRA~ITA~ZAF~KEN~KOR~ESP~ARG~SDN~UKR~IRQ~AFG~CAN~SAU~UZB~PER~AGO~MYS~MOZ~GHA&hideControls=true"
         style={{width: "100%", height: "600px", border: "0px none",margin:"auto"}}/>
        <section class="searchtext"><b>Live World Graph Data:</b></section>
        <iframe src="https://ourworldindata.org/explorers/coronavirus-data-explorer?yScale=log&zoomToSelection=true&facet=none&hideControls=true&Metric=Confirmed+cases&Interval=Cumulative&Relative+to+Population=false&Align+outbreaks=true&country=USA~ESP~ITA~KOR~TWN~GBR~NOR"
    title="graph" style={{width: "100%", height: "600px", border: "0px none",margin:"auto"}}/> 
        <hr style={{width: "90%", backgroundColor:"dodgerblue",height: "10px",borderRadius:"10px",marginBottom: "2rem"}}/>
    </div>
    );
}
}

