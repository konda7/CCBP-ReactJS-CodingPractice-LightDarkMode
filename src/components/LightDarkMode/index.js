// Write your code here

import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {color: 'bg-1', mode: 'Light Mode'}

  modeChange = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState(() => ({
        color: 'bg-2',
      }))
      this.setState(() => ({
        mode: 'Dark Mode',
      }))
    } else {
      this.setState(() => ({
        color: 'bg-1',
      }))
      this.setState(() => ({
        mode: 'Light Mode',
      }))
    }
  }

  render() {
    const {color, mode} = this.state
    return (
      <div className="bg-container">
        <div className={`${color} content-container`}>
          <h1 className="main-heading">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.modeChange}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
