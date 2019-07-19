//MainContainer essentially is our main display
import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import FetchDisplay from './FetchDisplay'
import Navigation from "./Navigation"

export default class MainContainer extends Component{
	render(){
		return(
			<section>
			<Navigation />
			<div className="holdHero">
				<section className="fixedHero">
					<section className="hero">
						<div className="simpleGradient"></div>
							<div className="logo">
								<img src='https://www.logolynx.com/images/logolynx/d7/d74ab82bf0a42a8d2152d0d1a55afe92.png' alt="logo"/>
								<h1>Tutorial</h1>
							</div>
					</section>
				</section>
			</div>
			
			<FetchDisplay />
			</section>
			)
	}
}