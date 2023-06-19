import React, { useState } from 'react';

  function Forms2()
   {
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');

   const handleFName = (e) => {
      setFname(e.target.value);
    };
    const handleLname = (e) => {
        setLname(e.target.value);
      };
    const handleAge = (e) => {
        setAge(e.target.value);
      };

      const handlePhone = (e) => {
        setPhone(e.target.value);
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handleCity = (e) => {
        setCity(e.target.value);
      };
      const handleGender = (e) => {
        setGender(e.target.value);
      };
      const handleState = (e) => {
        setState(e.target.value);
      };
  
    
    const handleSubmit = (e) => {
      e.preventDefault();
      document.writeln(Fname);<br/>
      document.writeln(Lname);<br></br>
      document.writeln(age);<br></br>
      document.writeln(phone);<br></br>
      document.writeln(email);<br></br>
      document.writeln(city);<br></br>
      document.writeln(gender);<br></br>
      document.writeln(state);<br></br>

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>
            Forms Using Controlled Components
        </h1><br></br>
        <label>
          FirstName:
          <input type="text" value={Fname} onChange={handleFName} />
        </label><br></br>
        <br />
        <label>
          LastName:
          <input type="text" value={Lname} onChange={handleLname} />
        </label><br></br>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={handleAge} />
        </label><br></br>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmail} />
        </label><br></br>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhone} />
        </label><br></br>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={handleCity} />
        </label><br></br>
        <br />
        <label>
            Gender:
            <input type="radio" value={gender} onChange={handleGender}/>Female
            <input type="radio" value={gender} onChange={handleGender}/>Male
        </label><br></br><br></br>
        <label>
            State:
            <select value={state} onChange={handleState}>
                <option >TamilNadu</option>
                <option >Kerala</option>
            </select>
        </label><br></br><br></br>
        <button type="submit">Submit</button>
      </form>
    );
};
    export default Forms2;

  
  