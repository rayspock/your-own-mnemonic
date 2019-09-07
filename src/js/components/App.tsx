import React from "react";
import List from "./List";
import Form from "./Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const marginTop = {
    marginTop: '80px',
    marginLeft: '2px',
    marginRight: '2px'
};

const margin = {
    margin:'10px'
};

const App = () => (
    <Container fluid={true}>
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
                Your Own Mnemonic
            </Navbar.Brand>
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
