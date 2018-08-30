import React, { Component } from 'react';
import './styles/App.css';
// Imported the configured firebase module
import firebase from './components/firebase';

// COMPONENTS
import Home from './components/Home';
import NewLogForm from './components/NewLogForm';
import PastLogs from './components/PastLogs';

// GLOBAL VARIABLES
const dbRef = firebase.database().ref();

// APP class
class App extends Component {
  componentDidMount() {
    console.log('App component did mount fired');
  }

  // Function to be used as a callback in the NewLogForm component
  addLogToDatabase = (oneLog) => {
    dbRef.push({
      oneLog
      // date: date,
      // partners: partners,
      // outline: outline,
      // retrospective: retrospective,
    })
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
        {/* HOME PAGE */}
        <Home />
        {/* // NEW LOG PAGE/SECTION */}
        <NewLogForm addLogToDatabase={this.addLogToDatabase} />
        {/* PAST LOGS PAGE/SECTION */}
        <PastLogs />
      </div>
    );
  }
}

export default App;
