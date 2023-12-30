import {Component} from 'react'
import './index.css'

class Clock extends Component {
  /* Modern Method to initiate State
  state = {date: new Date()}    */

  //Older Method to Initiate State from constructor
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor() called')
  }

  componentDidMount() {
    console.log('componentDidMount() called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(`render() called, ${date}`)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
