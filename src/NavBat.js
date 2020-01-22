import React, { Component } from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import {  Navbar,  NavbarBrand, Nav,NavItem,NavLink,Container} from 'reactstrap';

class NavbarPage extends Component {


render() {
  return (<div>
            <Navbar color="blue" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/"> <img src ='img/digna_logo_no_slogan.png'/>
                    </NavbarBrand>


            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  Home
                                </NavLink>

              </NavItem>
              <NavItem>
                <NavLink href="/">
                  About
                                </NavLink>

              </NavItem>
              <NavItem>
                <NavLink href="/">
                  Service
                                </NavLink>
              </NavItem>

            </Nav>


          </Container>

        </Navbar>
   
  </div>
    );
  }
}

export default NavbarPage;