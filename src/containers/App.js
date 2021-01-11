import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
// import { robots } from './robots.js';
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then (response=> {
            return response.json();
        })
        .then(todos => {
            this.setState({robots : todos});
        })
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }

    render()   {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
         return robot.title.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
        <h1>Loading Bots</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboBuds!</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>     
            ); 
        }

    }


export default App; 