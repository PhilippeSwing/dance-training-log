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
            <div className="past-logs__modal-container">
                <div className="past-logs__modal">
                    <p className="past-Log__modal__item">Date: {this.props.clickedLogInfo.date}</p>
                    <p className="past-Log__modal__item">Partner(s): {this.props.clickedLogInfo.partners}</p>
                    <p className="past-Log__modal__item">Topics: {this.props.clickedLogInfo.topics}</p>
                    <p className="past-Log__modal__item"><a href={videoHref}>Video Reference</a></p>
                    {/* <video className="past-Log__modal__item" src={videoHref} width="500px" controls></video> */}
                    <p className="past-Log__modal__item">Prep notes: {this.props.clickedLogInfo.prepNotes}</p>
                    <p className="past-Log__modal__item">Work in progress: {this.props.clickedLogInfo.workInProgress}</p>
                    <p className="past-Log__modal__item">Ready for the dance floor: {this.props.clickedLogInfo.readyForDance}</p>
                    <p className="past-Log__modal__item">New ideas: {this.props.clickedLogInfo.newIdeas}</p>
                    <p className="past-Log__modal__item">What I learned from my partner(s): {this.props.clickedLogInfo.partnerLearn}</p>
                    <p className="past-Log__modal__item">Game plan for next practice: {this.props.clickedLogInfo.gameNext}</p>
                    <p className="past-Log__modal__item">Retro notes: {this.props.clickedLogInfo.retroNotes}</p>
                    {/* When the <p> tag is clicked, the value of the modalIsOpen property in the PastLogs state is swicthed to false, such that now the modal is no longer displayed. */}
                    <p onClick={this.props.toggleModal} class="past-Log__modal__close-link" ><i class="past-Log__modal__close-link__icon far fa-times-circle"></i></p>
                </div>
            </div>
        )
    }
}

export default LogModal;

