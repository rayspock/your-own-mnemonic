import React, {Component} from "react";
import List from "./List";
import Form from "./Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {REPOSITORY, VERSION, TAG} from "../../env";
import {Telegram} from "../reducers/types";
import {connect} from "react-redux";
import {AppState} from "../reducers";
import TelegramDismissible from "./Alert/TelegramDismissible";
import {Dispatch} from "redux";
import {dismissTelegram} from "../actions";

const marginTop = {
    marginTop: '80px',
    marginLeft: '2px',
    marginRight: '2px'
};

const margin = {
    margin: '10px'
};

interface AppFormProps {
    dismissTelegram: Function;
    telegram?: Telegram
}

const mapStateToProps = (state: AppState) => {
    const {main} = state;
    return {
        telegram: main.telegram
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        dismissTelegram: () => dispatch(dismissTelegram())
    };
};

class App extends Component<AppFormProps, any> {
    constructor(props: AppFormProps) {
        super(props);
        this.setShow = this.setShow.bind(this);
    }

    setShow(){
        this.props.dismissTelegram();
    }

    render() {
        const {telegram} = this.props;
        return (
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
                    <TelegramDismissible telegram={telegram} setShow={this.setShow} />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
