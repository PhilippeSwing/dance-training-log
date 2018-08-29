import React, { Component } from 'react';

class NewLogForm extends Component {
    constructor() {
        super();
        this.state = {
            date: '1',
            partners: '1',
            outline: {
                topics: '1',
                video: '1',
                outlineNotes: '1',
            },
            retrospective: {
                workInProgress: '1',
                readyForDance: '1',
                newIdeas: '1',
                partnerLearn: '1',
                gameNext: '1',
                retroNotes: '1',
            }
        }
    }

    handleSubmit = (e) => {
        // Remove default on form submit
        e.preventDefault();
        // Add user input to database
        this.props.addLogToDatabase(this.state.date, this.state.partners, this.state.outline, this.state.retrospective);
    }

    render() {
        console.log('NewLogForm render called');
        return (
            <section className="new-log-section wrapper-sec">
                <h2 className="header__create">Create New Log</h2>
                <form onSubmit={this.handleSubmit} className="form-new-log">
                    {/* Practice Date and Partner Names */}
                    <div className="date-partners-input-container">
                        <label htmlFor="date-input" className="date-label">Date:</label>
                        <input type="text" id="date-input" placeholder="September 4, 1980" />

                        <label htmlFor="partners-input" className="partners-label">Partner(s)</label>
                        <input type="text" id="partners-input" placeholder="Joobs" />
                    </div>
                    {/* Practice Outline */}
                    <h3 className="header__outline">Outline</h3>

                    <label htmlFor="topics-label" className="topics-label">Topics:</label>
                    <input type="text" className="topics-input" id="topics-input" placeholder="Swingouts" />

                    <label htmlFor="video-reference-label" className="video-reference-label">Video Reference:</label>
                    <input type="text" className="video-reference-input" id="video-reference-input" placeholder="https://www.youtube.com/watch?v=7j61Mi3ATqU" />

                    <label htmlFor="outline-notes-label" className="outline-notes-label">Notes:</label>
                    <textarea className="outline-notes-input" id="outline-notes-input" placeholder="https://www.youtube.com/watch?v=7j61Mi3ATqU" />
                    {/* Retrospective */}
                    <h3 className="header__retrospective">Retrospective</h3>

                    <label htmlFor="inprogress-label" className="inprogress-label">Work in progress:</label>
                    <textarea className="inprogress-input" id="inprogress-input" placeholder="Whirly Bird tandem variation" />

                    <label htmlFor="ready-label" className="ready-label">Ready for the dance floor:</label>
                    <textarea className="ready-input" id="ready-input" placeholder="Double Tuck Turn in six counts" />

                    <label htmlFor="new-ideas-label" className="new-ideas-label">New Ideas:</label>
                    <textarea className="new-ideas-input" id="new-ideas-input" placeholder="Incorporate interesting rhythm into the new Swingout variation." />

                    <label htmlFor="partner-learn-label" className="partner-learn-label">What I learned from my partner(s):</label>
                    <textarea className="partner-learn-input" id="partner-learn-input" />

                    <label htmlFor="next-practice-label" className="next-practice-label">Game plan for next practice:</label>
                    <textarea className="next-practice-input" id="next-practice-input" />

                    <label htmlFor="other-notes-label" className="other-notes-label">Other Notes:</label>
                    <textarea className="other-notes-input" id="other-notes-input" />

                    <input type="submit" className="log-submit" value="Log it" id="log-submit" />
                </form>
            </section>
        )
    }
}

export default NewLogForm;