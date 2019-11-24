import React from 'react';
import CardList from './CardList';
import { people } from './people';
import SearchBox from './searchBox';

const FriendApp = () => {
    return (
        <div>
         <SearchBox />
        <CardList people = {people}/>
        </div>
    )
}

export default FriendApp;
