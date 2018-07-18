import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium'
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
  // switchNameHandler = (newNmae) =>{
  //   console.log(this.state)
  //   //DONT Do This--  this.state.persons[0].name = "ali"
  //   this.setState({
  //     persons:[
  //       {name:newNmae, age:26},
  //       {name:"messi", age: 31},
  //       {name:"haider", age: 26}
  //     ]
  //   })
  // }


  chnageNameHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex( p => {
      return p.id == id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    
    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});

  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); --this is way to copy object...
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person  click = {() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.chnageNameHandler(event, person.id)} />
          })}
           
        </div> 
      );
     style.backgroundColor = 'red';
     style[':hover'] = {
       backgroundColor : 'salmon',
       color :'black'
     }
      
    }
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes =  [red];
    }
    if(this.state.persons.length <= 1){
      classes.push('bold') // classes = [red, bold]
    }

    return (
      <StyleRoot>
      <div className="App">
       <h1>Hello moto</h1>
       <p className={classes.join(' ')}> This is really working bro!</p>
       <button style={style} onClick={this.toggleHandler}>Toggle Button</button>
        {persons}      
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hello messi'))
  }
}

export default Radium(App);
