import React, { Component } from "react";
import Responsive from 'react-responsive-decorator';
import Popup from "reactjs-popup";
import axios from 'axios';
import './about.css'
import { Col, Button,Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class  App extends React.Component{
  constructor() {
    super();
   this.state={
     firstname:'',
     lastname:'',
     phone:'',
     job:'',
     question:'',
     email:'',
     emailsub:'',
     name:''
   }
  }  

  onChange = (e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
}
onsubmit = (e)=>{
  e.preventDefault();
  axios.get(`http://localhost:8080/addnewsletter/`+this.state.name +'/' + this.state.emailsub)
}
  Handlesubmit =(e)=>{
    e.preventDefault();

 

    axios.get(`http://localhost:8080/addpopup/`+ this.state.firstname +'/' + this.state.lastname + '/' + this.state.email + '/' + this.state.phone  + '/' + this.state.job + '/'+ this.state.question )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  } 

 render(){
   return(
     <div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" id='modal1'>
     
      <div class="modal-body">
      <Form id = "form1"><h2 style={{textAlign:"center"}}>Intelligent Data Inspection</h2>
    <p style={{textAlign:"center", color:"blue"}}>Just answer a few  simple questions<br></br> so we can personalize the right experience for you </p>
        <br></br>
          <Row form>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1'  for="exampleEmail">First name</Label>
                <Input onChange={this.onChange} type="text" name="firstname" id="exampleEmail" placeholder="Enter your first name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Last name</Label>
                <Input onChange={this.onChange}  type="text" name="lastname" id="exampjlePassword" placeholder="Enter your last name" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
          <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Business email</Label>
                <Input onChange={this.onChange}  type="email" name="email" id="examplejPassword" placeholder="Enter you business email" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Phone number</Label>
                <Input onChange={this.onChange}  type="text" name="phone" id="examplekPassword" placeholder="+54-545-3617-3451" />
              </FormGroup>
            </Col>
            </Row><Row>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Job title</Label>
                <Input onChange={this.onChange}  type="text" name="job" id="examplelPassword" placeholder="Enter your job title" />
              </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col md={11}>
          <FormGroup style={{width:'100%'}} id="formgroup">
            <Label id='label1' for="exampleAddress2">What would you be using DIGNA for?</Label>
            <Input onChange={this.onChange} type="text" name="question" id="exampleAddress2" placeholder=""/>
          </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={11}>
          <Button style={{width:'100%'}} onClick={this.Handlesubmit} color='primary' id="formgroup">Request a Demo</Button>
          </Col>
          </Row>
        </Form>
      </div>
      
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" id='modal2'>
      
      <div class="modal-body">
      <Form id = "form1"><h2 style={{textAlign:"center"}}> <img src="img/icons8-year_of_monkey.png"  alt="image" /> <br></br>Get Our Newsletter</h2>
    <p style={{textAlign:"center", color:"blue"}}> Want latest and greatest from our team striaght to your inbox?<br></br>
    chuck us your details and get a sweet weekly email </p>
        <br></br>
          <Row form>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1'  for="exampleEmail">Full name</Label>
                <Input type="text" onChange={this.onChange} name="name" id="exampleEmail" placeholder="Enter your  name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Business email</Label>
                <Input type="email" onChange={this.onChange} name="emailsub" id="examplePassword" placeholder="Enter your Email" />
              </FormGroup>
            </Col>
          </Row>
          
          
          <Row>
          <Col md={11}>
          <Button onClick={this.onsubmit} style={{width:'100%'}} color='primary' id="formgroup">Subscribe</Button>
          </Col>
          </Row>
        </Form>
   
      </div>
      
    </div>
  </div>
</div>
    <div id="top_content" className="top_cont_outer bgcolor">
		<div id ="bk" className="top_cont_inner1">
			<div className="container">
				<div className="top_content">
					<div className="row">
						<div className="col-lg-5 col-sm-12">
							<div className="top_left_cont flipInY wow animated">
								{/* <h3>Automated Anamoly Detection</h3> */}
								<h2>About/ <img src="img/Header.png"  alt="image" /></h2>
                
								<p> Data quality issues are frequently caused by corrupted data delivery and unaligned
changes or releases in source system. In many cases, the negative impact of these
issues becomes only visible in the final report often undiscovered until data reports
are published. </p>
								</div>
						</div>
						<div className="col-lg-5 col-sm-12 is1" > <br></br></div>
					</div>
				</div>
			</div>
		</div>
    
  <div className="pattren" >
  <div>
          <div id="about"  >
        <div className=" pattren container">
       
          <div className="row about-cols" id="col1">
            <div className="col-lg-4 col-sm-10 col-md-8   wow fadeInUp">
              <div className="about-col">
                <div className="img">
					
                  <img src="img/Anomaly detection.png" alt=" Mission"  className="img-fluid icon" />
                 
                  {/* <div className="icon"><i className="ion-ios-eye-outline" /></div> */}
                  <br></br>
                </div>
                <br></br> <br></br> <br></br>
                <h2 className="title">Anamoly<br></br> detection
for  data<br></br> warehouses</h2>
                <p>
                Data quality issues are frequently caused by corrupted data delivery and unaligned
changes or releases in source system. In many cases, the negative impact of these
issues becomes only visible in the final report often undiscovered until data reports
are published.<br></br> <br></br> <br></br>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10 col-md-8   wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
			
                  <img src="img/Benefits.png" alt="" className="img-fluid icon" />
                  {/* <div className="icon"><i className="ion-ios-eye-outline" /></div> */}
                  <br></br>
                </div><br></br> <br></br> <br></br>
                <h2 className="title">Highly verisatile<br></br>
with minimal<br></br>maintenance</h2>
                <p>
                DIGNA can be used in many places (layers) in a Data Warehouse: it can check incoming data, validate
data after the load and even identify anomalies in reports you deliver to your users. DIGNA comes with a
GUI - Client for ad-hoc analysis and a command line interface for integration in an ETL process. <br></br><br></br>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10 col-md-8  wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-col">
                <div className="img">
			
                  <img src="img/Minimal maintenance.png" alt="vision" className="img-fluid icon" />
                  {/* <div className="icon"><i className="ion-ios-eye-outline" /></div> */}
                  <br></br>
                </div><br></br> <br></br> <br></br>
                <h2 className="title">Benefits of <br></br>
 using DIGNA</h2>
<br></br>
                <p>
                Human-based monitoring is expensive, error-prone and infeasible in a large
DWH. DIGNA will learn all patterns in your data and inform you about suspicious
deviations and optionally, interact with the data warehouse refreshing/publishing
processes. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* #about */}
     
	  </div>



  </div>
	</div>
 <div style={{ 'background':'black'
    }}>>
  <div className="container"  style={{'max-width':"920px", 'background':'black','margin-top':'5%','padding-bottom':'5%'
    }}>
    <div className="row"  >
    <div className='col-lg-4 col-sm-12 col-md-8'  style={{'align-self':'center','margin-top':'5%',"margin":"0 auto",'padding-bottom':'5%'
    }} id="last11">
      Powered by <img src="img/dexti.png"  alt="image" />
     
    </div>
    <div  className='col-lg-4 col-sm-12 col-md-8' id="abt2" style={{'align-self':'center','margin-top':'5%',"margin":" auto",'padding-bottom':'5%'
    }} id='last23'>
    
    <a href="#" className="last2" data-toggle="modal" data-target="#exampleModalCenter">Request a Demo</a> 

    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Request a Demo
</button> */}
    </div>
    <div  className='col-lg-4 col-sm-12 col-md-8' id="abt3" style={{'align-self':'center','margin-top':'5%',"margin":"0 auto",'padding-bottom':'5%'
    }} id='last33'>
     <a href="#service" className="last3" data-toggle="modal" data-target="#exampleModalCenter1">Subscribe Newsletter</a>

    </div>
	
    </div>
</div>
</div>
  </div>

       
   )
 }
}



export default Responsive(App);