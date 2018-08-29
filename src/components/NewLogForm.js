import React, { Component } from 'react';

class NewLogForm extends Component {
    render() {
        console.log('NewLogForm render called');
        return (
            <section className="new-log-section wrapper-sec">
                <h2>Create New Log</h2>
                <form className="form-new-log">
                    {/* Practice Date and Partner Names */}
                    <div className="date-partners-input-container">
                        <label htmlFor="date-input" className="date-label">Date:</label>
                        <input type="text" id="date-input" placeholder="September 4, 1980" />

                        <label htmlFor="partners-input" className="partners-label">Partner(s)</label>
                        <input type="text" id="partners-input" placeholder="Joobs" />
                    </div>
                    {/* Practice Outline */}
                    <label htmlFor="topics-label" className="topics-label">Topics:</label>



                </form>
            </section>
        )
    }
}

export default NewLogForm;