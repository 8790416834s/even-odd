import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onRandom = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Count {count} </h1>
        <div>
          {count % 2 === 0 ? (
            <p className="paragraph">Count is Even</p>
          ) : (
            <p className="paragraph">Count is Odd</p>
          )}
        </div>
        <div>
          <button
            type="button"
            className="increment-btn"
            onClick={this.onRandom}
          >
            Increment
          </button>
        </div>
        <p className="text">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
