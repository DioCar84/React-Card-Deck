import React, { Component } from 'react'
import Card from './Card.component'
import './CardDeck.styles.css'

class CardDeck extends Component {
  constructor(props){
    super(props);
    this.state = {deck_id: '', remaining: '', cards: []}
    this.handleClick = this.handleClick.bind(this);
    this.dealCard = this.dealCard.bind(this);
  }

  async componentDidMount() {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle');
      const deck = await response.json();
      this.setState({deck_id: deck.deck_id, remaining: deck.remaining, });

  }

  async dealCard() {
    let {deck_id} = this.state;
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
    const card = await response.json();
    this.setState((st) => ({
      remaining: card.remaining,
      cards: [...st.cards, card.cards[0]]
    }))
    console.log(card);

  }

  handleClick(evt) {
    this.dealCard();
  }

  render() {
    let cardDeck = this.state.cards.map((card) => { return(<Card key={card.code} image={card.image} alt={`${card.value} of ${card.suit}`}/>)})
    return (
      <div className='CardDeck'>
        <h1 className='CardDeck-title'>♦ Random Card Dealer ♦</h1>
        <h2 className='CardDeck-title subtitle'>
          ♦ A little demo made with React ♦
        </h2>
        <button className='CardDeck-btn' onClick={this.handleClick} disabled={!this.state.remaining}>Draw Card!</button>
        
        <div className='CardDeck-cardarea'>
          {this.state.cards && cardDeck }
        </div>  
          {!this.state.remaining && <p className='CardDeck-title subtitle endDeal'>Out of Cards please refresh browser!</p>}
       
        
      </div>

    )
  }
}

export default CardDeck