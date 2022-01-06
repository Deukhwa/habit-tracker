import Reac, { Component } from 'react'
import './App.css'
import Habit from './components/habit'
import Habits from './components/habits'
import Navbar from './components/navbar'
class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }

  handleIncrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits: habits })
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count = habits[index].count < 1 ? 0 : habits[index].count - 1
    this.setState({ habits: habits })
  }

  handleAdd = () => {
    // 1. Get a data from an input
    // 2. add the data to a habits array
    // 3. setState
  }
  handleReset = () => {
    // 1. delete every element in the state
    // 2. setState
  }
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <input></input>
        <button onClick={this.handleAdd}>Add</button>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button onClick={this.handleReset}>Reset All</button>
      </>
    )
  }
}

export default App
