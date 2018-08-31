import React, { Component } from 'react';

class PastLogs extends Component {
    // constructor() {
    //     super();
    // This is an empty array that I will eventually push the firebase results into
    //     this.state = [];
    // }



    render() {
        console.log('PastLogs render called');
        // const logListItems = logInfoArray.map((itemForList) => {
        //     <li key={}>{itemForList.date}</li> 
        // });
        // STILL NEED TO PASS IN A KEY FOR EACH LIST ITEM. It's typically a string that is unique to the item. For firebase grab the root key number.
        // if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the <li> element in the ListItem itself.


        return (
            <section className="pastlogs-section wrapper-sec" id="pastlogs-section">
                <h2 className="header__past">Past Logs</h2>
                <ul className="log-list">
                    {this.props.logsArray.map((item) => {
                        return (
                            <li key={item.key}>
                                <h4>{item.date}{item.partners}</h4>
                            </li>
                        )
                    })}
                </ul>

                <div className="past-logs__modal">
                    <h4 className="past-Log__modal__item">Date: </h4>
                    <h4 className="past-Log__modal__item">Topics: </h4>
                    <h4 className="past-Log__modal__item">Video: </h4>
                    <h4 className="past-Log__modal__item">Prep notes: </h4>
                    <h4 className="past-Log__modal__item">Work in progress: </h4>
                    <h4 className="past-Log__modal__item">Ready for the dance floor: </h4>
                    <h4 className="past-Log__modal__item">New ideas: </h4>
                    <h4 className="past-Log__modal__item">What I learned from my partner(s): </h4>
                    <h4 className="past-Log__modal__item">Game plan for next practice:</h4>
                    <h4 className="past-Log__modal__item">Retro notes: </h4>
                </div>
            </section>
        )
    }
}

export default PastLogs;