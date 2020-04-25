import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder,eventHandler}) =>{
	return	(
    <input className="search" type="search" placeholder={placeholder} onChange={eventHandler}></input>
    )
}