import React, { Component } from 'react';

class LogModal extends Component {
    // constructor() {
    //     super();
    //     // this.state = this.props.clickedLogInfo;
    // }


    render() {
        // console.log(this.props.clickedLogInfo);
        const videoHref = `${this.props.clickedLogInfo.video}?t=${this.props.clickedLogInfo.timestamp}`;
        // console.log(videoHref);

        return (
            <div className="past-logs__modal">
                <h4 className="past-Log__modal__item">Date: {this.props.clickedLogInfo.date}</h4>
                <h4 className="past-Log__modal__item">Partner(s): {this.props.clickedLogInfo.partners}</h4>
                <h4 className="past-Log__modal__item">Topics: </h4>
                <h4 className="past-Log__modal__item"><a href={videoHref}>Video Reference</a></h4>
                {/* <video className="past-Log__modal__item" src={videoHref} width="500px" controls></video> */}
                <h4 className="past-Log__modal__item">Prep notes: {this.props.clickedLogInfo.prepNotes}</h4>
                <h4 className="past-Log__modal__item">Work in progress: {this.props.clickedLogInfo.workInProgress}</h4>
                <h4 className="past-Log__modal__item">Ready for the dance floor: {this.props.clickedLogInfo.readyForDance}</h4>
                <h4 className="past-Log__modal__item">New ideas: {this.props.clickedLogInfo.newIdeas}</h4>
                <h4 className="past-Log__modal__item">What I learned from my partner(s): {this.props.clickedLogInfo.partnerLearn}</h4>
                <h4 className="past-Log__modal__item">Game plan for next practice: {this.props.clickedLogInfo.gameNext}</h4>
                <h4 className="past-Log__modal__item">Retro notes: {this.props.clickedLogInfo.retroNotes}</h4>
                <p onClick={this.props.toggleModal} class="past-Log__modal__close-link" ><i class="past-Log__modal__close-link__icon far fa-times-circle"></i></p>
            </div>
        )
    }
}

export default LogModal;

