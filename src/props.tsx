import React from 'react';
import './App.css';


//tsx with react props
interface AppProps {
  headerText: string;
//optional props
  extraText?: string;
}


//                            the default text is used if the extraText prop is not defined
const  App = ({headerText, extraText="default text"}: AppProps) => {
  return (
    <div className="App">
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p> }
    </div>
  );
}

export default App;
