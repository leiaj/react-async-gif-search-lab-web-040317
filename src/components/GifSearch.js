import React, { Component } from 'react'

export default class GifSearch extends Component {

	handleSearch(e){
		e.preventDefault()
		const searchTerm = e.target.children[0].value
		this.props.fetchGifs(searchTerm)
		e.target.children[0].value = ""
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSearch.bind(this)} >
			    <input type='text' placeholder="Search for a Gif"/>
			    <input type='submit' value="Search" />
			  </form>
			</div>

			)
	}



}
