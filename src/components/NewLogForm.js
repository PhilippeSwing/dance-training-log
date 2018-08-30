import React, { Component } from 'react';

class NewLogForm extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            partners: '',
            outline: {
                topics: '',
                video: '',
                timestamp: '',
                prepNotes: '',
            },
            retrospective: {
                workInProgress: '',
                readyForDance: '',
                newIdeas: '',
                partnerLearn: '',
                gameNext: '',
                retroNotes: '',
            }
        }
    }

    handleInputChange = (e) => {
        // Square brackets says "this is a property on an object"
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    // When the form is submitted, send user input to database
    handleFormSubmit = (e) => {
        // Remove default on form submit
        e.preventDefault();
        // Add user input to database
        this.props.addLogToDatabase(this.state);
        // setState property values to an empty string to empty the input fields
        this.setState = {
            date: '',
            partners: '',
            outline: {
                topics: '',
                video: '',
                timestamp: '',
                prepNotes: '',
            },
            retrospective: {
                workInProgress: '',
                readyForDance: '',
                newIdeas: '',
                partnerLearn: '',
                gameNext: '',
                retroNotes: '',
            }
        }
    }

    render() {
        console.log('NewLogForm render called');
        return (
            <section className="new-log-section wrapper-sec">
                <h2 className="header__create">Create New Log</h2>
                <form onSubmit={this.handleFormSubmit} className="form-new-log">
                    {/* Practice Date and Partner Names */}
                    <div className="date-partners-input-container">
                        <label htmlFor="date" className="date-label">Date:</label>
                        <input onChange={this.handleInputChange} type="text" id="date" placeholder="September 4, 1980" />

                        <label htmlFor="partners" className="partners-label">Partner(s)</label>
                        <input type="text" id="partners" placeholder="Joobs" />
                    </div>
                    {/* Practice Outline */}
                    <h3 className="header__outline">Practice Prep</h3>

                    <label htmlFor="topics" className="topics-label">Topics:</label>
                    <input type="text" className="topics-input" id="topics" placeholder="Swingouts" />

                    <div className="video-container">
                        <label htmlFor="video" className="video-reference-label">Video Reference:</label>
                        <input type="text" className="video-reference-input" id="video" placeholder="https://www.youtube.com/watch?v=7j61Mi3ATqU" />

                        <label htmlFor="timestamp" className="video-timestamp-label">Timestamp:</label>
                        <input type="text" className="video-timestamp-input" id="timestamp" placeholder="0m50s" />
                    </div>

                    <label htmlFor="prepNotes" className="outline-notes-label"> Prep Notes:</label>
                    <textarea className="outline-notes-input" id="prepNotes" placeholder="https://www.youtube.com/watch?v=7j61Mi3ATqU" />
                    {/* Retrospective */}
                    <h3 className="header__retrospective">Retrospective</h3>

                    <label htmlFor="workInProgress" className="inprogress-label">Work in progress:</label>
                    <textarea className="inprogress-input" id="workInProgress" placeholder="Whirly Bird tandem variation" />

                    <label htmlFor="readyForDance" className="ready-label">Ready for the dance floor:</label>
                    <textarea className="ready-input" id="readyForDance" placeholder="Double Tuck Turn in six counts" />

                    <label htmlFor="newIdeas" className="new-ideas-label">New Ideas:</label>
                    <textarea className="new-ideas-input" id="newIdeas" placeholder="Incorporate interesting rhythm into the new Swingout variation." />

                    <label htmlFor="partnerLearn" className="partner-learn-label">What I learned from my partner(s):</label>
                    <textarea className="partner-learn-input" id="partnerLearn" />

                    <label htmlFor="gameNext" className="next-practice-label">Game plan for next practice:</label>
                    <textarea className="next-practice-input" id="gameNext" />

                    <label htmlFor="retroNotes" className="other-notes-label">Retro Notes:</label>
                    <textarea className="other-notes-input" id="retroNotes" />

                    <input type="submit" className="log-submit" value="Log it" id="log-submit" />
                </form>
            </section>
        )
    }
}

export default NewLogForm;