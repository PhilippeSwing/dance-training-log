import React, { Component } from 'react';

// COMPONENTS
// import headerImage from '../assets/images/home-image.jpg';
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

                        {/* <img src={headerImage} className="header__image" alt="Phil dancing with a green foam ring, wearing brown pants, a blue polo shirt and suspenders." /> */}
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