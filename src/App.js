import React, { Component } from 'react';
import './styles/App.css';
// Imported the configured firebase module
import firebase from './components/firebase';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home';
// import NewLogForm from './components/NewLogForm';
// import PastLogs from './components/PastLogs';
// import TopNav from './components/TopNav';

// GLOBAL VARIABLES
// Goes to the root of the firebase database
const dbRef = firebase.database().ref();

// APP class
class App extends Component {
  constructor() {
    super();
    this.state = {
      logs: [],
    };

  }

  componentDidMount() {
    // FIREBASE
    // add event listener to tell us if the database has anything on load and when everything changes
    dbRef.on('value', (snapshot) => {
      this.sortLogs(snapshot.val());
    });
  }

  // Function to be used as a callback in the NewLogForm component
  addLogToDatabase = (oneLog) => {
    dbRef.push(
      oneLog
      // date: date,
      // partners: partners,
      // outline: outline,
      // retrospective: retrospective,
    )
  }

  sortLogs = (logObject) => {
    // Turn the firebase log object into an array and map it to return an array of the results we want.
    const logsArray = Object.entries(logObject).map((logItem) => {
      return {
        key: logItem[0],
        date: logItem[1].date,
        partners: logItem[1].partners,
        topics: logItem[1].topics,
        video: logItem[1].video,
        timestamp: logItem[1].timestamp,
        prepNotes: logItem[1].prepNotes,
        workInProgress: logItem[1].workInProgress,
        readyForDance: logItem[1].readyForDance,
        newIdeas: logItem[1].newIdeas,
        partnerLearn: logItem[1].partnerLearn,
        gameNext: logItem[1].gameNext,
        retroNotes: logItem[1].retroNotes,
      }
    })
    // Set the state as the array of results from firebase so that I can pass it as a prop to PastLogs.js
    this.setState({
      logs: logsArray
    })
    console.log(this.state);
  }

  render() {

    return (
      // <Router>
      <div className="App wrapper-prim">
        {/* HOME PAGE */}
        <Home />
        {/* <Route path="./Home" component={Home} /> */}
        {/* NEW LOG PAGE/SECTION */}
        {/* <NewLogForm addLogToDatabase={this.addLogToDatabase} /> */}
        {/* <Route path="./NewLogForm" component={NewLogForm} /> */}
        {/* PAST LOGS PAGE/SECTION */}
        {/* <PastLogs logsArray={this.state.logs} toggleModal={this.toggleModal} /> */}
        {/* <Route path="./PastLogs" component={PastLogs} /> */}
      </div>
      // </Router>
    );
  }
}

export default App;
