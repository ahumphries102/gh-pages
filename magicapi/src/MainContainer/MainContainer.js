import React, { Component } from 'react';
import MagicCards from '../MagicCards/MagicCards'
import '../App.css';

export default class MainContainer extends Component {
  state = {
    magicCards:[]
  }
    getMagicCards = async ()=>{
      try{
        const magicApi = await fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints')
        const magicData = await magicApi.json()
        
        this.setState( { magicCards:magicData.data } )
      }
      catch(err){
        console.log(err, 'catch caught an error')
        return err
      }

    }
  componentDidMount(){
      // this.setState((previousState)=>{
      //     pokemons:previousState.pokemons.filter((pokemons,i)=> i !==index)
      //   }
      // )
      this.getMagicCards().then((data)=> console.log(data, 'gotemAll'))
  }
  render() {
    return (
      <div className="App">
        <h1>Ravnica Allegience</h1>
          <MagicCards magicCards={this.state.magicCards}/>
      </div>
    );
  }
}
