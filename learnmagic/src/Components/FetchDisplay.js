import React, { Component } from 'react'
import Intro from "./Intro"

export default class FetchDisplay extends Component{
	state = {
		magicCards:[],
        pyResp: []
	}
	componentDidMount(){
		//Call our fetches when localhost:3000 is connected
		this.fetchServer().then((data) => console.log(data, "server fetched"))
        this.fetchMagicCards().then((data) => console.log(data, "did mount"))
	}
	//Connect to our server which is fetched and returned once all the synchronous
	//code has compiled
	fetchServer = async ()=>{
		try{
		//Fetch the server when we connect, set the method of the response to GET
		// use CORS for handling cross origin resource sharing
		 fetch('http://localhost:5000/', {
      		method: 'POST',
      		mode: 'cors',
      		headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
     		}
   		})
		 //
	      .then(result=>result.json())
	      .then(item=>console.log(item))
	      .catch(err =>{
	        console.log("We have an error in the fetchServer.js catch", err);
	        return err;
	      })
		}
		catch(err){
			console.log(err, "fetchServer function failed in FetchDisplay")
			return err
		}
	}
	fetchMagicCards = async ()=>{
		try{
            const magicApi = await fetch("https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints")
            const magicData = await magicApi.json()

            this.setState({magicCards:magicData.data})
		}
		catch(err){
			console.log(err, "fetchMagicCards failed in MainContainer")
			return err
		}
	}
	render(){
		const newDeck = this.state.magicCards.map((cards, i)=>{
			return <img src={cards.image_uris.art_crop} alt='magic cards' key={i}/>
		})

		return(
			<div className="mainBody">
			<Intro magicCards={this.state.magicCards} email={this.fetchServer}/>
				<div className="grid">{newDeck}</div>

			</div>
			)
	}
}