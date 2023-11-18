import React, {useState} from 'react'
import './App.css';

function App() {
  //UseState Hooks to update and Maintain data

  const [num1, setNum1]= useState(null);
  const [num2, setNum2]= useState(null);
  const [ans, setAns]= useState(null);
  const[valid, setIsValid]= useState(true);
  const [ren, isRen]=useState(false);

//Function that Computes Calclulations
  function getAns(n1, n2, val){
    if(val=='add'){
      setAns(parseInt(n1) + parseInt(n2));
    }
    if(val=='sub'){
      setAns(parseInt(n1) - Math.abs(parseInt(n2)));
    }

    if(val=='mult'){
      setAns(parseInt(n1) * parseInt(n2))
    }

    if(val=='div'){
      setAns(parseInt(n1) / parseInt(n2))
    }
  }
// Checks whether number is valid or not
  function validate(e){
    let val= e.target.name;

    if(num1==null || num2 == null){
      setIsValid(false);
      return;
    }

    if (num1.trim() === '' || isNaN(Number(num1))) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    if (num2.trim() === '' || isNaN(Number(num2))) {
      console.log('returned')
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }


   if(valid){
    getAns(num1, num2, val)
   }
    isRen(true);
  }

return (
<div className="App">
  <h3>React Calculator</h3>
  <input type="text" placeHolder="Num 1"
    onChange={(e)=>{
      e.preventDefault();
      setNum1(e.target.value)
    }}
  />
  <input type="text" placeHolder="Num 2"
      onChange={(e)=>{
      e.preventDefault();
      setNum2(e.target.value)
    }}
   />
  <div className="buttons">
    <button onClick={validate} name='add' >+</button>
    <button onClick={validate} name='sub' >-</button>
    <button onClick={validate} name='mult' >*</button>
    <button onClick={validate} name='div' >/</button>
  </div>
    {ren ?  <div className="ans">
    {valid ? <div style={{textAlign:'center'}}><p style={{color:'blue'}}><b>Success</b></p>Result is   <b>{ans}</b></div> : <div style={{textAlign:'center'}}><p style={{color:'red'}}><b>Error!</b></p>Invalid Input</div> }
    </div> : ""}
</div>
  );
}

export default App;
