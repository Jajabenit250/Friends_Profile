import React, {Component} from 'react';
import CardList from '../components/CardList';
import { people } from '../people';
import SearchBox from '../components/searchBox';

class FriendApp extends Component {
    constructor(){
        super()
        this.state = {
            people : people,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        const filteredpeople = this.state.people.filter(people => {
            return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredpeople)
    }
    render(){
        return (
            <div>
             <SearchBox searchChange = {this.onSearchChange}/>
            <CardList people = {this.state.people}/>
            </div>
        )
    }
    
}

export default FriendApp;
