import axios from "axios";
import React ,{useEffect,useState}from "react";
import PhoneInput from "./components/PhoneInput";
const App=()=>{
  const [persons, setPersons] = useState([])
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  useEffect(() => {
  fetch(' http://localhost:5000/api/persons').then(res=>res.json().then(data=>{
    setPersons(data.persons)
  }))
  }, [])
  
 
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setNumber( event.target.value );
  };
  const handleSubmit = async(event) => {
    event.preventDefault();

    let nameExists = false;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === name) {
        nameExists = true;
      }
    }
    if (nameExists === true) {
      alert("name already exists");
      return;
    } else {
      setPersons([
        ...persons,
        { name, number }]
    )
    }
    try {
      const res= await axios.post('http://localhost:5000/api/persons',JSON.stringify({name:name,number:number}),{
   headers:{
     'content-type':'application/json'
   }
 })
 console.log(res)

    } catch (error) {
      console.log(error)
    }
    setName("");
    setNumber("");
   
  }

    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <h2>Numerot</h2>
        <PhoneInput
          name={name}
          phone={number}
          handleNameChange={handleNameChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleSubmit={handleSubmit}
        />
        <ul>
          {persons && persons.map((person) => {
            return (
              <li key={person.name}>{person.name + " " + person.number}</li>
            );
          })}
        </ul>
      </div>
    );
  }


export default App;
