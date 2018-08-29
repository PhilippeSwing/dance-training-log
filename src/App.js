import React, { Component } from 'react';
import headerImage from './assets/home-image.jpg'; // Replace this with my Home page image
import './styles/App.css';
// Imported the configured firebase module
import firebase from './components/firebase';

// COMPONENTS
import NewLogForm from './components/NewLogForm';
import PastLogs from './components/PastLogs';
import ButtonCreateLog from './components/ButtonCreateLog';
import ButtonPastLogs from './components/ButtonPastLogs';
const dbRef = firebase.database().ref();

class App extends Component {
  componentDidMount() {
    console.log('App component did mount fired');
  }

  addLogToDatabase = (date, partners, outline, retrospective) => {
    dbRef.push({
      date: date,
      partners: partners,
      outline: outline,
      retrospective: retrospective,
    })
    // console.log('addLogToDatabase works!');
  }


  render() {
    console.log('App render called');
    // Goes to the root of the firebase database

    // FIREBASE
    // add event listener to tell us if the database has anything on load and when everything changes
    dbRef.on('value', function (snapshot) {
      console.log(snapshot.val());
    });
    return (
      <div className="App wrapper-prim">
        <section className="home-page-section wrapper-sec">
          <header className="header">
            <h1 className="header__main-heading">Training in Rhythm</h1>

            <img src={headerImage} className="header__image" alt="Phil dancing with a green foam ring, wearing brown pants, a blue polo shirt and suspenders." />
          </header>
          <div className="main-button-container">
            <ButtonCreateLog />
            <ButtonPastLogs />
          </div>
        </section>
        {/* // NEW LOG PAGE/SECTION */}
        <NewLogForm addLogToDatabase={this.addLogToDatabase} />

        {/* PAST LOGS PAGE/SECTION */}
        <PastLogs />
      </div>
    );
  }
}

export default App;
