import React,{Component} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.handleLogin = this.handleLogin.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });}
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
          }
          handleLogin(event) {
            this.toggleModal();
            alert("Username: " + this.username.value + " Password: " + this.password.value
                + " Remember: " + this.remember.checked);
            event.preventDefault();
    
        }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' style={{height:"5%", width:"3%", marginLeft:"0"}} alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Nav className="ml-auto" navbar>
                             
                                    <Button outline onClick={this.toggleModal} style={{padding:"1%",float:"right",marginRight:"5%"}}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                
                            </Nav>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                   
                            <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                       
                                <NavLink className="nav-link"  to='/home' style={{color:"white",display:"inline-block",padding:"1%",float:"auto",margin:"1%",textDecoration:"none"}}><span className="fa fa-home fa-lg"></span> Home</NavLink>
                           
                            
                                <NavLink className="nav-link" to='/aboutus' style={{color:"white",display:"inline-block",padding:"1%",float:"auto",margin:"1%",textDecoration:"none"}}><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            
                           
                                <NavLink className="nav-link"  to='/menu' style={{color:"white",display:"inline-block",padding:"1%",float:"auto",margin:"1%",textDecoration:"none"}}><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            
                                <NavLink className="nav-link" to='/contactus' style={{color:"white",display:"inline-block",padding:"1%",float:"auto",margin:"1%",textDecoration:"none"}}><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                           
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron style={{margin:"0px"}}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default Header;