import React from "react";
import PhoneInput from "./components/PhoneInput";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: "Arto Hellas", number: "123-304" }],
      newName: "",
      newPhoneNumber: "",
    };
  }
componentDidMount(){
  
  fetch(' http://localhost:3002/persons',{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }

  })
  .then(response => response.json())
  .then((data) =>{
    console.log(data)
    this.setState({persons:data})
  })}
 
 


  render() {

    
    const handleNameChange = (event) => {
      this.setState({ newName: event.target.value });
    };
    const handlePhoneNumberChange = (event) => {
      this.setState({ newPhoneNumber: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();

      let nameExists = false;

      for (let i = 0; i < this.state.persons.length; i++) {
        if (this.state.persons[i].name === this.state.newName) {
          nameExists = true;
        }
      }
      if (nameExists === true) {
        alert("name already exists");
      } else {
        this.setState({persons:[
          ...this.state.persons,
          { name: this.state.newName, number: this.state.newPhoneNumber },
        ]})
      }

      this.setState({ newName: "" });
      this.setState({ newPhoneNumber: "" });
    };

    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <h2>Numerot</h2>
        <PhoneInput
          name={this.state.newName}
          phone={this.state.newPhoneNumber}
          handleNameChange={handleNameChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleSubmit={handleSubmit}
        />
        <ul>
          {this.state.persons.map((person) => {
            return (
              <li key={person.name}>{person.name + " " + person.number}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
