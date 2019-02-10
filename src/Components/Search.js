import React from 'react'

const Search = (props) => {
    

    return (
        <span>Player Name: <input onChange={(e) => props.changeHandler(e)} type="text" placeholder="Enter A Player" value={props.search} /></span>
    )

};

export default Search;