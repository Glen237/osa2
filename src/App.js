import React from "react";
import PhoneInput from "./components/PhoneInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: "Arto Hellas", phone: "123-304" }],
      newName: "",
      newPhoneNumber: "",
    };
  }
componentDidMount(){
  fetch('./db.JSON').then(res=>res.json()).then(data=>console.log(data))
}
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
        this.state.persons = [
          ...this.state.persons,
          { name: this.state.newName, phone: this.state.newPhoneNumber },
        ];
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
              <li key={person.name}>{person.name + " " + person.phone}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
