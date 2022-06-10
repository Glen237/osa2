import React from 'react'

const PhoneInput = ({handleSubmit,handleNameChange,handlePhoneNumberChange,name,phone}) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      nimi: <input onChange={handleNameChange} value={name}/>
      </div>
      <div>
     numero: <input onChange={handlePhoneNumberChange} value={phone}/>
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
  )
}

export default PhoneInput