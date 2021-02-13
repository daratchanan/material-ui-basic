import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export default function Test() {
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [result, setResult] = useState(0);
   

   const handleNum1 = (e) => {
      setNum1(Number(e.target.value))
      setResult(num2+Number(e.target.value))
   };

   const handleNum2 = (e) => {
      setNum2(Number(e.target.value))
      setResult(num1+Number(e.target.value))
   };



   return (
      <>
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

         <Typography
            variant="h5"
         >
            {result}
         </Typography>
      </>
   )
}
