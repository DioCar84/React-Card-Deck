import React, { Component } from 'react'
import './Card.styles.css'

class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <div>
        <img className='Card' src={`${this.props.image}`} alt={`${this.props.alt}`} style={{ transform: this._transform}}/>
      </div>
    )
  }
}

export default Card