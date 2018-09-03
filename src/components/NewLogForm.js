import React, { Component } from 'react';

import TopNav from './TopNav';

class NewLogForm extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            partners: '',
            topics: '',
            video: '',
            timestamp: '',
            prepNotes: '',
            workInProgress: '',
            readyForDance: '',
            newIdeas: '',
            partnerLearn: '',
            gameNext: '',
            retroNotes: '',
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
        this.setState({
            date: '',
            partners: '',
            topics: '',
            video: '',
            timestamp: '',
            prepNotes: '',
            workInProgress: '',
            readyForDance: '',
            newIdeas: '',
            partnerLearn: '',
            gameNext: '',
            retroNotes: '',
        });
        console.log(this.state);
    }

    render() {
        return (
            <section className="new-log-section wrapper-prim">
                <div className="new-log-content wrapper-sec">
                    <TopNav />

                    <h2 className="header__create header__page">Create New Log</h2>
                    <form onSubmit={this.handleFormSubmit} className="form-new-log">
                        {/* Practice Date and Partner Names */}
                        <div className="date-partners-input-container">
                            <div className="input-label-container">
                                <label htmlFor="date" className="date-label">Date:</label>
                                <input onChange={this.handleInputChange} type="text" id="date" value={this.state.date} />
                            </div>

                            <div className="input-label-container">
                                <label htmlFor="partners" className="partners-label">Partner(s)</label>
                                <input onChange={this.handleInputChange} type="text" id="partners" value={this.state.partners} />
                            </div>
                        </div>
                        {/* Practice Outline */}
                        <h3 className="header__outline">Practice Prep</h3>
                        <div className="input-label-container">
                            <label htmlFor="topics" className="topics-label">Topics:</label>
                            <textarea rows="1" onChange={this.handleInputChange} type="text" className="topics-input" id="topics" placeholder="Swingouts" value={this.state.topics} />
                        </div>

                        <div className="video-container">
                            <div className="input-label-container">
                                <label htmlFor="video" className="video-reference-label">Video Reference:</label>
                                <input onChange={this.handleInputChange} type="text" className="video-reference-input" id="video" placeholder="https://www.youtube.com/watch?v=7j61Mi3ATqU" value={this.state.video} />
                            </div>

                            <div className="input-label-container">
                                <label htmlFor="timestamp" className="video-timestamp-label">Timestamp:</label>
                                <input onChange={this.handleInputChange} type="text" className="video-timestamp-input" id="timestamp" placeholder="0m50s" value={this.state.timestamp} />
                            </div>
                        </div>

                        <div className="input-label-container">
                            <label htmlFor="prepNotes" className="outline-notes-label"> Prep Notes:</label>
                            <textarea rows="1" onChange={this.handleInputChange} className="outline-notes-input" id="prepNotes" value={this.state.prepNotes} />
                        </div>
                        {/* Retrospective */}
                        <h3 className="header__retrospective">Retrospective</h3>

                        <div className="input-label-container">
                            <label htmlFor="workInProgress" className="inprogress-label">Work in progress:</label>
                            <textarea rows="1" onChange={this.handleInputChange} className="inprogress-input" id="workInProgress" value={this.state.workInProgress} />
                        </div>

                        <div className="input-label-container">
                            <label htmlFor="readyForDance" className="ready-label">Ready for the dance floor:</label>
                            <textarea rows="1" onChange={this.handleInputChange} className="ready-input" id="readyForDance" value={this.state.readyForDance} />
                        </div>

                        <div className="input-label-container">
                            <label htmlFor="newIdeas" className="new-ideas-label">New Ideas:</label>
                            <textarea rows="1" onChange={this.handleInputChange} className="new-ideas-input" id="newIdeas" value={this.state.newIdeas} />
                        </div>

                        <div className="input-label-container">
                            <label htmlFor="partnerLearn" className="partner-learn-label">What I learned from my partner(s):</label>
                            <textarea rows="1" onChange={this.handleInputChange} className="partner-learn-input" id="partnerLearn" value={this.state.partnerLearn} />
                        </div>

                        <div className="input-label-container">
                            <label htmlFor="gameNext" className="next-practice-label">Game plan for next practice:</label>
                            <textarea rows="1" onChange={this.handleInputChange} className="next-practice-input" id="gameNext" value={this.state.gameNext} />
                        </div>

                        <div className="input-label-container">
                            <label htmlFor="retroNotes" className="other-notes-label">Retro Notes:</label>
                            <textarea rows="1" onChange={this.handleInputChange} className="other-notes-input" id="retroNotes" value={this.state.retroNotes} />
                        </div>

                        <input type="submit" className="log-submit button" value="Log it" id="log-submit" />
                    </form>
                </div>
            </section>
        )
    }
}

export default NewLogForm;