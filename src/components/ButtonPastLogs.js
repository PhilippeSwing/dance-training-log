import React from 'react';

class ButtonPastLogs extends React.Component {
    render() {
        console.log('ButtonPastLogs render called');
        return (
            <button className="past-logs-button button">Past Logs</button>
        )
    }
}

export default ButtonPastLogs;