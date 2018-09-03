import React, { Component } from 'react';

import LogModal from './LogModal';
import TopNav from './TopNav';

class PastLogs extends Component {
    constructor() {
        super();
        // This is an empty object that I will hold an info object for whatever log list te is clicked.
        this.state = {
            modalIsOpen: false
        };
    }

    //This clickedLogInfo function sets the state to equal the object returned from Firebase, however the setState has a callback function which adds modalIsOpen: true as a property to the state. Therefore, whichever <li> is clicked, modalIsOpen will always be set to true, with all state information pertaining to the <li>.A prop with this object (this.state) will be passed to the LogModal component where the modal JSX will be rendered.
    clickedLogInfo = (logInfo) => {
        // logInfo.modalIsOpen = 
        this.setState(logInfo, () => {
            this.setState({
                modalIsOpen: true
            })
        })
    }



    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    // DELETE PAST LOG FROM FRONT END
    // Target the ul, then remove the child li based on it's key attribute/value
    // Look for onChild-Removed and the Vanilla JS version of .find()

    // DELETE PAST LOG FROM FIREBASE
    // On click of the delete icon use the vanilla JS verison of .remove() and remove the log based on its key attribute/value. Example: app.database.ref(`/mediaList/${id}`).remove();


    render() {
        // if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the <li> element in the ListItem itself.
        return (
            <section className="pastlogs-section wrapper-prim" id="pastlogs-section">
                <div className="pastlogs-content wrapper-sec">
                    <TopNav />

                    <h2 className="header__past header__page">Past Logs</h2>
                    <ul className="log-list">
                        {/* Pass in the logsArray from App.js and map it to render the date and partner names for each practice session. */}
                        {this.props.logsArray.length > 0 ? this.props.logsArray.map((item) => {
                            // console.log(item);
                            return (
                                <div className="log-list__item-container">
                                    {/* OnClick of any one log item, display the entire log details as a pop-up modal.
                                If the key of the list item matches the key of the object in the logsArray, display ll the details from the matching object. */}
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