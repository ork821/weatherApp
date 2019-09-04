import React from 'react';
import {Alert} from "react-bootstrap";

const Header = ({header, text}) => {
    return (
        <Alert variant="success">
            <Alert.Heading>{header}</Alert.Heading>
            <p>
                {text}
            </p>
        </Alert>
    );
};



export default Header;
