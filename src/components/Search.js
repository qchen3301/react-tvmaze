import React, { Component } from 'react'
import SearchContainer from './SearchContainer'

export default class Search extends Component {
    
  render() {


    return (
      <div>
        <input type="text" name="" placeholder="Enter a Movie Title..." />
        <button>Search</button>
        <SearchContainer />
      </div>
    )
  }
}
