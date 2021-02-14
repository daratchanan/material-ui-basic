import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


export default function Test() {
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [result, setResult] = useState(0);
   const [input, setInput] = useState("");
   const [textInput, setTextInput] = useState("");
   const [num3, setNum3] = useState([]);
   const [num4, setNum4] = useState(0);
   const [num5, setNum5] = useState(0);
   const [mul, setMul] = useState(0);

   const handleNum1 = (e) => {
      setNum1(Number(e.target.value))
      setResult(num2 + Number(e.target.value))
   };

   const handleNum2 = (e) => {
      setNum2(Number(e.target.value))
      setResult(num1 + Number(e.target.value))
   };

   const handleInput = (e) => {
      setInput(e.target.value)
   };

   const handleNum3 = (e) => {
      setTextInput(e.target.value);
      const ans = e.target.value;
      const res = ans.split(",");
      setNum3(res);
   };

   const handleReset = () => {
      setTextInput("")
      setNum3([]);
      setNum4("");
      setNum5("");
      setMul(0);
   };

   const handleNum4 = (e) => {
      setNum4(e.target.value)//num4=e.target.value
   };

   const handleNum5 = (e) => {
      setNum5(e.target.value)//num5=e.target.value
   };

   const handleMul = () => {
      setMul(num4 * num5) //mul=num4*num5
   };


   return (
      <>
         <div>
            <TextField
               label="Outlined"
               variant="outlined"
               value={num1}
               onChange={handleNum1}
            />
            <TextField
               label="Outlined"
               variant="outlined"
               value={num2}
               onChange={handleNum2}
            />
            <Typography variant="h5">{result}</Typography>
         </div>
         <div>
            <TextField
               variant="outlined"
               value={input}
               onChange={handleInput}
            />
            <Typography variant="h5">{input.length}</Typography>
         </div>
         <div>
            <TextField
               variant="outlined"
               onChange={handleNum3}
               value={textInput}
            />
            {num3.map(a =>
               <Typography variant="h5">{a}</Typography>
            )}
            <Button onClick={handleReset}>Reset</Button>
         </div>
         <div>
            <TextField
               variant="outlined"
               value={num4}
               onChange={handleNum4}
            />
            <Button
               variant="contained"
               onClick={handleMul}
            >
               x
            </Button>
            <TextField
               variant="outlined"
               value={num5}
               onChange={handleNum5}
            />
            <Typography
               variant="h5"
            >
               {mul}
            </Typography>
         </div>
      </>
   )
}
