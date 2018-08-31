import React, { Component } from 'react';

class LogModal extends Component {
    render() {
        console.log(this.props.clickedLogInfo);
        return (
            <div className="past-logs__modal">
                <h4 className="past-Log__modal__item">Date: {this.props.clickedLogInfo.date}</h4>
                <h4 className="past-Log__modal__item">Partner(s): {this.props.clickedLogInfo.partners}</h4>
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
        )
    }
}

export default LogModal;

