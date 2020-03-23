import React, { Component } from 'react'
import Search from './components/tracks/Search'
import Tracks from './components/tracks/Tracks'
class App extends Component {
    render() {
        return (
            <div>
                <Search />
                <Tracks />
            </div>
        )
    }
}


export default App;
