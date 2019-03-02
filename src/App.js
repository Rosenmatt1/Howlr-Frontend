import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home'
import data from './data.json'
import ReminderList from './components/ReminderList'
const url = "https://polar-reaches-88179.herokuapp.com/"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      reminders: data.reminders,
      date: '',
      name: '',
      taskName: data.reminders.map(item => item.name),
      taskDescription: data.reminders.map(item => item.description),
      remindersTable: [],
      namePicked: false,
      datePicked: false
    }
  }

  componentDidMount(){
    fetch('https://polar-reaches-88179.herokuapp.com/')
    .then (data => data.json())
      .then (res => {
        this.setState ({
          remindersTable: res
        })
      })
  }

  clickDate = (event) => {
  var stringified = event.toString()
    this.setState({
      date: stringified.slice(0, 15),
      datePicked: true
    });
  }

  deleteReminder = async (id) => {
    // e.preventDefault()
    const removeReminder = this.state.remindersTable.filter(item => {
      if (item.id === id
        ) {
      }
      return item.id
    })
    const returnTheRest = this.state.remindersTable.filter(item => item.id !== id)
    await fetch(`https://polar-reaches-88179.herokuapp.com/reminders/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(removeReminder),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      remindersTable: returnTheRest,
    })
  }

  selectTask = (event) => {
    // event.preventDefault()
    const description = this.state.reminders.filter(item => item.name === event.value)
      console.log(event.value)
    this.setState({
      name: event.value,
      description: description[0].description,
      namePicked: true
      });
      console.log(this.state.name)
  }

  setTask = async (event) => {
    event.preventDefault()
    const newReminder = {
      // id: this.state.remindersTable.length + 1,
      date: this.state.date,
      name: this.state.name,
      description: this.state.description
    }
    console.log(newReminder)
    await fetch('https://polar-reaches-88179.herokuapp.com/reminders/', {
      method: 'POST',
      body: JSON.stringify(newReminder),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
     remindersTable: [...this.state.remindersTable, newReminder],
    })
    
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route path="/home" render={() => <Home 
              clickDate={this.clickDate} 
              options={this.state.taskName}
              selectTask={this.selectTask}
              setTask={this.setTask}
              name={this.state.name}
              date={this.state.date}
              namePicked={this.state.namePicked}
              datePicked={this.state.datePicked}
              />}/>
            <Route path="/reminders/"  render={() => <ReminderList 
              // date={this.state.date}
              // taskName={this.state.taskName}
              // taskDescription={this.state.taskDescription}
              remindersTable={this.state.remindersTable} 
              deleteReminder={this.deleteReminder}
          /> } /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App; 