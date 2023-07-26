import axios from "axios";
import React, { useEffect, useState } from 'react';
import './App.css';
import KeyPadComponent from './components/KeyPadComponent';
import ScreenComponent from './components/ScreenComponent';


function App() {
  const [result, setResult] = useState("");
  const [entries, setEntries] = useState("");


  useEffect(() => {
    try {
      const checkEntries = true
      if (checkEntries) {
        calculate(entries.toString())
      }
    } catch (error) {
      console.log(error)
    }
  }, [entries])

  const onClick = (button) => {
    switch (button) {
      case "=":
        if (entries !== "" && entries !== "Error") {
          calculate(entries.toString())
        }
        break;

      case "C":
        setEntries("")
        setResult({ answer: "", final: false })
        break;

      case "CE":
        if (entries === "Error") {
          setEntries("")
          setResult({ answer: "", final: false })
        } else {
          setEntries(entries.toString().slice(0, -1))
        }
        break;

      default:
        (entries === "Error") ?
          setEntries(button)
          :
          setEntries(entries + button);
    }

  };


  const calculate = async (problem) => {
    var expression = ''
    if (problem.includes('--')) {
      expression = setEntries(problem.replace('--', '+'))
    } else {
      expression = problem
    }

    try {
      const response = await axios.post('/api/v1/calculate', { expression })
      setResult(response.data.result)

    } catch (e) {
      console.log(`API Error: ${e}`)
      return 'error'
    }
  };

  return (
    <>
      <div className="main">
        <ScreenComponent entries={entries} result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </>
  )

}

export default App;