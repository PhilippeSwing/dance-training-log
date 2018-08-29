import React, { Component } from 'react';

class PastLogs extends Component {
    render() {
        console.log('PastLogs render called');
        return (
            <section className="pastlogs-section wrapper-sec">
                <h2 className="header__past">Past Logs</h2>

                <ul className="log-list"></ul>

                <div className="log-modal"></div>
            </section>
        )
    }
}

export default PastLogs;