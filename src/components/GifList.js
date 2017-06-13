import React, { Component } from 'react'


const GifList = (props) => {
	return(
		<ul className='gif-list'>
			{gifCreator(props.gifs)}
		</ul>
		)

}

function gifCreator(gifs) {
	return gifs.map((gif,i)=> {
		return <img key={i} src={gif} />
	})
}

export default GifList;
