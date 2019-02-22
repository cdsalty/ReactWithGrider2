// pulled from Semantics....

import React from 'react';

const LoadingSpinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className = "ui big text loader">{props.message}</div>
        </div>
    );
};
// By DOING THIS BELOW, if we forget to to put in the message to render, it will deafult to 'Loading, Hold onto your horses'
LoadingSpinner.defaultProps = {
    message: 'Loading... Hold onto your horses!'
};

export default LoadingSpinner;  