import React, { Component } from 'react';

import LogModal from './LogModal';
import TopNav from './TopNav';

class PastLogs extends Component {
    constructor() {
        super();
        // This is an empty object that will hold an info object for whatever log list item is clicked.
        this.state = {
            modalIsOpen: false
        };
    }

    // When click the past log list item, set the state with log info and set the modalIsOpen property to true
    clickedLogInfo = (logInfo) => {
        this.setState(logInfo, () => {
            this.setState({
                modalIsOpen: true
            })
        })
    }

    // Toggle the past log modal to open and closed
    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        // When extracting a ListItem component, keep the key on the <ListItem /> elements in the array rather than on the <li> element in the ListItem itself.
        return (
            <section className="pastlogs-section wrapper-prim" id="pastlogs-section">
                <div className="pastlogs-content wrapper-sec">
                    <TopNav />

                    <h2 className="header__past header__page">Past Logs</h2>
                    <ul className="log-list">
                        {/* Pass in the logsArray from App.js and map it to render the date and partner names for each practice session. */}
                        {this.props.logsArray.length > 0 ? this.props.logsArray.map((item) => {
                            return (
                                <div className="log-list__item-container">
                                    {/* OnClick of any one log item, display the entire log details as a pop-up modal.
                                If the key of the list item matches the key of the object in the logsArray, display all the details from the matching object. */}
                                    <li className="log-list__item" key={item.key} onClick={() => { this.clickedLogInfo(item) }}>
                                        <p className="log-list__item__text" id={item.key}>{item.date} - {item.partners}</p>
                                    </li>
                                    <i className="log-list__item__delete-icon fas fa-trash-alt" onClick={() => { this.props.deleteLogFrontEnd(item.key); this.props.deleteLogFirebase(item.key); }}></i>
                                </div>
                            )
                        }) : <li></li>}
                    </ul>

                    {this.state.modalIsOpen === true ? <LogModal toggleModal={this.toggleModal} clickedLogInfo={this.state} /> : null}
                </div>
            </section>
        )
    }
}

export default PastLogs;