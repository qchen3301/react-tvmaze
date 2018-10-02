import React, { Component } from 'react'
import Search from './Search';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="Header1">TVMaze React</h1>
        <Search />
      </div>
    )
  }
}
