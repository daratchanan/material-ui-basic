import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import Header from "../components/ui/Header";
import theme from "./ui/Theme";
import Test from "./ui/Test";

function App() {

   return (
      <ThemeProvider theme={theme}> 
         <Header />
         Hello
         <Test />
      </ThemeProvider>

   );
}

export default App;
