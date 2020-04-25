import React, { Component } from 'react';
import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state={
			monsters:[],
			search:''
		}
	}

	eventHandler = (e)=>{
		return this.setState({search:e.target.value})
	}
	render(){
		const {monsters, search} = this.state;
		const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(search.toLowerCase()));
		return (
    	<div className="App">
			<h1 className='heading'>Monsters Rolodex</h1>
			<SearchBox type = "search"  placeholder = "Search Monster" eventHandler = {this.eventHandler}></SearchBox>
			<CardList monsters={filteredMonsters}>      		
			</CardList>

    	</div>
  		);
	  }
	  
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>this.setState({monsters:users}))  
	}
}

export default App;
