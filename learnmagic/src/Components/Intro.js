import React, { Component } from 'react'
import Form from './Form'
export default class FrontPage extends Component {
	state = {
		lands: ["https://deckmaster.info/images/cards/AVR/269639-hr.jpg", 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=410058&type=card', "http://i50.tinypic.com/2cwomq1.jpg",'https://deckmaster.info/images/cards/LRW/143630-hr.jpg','https://deckmaster.info/images/cards/AVR/269636-hr.jpg'],
		landName: ["https://vignette.wikia.nocookie.net/mtg/images/a/a8/Mana_U.png/revision/latest?cb=20130604114015", "https://i.pinimg.com/originals/bb/48/d5/bb48d50e5bc73b7329593e9f8d6aa283.png", "https://i.pinimg.com/originals/d5/82/65/d5826506625e0d04cfe41078b9e55a8a.png", "https://vignette.wikia.nocookie.net/mtg/images/d/da/Mana_W.png/revision/latest?cb=20130604114009", "https://vignette.wikia.nocookie.net/mtg/images/f/f7/Mana_G.png/revision/latest?cb=20130604114032"],
		imageToView : 0 
	}
	clickHandler = (indexParam)=>{
		// indexParam checks the index of the manaSymbols array and sets the
		// imageToView to to whatever the value of indexParam is which updates the state
		// to that card. The eslint line below disables a warning in React about comparing to itself.
		// eslint-disable-next-line
		if(indexParam === indexParam){
			this.setState({
				imageToView: indexParam
			})
		}
	}
    render(){
    	// manaSymbols is a map of the landName array which returns an amount of buttons equal to
    	// the amount of elements in the array it mapped. Each button has an event handler 
    	let manaSymbols = this.state.landName.map((title, index)=>{
    		return <button className = "introButtons" onClick={()=>{this.clickHandler(index)}} key={index}><img src={title} alt="blub" /></button>
    	})
        return (
            <section className="infoContainer">
				<div className="introText">
					<div className="introChildren">
						<article className="introduction" id="navIntro">
							<div>
								<h2>INTRO</h2>
								<p>
									Magic: The Gathering, also Magic or MTG, is a strategy card game created by Richard Garfield in 1993, and published by Wizards of the Coast. Magic holds the title of "Most Played Trading Card Game," and is currently published in English, Simplified Chinese, Traditional Chinese, French, German, Italian, Korean, Japanese, Portuguese, Russian and Spanish. Digitally, the game can be played in Magic Online and MTG Arena.
								</p>
								<div className="introductionImg">
										<img src="https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7nuh.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fnuhtbmwbujpo_hbnfqfejbx2f8x2f8gx2fQpx78fs_Ojof.kqhx3fwfstjpox3dd3f3d9g80326bc17f37e057e5f93c699x26j21d.nbslx3djnbhf_$/$/$/$/$" alt="powNine"/>
										<p>These cards are from the set called Alpha, Magic's first set.</p>
								</div>
							</div>
						</article>
						<article className="howToPlay" id="howToPlay">
							<div>
								<h2>How to Play!</h2>
								<p>
									Magic is a battle of wits between you and your opponent. The game is fairly to simple grasp, but as you continue to play you will begin to notice the the complexity and depth of the game. For now though let's take a look at the anatomy of a card and understand what the heck is going!
								</p>
							</div>
							<div className="imgText">
								<img src = {this.state.lands[this.state.imageToView]} alt="land"/>
							<div>
								<h2>Foundation of Magic: Lands</h2>
								<p>Here we have a land</p>
							</div>
								{/*<img src="https://i.pinimg.com/originals/ba/06/75/ba0675a338bfd02b61bfa8a329cd1960.png" alt="manasymbols" />*/}
							</div>
							<div>
								{manaSymbols}
							</div>
						</article>
						<Form email={this.props.email}/>
					</div>
				</div>
			</section>
        )
    }
}