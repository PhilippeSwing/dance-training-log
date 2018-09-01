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
        console.log(this.state);
    }



    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    // DELETE PAST LOG FROM FRONT END
    // Target the ul, then remove the child li, based on it's key attribute
    // Look for onChild-Removed and the Vanilla JS version of .find()

    // DELETE PAST LOG FROM FIREBASE



    render() {
        console.log('PastLogs render called');
        // const logListItems = logInfoArray.map((itemForList) => {
        //     <li key={}>{itemForList.date}</li> 
        // });
        // STILL NEED TO PASS IN A KEY FOR EACH LIST ITEM. It's typically a string that is unique to the item. For firebase grab the root key number.
        // if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the <li> element in the ListItem itself.


        return (
            <section className="pastlogs-section wrapper-sec" id="pastlogs-section">
                <TopNav />

                <h2 className="header__past">Past Logs</h2>
                <ul className="log-list">
                    {/* Pass in the logsArray from App.js and map it to render the date and partner names for each practice session. */}
                    {this.props.logsArray.length > 0 ? this.props.logsArray.map((item) => {
                        // console.log(item);
                        return (

                            // OnClick of any one log item, display the entire log details as a pop-up modal.
                            // If the key of the list item matches the key of the object in the logsArray, display ll the details from the matching object.
                            <li key={item.key} onClick={() => { this.clickedLogInfo(item) }}>
                                <h4 id={item.key}>{item.date} - {item.partners}</h4>
                            </li>
                        )
                    }) : <li></li>}
                </ul>

                {this.state.modalIsOpen === true ? <LogModal toggleModal={this.toggleModal} clickedLogInfo={this.state} /> : null}
            </section>
        )
    }
}

export default PastLogs;