import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newPhoneNumber:''
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      this.setState({persons:response.data})
    })
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    
let nameExists = false;

for(let i=0;i<this.state.persons.length;i++){
if(this.state.persons[i].name === this.state.newName){
  nameExists = true;
}
}
if(nameExists==true){
alert("name already exists")

}
else { 
  const person = {
  name: this.state.newName,
  number: this.state.newPhoneNumber
}

axios.post('http://localhost:3001/persons', person)
  .then(response => {
    this.setState({persons:this.state.persons.concat(response.data)})
    this.setState({newName:""});
this.setState({newPhoneNumber:""})
  })
}
  }

  delete(id){
    console.log(id)
    if (!window.confirm("Do you really want to delete?")) {
      return;
    }
    axios.delete (`http://localhost:3001/persons/${id}`)
    .then(response =>{ this.setState({persons:this.state.persons.filter((item) => item.id!==id)})

    })
  }
  render() {
    console.log(this.state)
    const handleNameChange =(event)=>{
this.setState({newName:event.target.value})
    }
    const handlePhoneNumberChange =(event)=>{
      this.setState({newPhoneNumber:event.target.value})
          }
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            nimi: <input onChange={handleNameChange} value={this.state.newName}/>
            </div>
            <div>
           numero: <input onChange={handlePhoneNumberChange} value={this.state.newPhoneNumber}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
         {this.state.persons.map(person=>{
           return <li key={person.name}>{person.name + " " + person.number} 
           <button onClick={() => this.delete(person.id)}>Delete</button></li>
         })}
        </ul>
      </div>
    )
  }
}

export default App