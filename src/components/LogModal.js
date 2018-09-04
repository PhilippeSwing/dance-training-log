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

                    <h4 className="past-log__modal__header">Date:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.date}</p>

                    <h4 className="past-log__modal__header">Partner(s):</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.partners}</p>

                    <h4 className="past-log__modal__header">Topics:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.topics}</p>

                    {/* <h4 className="past-log__modal__header"></h4> */}
                    <p className="past-log__modal__item video-reference-link"><a href={videoHref}>Video Reference</a></p>
                    {/* <video className="past-log__modal__item" src={videoHref} width="500px" controls></video> */}

                    <h4 className="past-log__modal__header">Prep notes:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.prepNotes}</p>

                    <h4 className="past-log__modal__header">Work in progress:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.workInProgress}</p>

                    <h4 className="past-log__modal__header">Ready for the dance floor:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.readyForDance}</p>

                    <h4 className="past-log__modal__header">New ideas:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.newIdeas}</p>

                    <h4 className="past-log__modal__header">What I learned from my partner(s):</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.partnerLearn}</p>

                    <h4 className="past-log__modal__header">Game plan for next practice:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.gameNext}</p>

                    <h4 className="past-log__modal__header">Retro notes:</h4>
                    <p className="past-log__modal__item">{this.props.clickedLogInfo.retroNotes}</p>
                    {/* When the <p> tag is clicked, the value of the modalIsOpen property in the PastLogs state is swicthed to false, such that now the modal is no longer displayed. */}
                    <p onClick={this.props.toggleModal} className="past-log__modal__close-link"><i class="past-log__modal__close-link__icon fas fa-times-circle"></i></p>
                </div>
            </div>
        )
    }
}

export default LogModal;

