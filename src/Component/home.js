import React, { Component } from "react";
import Responsive from 'react-responsive-decorator';
import Popup from "reactjs-popup";
import axios from 'axios';
import './home.css'
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
     email:''
   }
  }  

  onChange = (e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
}
  Handlesubmit =(e)=>{
    e.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      phone:this.state.phone,
      job:this.state.job,
      question:this.state.question

    };

    axios.get(`http://localhost:8080/addpopup/`+ this.state.firstname +'/' + this.state.lastname + '/' + this.state.email + '/' + this.state.phone  + '/' + this.state.job + '/'+ this.state.question )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }  
  demo =()=>{
	  return(
		<a href="#service" className="learn_more2">Request a Demo</a>
	  )
  }

 render(){
   return(
    <div >  
    
	<div id="top_content" className="top_cont_outer">
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
 		<div  className="top_cont_inner" >
			<div className="container">
				<div className="top_content">

					<div className="row">
					
						<div className="col-lg-5 col-sm-12">
							<div className="top_left_cont flipInY abc wow animated">
								<h3>Automated Anamoly Detection</h3>
								<h2>Intelligent<br>
								</br> Data Inspection</h2>
								<p> Automated Monitering and Error Detection<br></br>
								in Data Warehouse using Arificial Intelligence </p>
                <a href="#" className="learn_more2" data-toggle="modal" data-target="#exampleModalCenter">Request a Demo</a> 
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Request a Demo
</button> */}
								{/* <div id = 'pop1'>
	<Popup trigger={ this.demo()} position="center center" arrow={false} contentStyle={{width:'34%'}} className='foo'  modal repositionOnResize={true} >
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
      </Popup></div> */}
	
								{/* <a href="#service" className="learn_more2">Request a Demo</a> </div> */}
					</div>	</div>
						<div className="col-lg-1 col-sm-12">
          
            {/* <h2> <img src="img/Group.png"  alt="image" /></h2> */}

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  		
  </div>
      
   )
 }
}



export default Responsive(App);