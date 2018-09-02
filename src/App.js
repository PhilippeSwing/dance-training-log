import React, { Component } from 'react';
import './styles/App.css';
// Imported the configured firebase module
import firebase from './components/firebase';
// Import Route of BrowserRouter from the react-router-dom package
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home';
import NewLogForm from './components/NewLogForm';
import PastLogs from './components/PastLogs';

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
      console.log(snapshot.val());
    });
  }

  // Function to be used as a callback in the NewLogForm component
  addLogToDatabase = (oneLog) => {
    dbRef.push(
      oneLog
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

    console.log(logsArray);
    // Set the state as the array of results from firebase so that I can pass it as a prop to PastLogs.js
    this.setState({
      logs: logsArray
    })
    console.log(this.state);
  }

  deleteLogFrontEnd = (key) => {
    this.setState({
      logs: this.state.logs.filter(log => log.key !== key)
    })
  }

  deleteLogFirebase = (key) => {
    // dbRef.on('value', (snapshot) => {  
    // }
    // console.log(firebase.database().ref('dance-training-log').val());
    return firebase.database().ref(`/${key}`).remove();
  }

  render() {

    return (
      <Router>
        <div className="App wrapper-prim">
          {/* Route to touch the HOME component/page */}
          <Route path="/" exact component={Home} />
          {/* Route to touch the NewLogForm component/page */}
          <Route
            path='/NewLogForm'
            render={(props) => (<NewLogForm {...props} addLogToDatabase={this.addLogToDatabase}
            />)}
          />
          {/* Route to touch the PastLogs component/page  */}
          <Route
            path='/PastLogs'
            render={(props) => (<PastLogs {...props} logsArray={this.state.logs} toggleModal={this.toggleModal} deleteLogFrontEnd={this.deleteLogFrontEnd} deleteLogFirebase={this.deleteLogFirebase}
            />)}
          />
        </div>
      </Router>
    );
  }
}

export default App;