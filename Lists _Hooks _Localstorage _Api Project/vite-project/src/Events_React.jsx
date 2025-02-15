import './App.css'
import React,{useState} from 'react'

const Change = () => {
    const [txt, setTxt] = useState("Not Clicked");
  
    const Clicked = () => {
      setTxt("Button Clicked");
    };
  
    return (
      <div>
        <h4>{txt}</h4>
        <button onClick={Clicked}>Click Me!</button>
      </div>
    );
  }
    const InputForm = () => {
      const [value, setValue] = useState("");
  
      const handleChange = (e) =>{
          setValue(e.target.value);
      }
    return (
      <div>
          <form>
              <label htmlFor="name">Enter Your Name:</label>
              <input id="name" type="text" value={value} onChange={handleChange} />
              <h3>Hii {value} !</h3>
          </form>
      </div>
    )
  };  

const Events_React = () => {
    
  return (
    <>
      <h3>Handling Events in React Examples</h3>
      <div>
        <Change />
        <br />
        <br />
      </div>
      <div>
        <InputForm />
      </div>
    </>
  )
}

export default Events_React
