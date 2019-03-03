import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home'
import data from './data.json'
import ReminderList from './components/ReminderList'
const url = "https://polar-reaches-88179.herokuapp.com/"

// http://localhost:8082/api/messages/

// https://howlr.herokuapp.com/

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
    fetch(url)
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
    await fetch(`${url}reminders/${id}`, {
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
    await fetch(`${url}reminders/`, {
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


  // editReminder = async (e) => {
  //   e.preventDefault()
  //   const editedReminder = {
  //     description: this.state.newDescription,
  //     name: this.state.newName
  //   }
  //   const mappedCards = this.state.flashcards.map(card => {
  //     if (this.state.flashcards[this.state.index].id === card.id) {
  //       this.state.flashcards[this.state.index].name = this.state.newMethod
  //       this.state.flashcards[this.state.index].description = this.state.newDescription
  //       this.state.flashcards[this.state.index].link = this.state.newLink
  //     }
  //     return card
  //   })
  //   await fetch(`url${this.state.flashcards[this.state.index].id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(editedFlash),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   this.setState({
  //     flashcards: mappedCards,
  //     edit: false,
  //   })
  // }


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