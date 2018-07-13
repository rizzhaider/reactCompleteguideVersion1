import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {id:'hjjgg1', name:"rizz", age:26},
      {id:'qqwe1', name:"messi", age: 31},
      {id:'xscds1',  name:"haider", age: 24}
    ],

    showPersons:false,
  }
  switchNameHandler = (newNmae) =>{
    console.log(this.state)
    //DONT Do This--  this.state.persons[0].name = "ali"
    this.setState({
      persons:[
        {name:newNmae, age:26},
        {name:"messi", age: 31},
        {name:"haider", age: 26}
      ]
    })
  }


  chnageNameHandler = (event) =>{
    console.log(this.state)
    //DONT Do This--  this.state.persons[0].name = "ali"
    this.setState({
      persons:[
        {name:"rizz", age:26},
        {name:event.target.value, age: 31},
        {name:"haider", age: 26}
      ]
    })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});

  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
                            age={person.age}
                            key={person.id}
                            click={() => this.deletePersonHandler(index)} />
          })}
           
        </div> 
      )
     
      
    }
    return (
      <div className="App">
       <h1>Hello moto</h1>
       <p> This is really working bro!</p>
       <button style={style} onClick={this.toggleHandler}>Toggle Button</button>
      {persons}      
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hello messi'))
  }
}

export default App;
