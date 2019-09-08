import React from "react";
import List from "./List";
import Form from "./Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {REPOSITORY, VERSION, TAG} from "../../env";

const marginTop = {
    marginTop: '80px',
    marginLeft: '2px',
    marginRight: '2px'
};

const margin = {
    margin: '10px'
};

const App = () => (
    <Container fluid={true}>
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
                Your Own Mnemonic
            </Navbar.Brand>
            <Nav className="ml-auto pr-md-5">
                <Nav.Link target="_blank" href={TAG}>{VERSION}</Nav.Link>
                <Nav.Link target="_blank" href={REPOSITORY}>
                    <FontAwesomeIcon size="lg" icon={['fab', 'github']}/>
                </Nav.Link>
            </Nav>
        </Navbar>
        <div style={marginTop}>
            <div className="row" style={margin}>
                <div className="offset-md-1">
                    <h2>Generate Mnemonic</h2>
                    <Form/>
                </div>

            </div>
            <div className="row" style={margin}>
                <div className="offset-md-1">
                    <h2>Mnemonic</h2>
                    <List/>
                </div>
            </div>
        </div>
    </Container>
);

export default App;
