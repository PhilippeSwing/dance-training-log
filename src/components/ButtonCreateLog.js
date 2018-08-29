import React from 'react';

class ButtonCreateLog extends React.Component {
    render() {
        console.log('ButtonCreateLog render called');
        return (
            <button className="create-log-button button">Create New Log</button>
        )
    }
}

export default ButtonCreateLog;