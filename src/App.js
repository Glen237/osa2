import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' ,phone:"123-304"}
      ],
      newName: '',
      newPhoneNumber:''
    }
  }

  render() {
    const handleNameChange =(event)=>{
this.setState({newName:event.target.value})
    }
    const handlePhoneNumberChange =(event)=>{
      this.setState({newPhoneNumber:event.target.value})
          }
    const handleSubmit = (event)=>{
      event.preventDefault();
      
let nameExists = false;

for(let i=0;i<this.state.persons.length;i++){
  if(this.state.persons[i].name === this.state.newName){
    nameExists = true;
  }
}
if(nameExists==true){
  alert("name already exists")
  
}else{
  this.state.persons = [...this.state.persons,{name:this.state.newName,phone:this.state.newPhoneNumber}]
}

this.setState({newName:""});
this.setState({newPhoneNumber:""})
    }
    
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={handleSubmit}>
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
           return <li key={person.name}>{person.name + " " + person.phone}</li>
         })}
        </ul>
      </div>
    )
  }
}

export default App