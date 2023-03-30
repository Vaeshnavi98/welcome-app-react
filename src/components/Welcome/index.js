import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  Button = () => {
    this.setState({isSubscribed: false})
  }

  Subscribe = () => {
    this.setState({isSubscribed: true})
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="main-div">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" className="button-deco" onClick={this.Button}>
            Subscribed
          </button>
        ) : (
          <button
            type="button"
            className="button-deco"
            onClick={this.Subscribe}
          >
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
