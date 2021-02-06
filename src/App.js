import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
   const [result, setResult] = useState(0);
   const [isZero, setIsZero] = useState(false);

   const addR = () => {
      let count = result + 1
      setResult(count);
      fan(count);
   };

   const desR = () => {
      let count = result - 1
      setResult(count);
      fan(count);
   };

   const resetR = () => {
      setResult(0);
   };

   const fan = (v) => {
      if (v <= 0) {
         setIsZero(true)
      } else {
         setIsZero(false)
      }
   };

   return (
      <>
         <div style={{ textAlign: "center" }}>
            <Button
               variant="contained"
               color="secondary"
               onClick={desR}
               // disabled={result <= 0? true : false}
               disabled={isZero}

            >
               -
            </Button>
            <TextField
               id="outlined-basic"
               variant="outlined"
               value={result}
            />
            <Button variant="contained" color="secondary" onClick={addR}>
               +
            </Button>
            <Button variant="contained" color="secondary" onClick={resetR}>
               Reset
            </Button>
         </div>
      </>
   );
}

export default App;
