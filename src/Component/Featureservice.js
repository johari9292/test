


import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Responsive from 'react-responsive-decorator';

import {  Navbar,  NavbarBrand, Nav,NavItem,NavLink,Container} from 'reactstrap';
// import { Button } from 'reactstrap';

class  App extends React.Component{
  constructor() {
    super();
   
  }  

 render(){
   return(
     
     <div id="featured-services">
     <div className="container">
       <div className="row">
         <div className="col-lg-3 box">
           <i className="fas fa-traffic-light" />
           <h4 className="title"><a href>FORECAST</a></h4>
           <p className="description">Automated training of advanced machine learning models that identify patterns in the data<br></br>
           Minimal footprint because only key statistics of the data are analyzed</p>
         </div>
         <div className="col-lg-3 box box-bg">
           <i className="fas fa-traffic-light" />
           <h4 className="title"><a href>TRAFFIC LIGHT SYSTEM</a></h4>
           <p className="description">Self-adjusting assessment system for data quality</p>
         </div>
         <div className="col-lg-3 box">
           <i className="fas fa-traffic-light" />
           <h4 className="title"><a href>PLATFORMS</a></h4>
           <p className="description">Supported Data Sources: Teradata, Oracle, MS SQL Server, PostgreSQL, Flat File<br></br>
           Supported OS: Windows, Linux / Unix, MacOS</p>
         </div>
         <div className="col-lg-3 box box-bg">
           <i className="fas fa-traffic-light" />
           <h4 className="title"><a href>USER INTERFACE</a></h4>
           <p className="description">Graphical user interface for ad-hoc analysis<br></br>
           Command Line Interface for integration into daily workflow</p>
         </div>
       </div>
     </div>
   </div>
      
       
   )
 }
}



export default Responsive(App);