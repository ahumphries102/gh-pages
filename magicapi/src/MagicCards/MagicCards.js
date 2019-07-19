import React from 'react'

const magicList = (props)=>{
	const namesList = props.magicCards.map((magicCards, i)=>{
		return <li key={i}>{magicCards.name}<button className="ui button active">Button crap</button></li>
	})

	const cardImages = props.magicCards.map((magicCards, i)=>{
		return <li key={i}><img src={magicCards.image_uris.small} alt='magic cards' className='enlarge'/></li>
	})

	const colorsList = props.magicCards.map((magicCards, i)=>{
		return <li key={i}>{magicCards.colors}</li>
	})
	return(
		<div>
			<ul>
				{cardImages}
				{namesList}
				{colorsList}
			</ul>
		</div>
	)
}

export default magicList