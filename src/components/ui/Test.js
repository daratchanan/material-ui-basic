import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export default function Test() {
   const [input, setInput] = useState("");
   const [num, setNum] = useState(0);

   const handleInput = (event) => {
      setInput(event.target.value);
   };

   const handleNum = (event) => {

      debugger;
      if (num < 0) {
         setNum(0);
      } else {
         setNum(Number(event.target.value));
      }
      debugger;
   };


   return (
      <>
         <TextField
            label="Outlined"
            variant="outlined"
            onChange={handleInput}
         />
         <TextField
            label="Number"
            type="number"
            variant="outlined"
            onChange={handleNum}
            value={num}
         />
         <Typography variant="h6" gutterBottom>
            {input.length}
         </Typography>
         <Typography variant="h6" gutterBottom>
            {num}
         </Typography>
      </>
   )
}
