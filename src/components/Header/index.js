import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Col, Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';

const onSubmit = (data) => {
    alert(JSON.stringify(data));
};

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    return (
        <>
            <Modal isOpen={isModalOpen}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Field
                                            name="username"
                                            render={({ input, meta }) => (
                                                <>
                                                    <Label>Username</Label>
                                                    <Input invalid={meta.active && meta.error} type="text" name="username" placeholder="Username" {...input} />
                                                </>
                                            )}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Field
                                            name="password"
                                            render={({ input, meta }) => (
                                                <>
                                                    <Label>Password</Label>
                                                    <Input invalid={meta.active && meta.error} type="password" name="password" placeholder="Password" {...input} />
                                                </>
                                            )}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Field
                                            name="remember"
                                            render={({ input, meta }) => (
                                                <>
                                                    <Label>
                                                        <Input invalid={meta.active && meta.error} type="checkbox" name="remember" {...input} />
                                                        Remember me
                                                    </Label>
                                                </>
                                            )}
                                        />
                                    </FormGroup>
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Login
                                        </Button>
                                    </Col>
                                </form>
                            )
                        }}
                    >
                    </Form>
                </ModalBody>
            </Modal>
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={toggleNav}></NavbarToggler>
                        <NavbarBrand href="">Ristorante Con Fusion</NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span>About us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span>Contact us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button outline onClick={toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>
                                        Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>
                                    We take inspiration from the World's best cuisines, and create a unique
                                    fusion experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;