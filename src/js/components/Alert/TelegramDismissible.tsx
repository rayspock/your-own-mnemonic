import React from "react";
import {Telegram} from "../../reducers/types";
import {Alert} from "react-bootstrap";


interface TelegramDismissibleProps {
    telegram?: Telegram
    setShow: () => void;
}

export default class TelegramDismissible extends React.Component<TelegramDismissibleProps, any> {
    render() {
        const {telegram, setShow} = this.props;
        if (telegram && telegram.show) {
            return (
                <Alert variant={telegram.variant} onClose={setShow} dismissible>
                    <Alert.Heading>{telegram.message}</Alert.Heading>
                </Alert>
            );
        } else {
            return null;
        }
    }
}
