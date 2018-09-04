import React, { Component } from 'react';

// COMPONENTS
import ButtonCreateLog from './ButtonCreateLog';
import ButtonPastLogs from './ButtonPastLogs';
import TopNav from './TopNav';

class Home extends Component {
    render() {
        return (
            <section className="home-page-section wrapper-prim">
                <div className="home-page-content wrapper-sec">
                    <TopNav />

                    <header className="header">
                        <h1 className="header__main-heading">Training in Rhythm</h1>
                    </header>

                    <div className="home-buttons-container">
                        <ButtonCreateLog />
                        <ButtonPastLogs />
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;