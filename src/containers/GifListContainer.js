import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
	constructor(){
		super()

		this.state = {
			gifs: []
		}
		this.fetchGifs = this.fetchGifs.bind(this)
		}


	fetchGifs(query){
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
		.then(response => response.json())
		.then(gifs => {
			const threeGifs = gifs.data.slice(0,3).map(gif => gif.images.original.url)
			this.setState({ gifs: threeGifs })
		})
	}


	render(){
		return(
			<div>
				<GifSearch fetchGifs={this.fetchGifs} />
				<GifList gifs={this.state.gifs} />
			</div>

			)
	}



}
