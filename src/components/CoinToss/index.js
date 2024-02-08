// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossBtn = () => {
    const {headsCount, tailsCount} = this.state
    const flipCoin = Math.floor(Math.random() * 2)
    let tossResultsImage = ''
    let currentHeadCount = headsCount
    let currentTailCount = tailsCount

    if (flipCoin === 0) {
      tossResultsImage =
        'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      currentHeadCount += 1
    } else {
      tossResultsImage =
        'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      currentTailCount += 1
    }

    this.setState({
      tossImage: tossResultsImage,
      headsCount: currentHeadCount,
      tailsCount: currentTailCount,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state

    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="toss-image" />
          <button
            className="toss-btn"
            type="button"
            onClick={this.onClickTossBtn}
          >
            Toss Coin
          </button>
          <div className="counting-container">
            <p className="total">Total: {totalCount}</p>
            <p className="head">Heads: {headsCount}</p>
            <p className="tail">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
