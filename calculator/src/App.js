//https://github.com/katuboinasuresh/modulee
//https://calculator-cal.herokuapp.com/
import { useState } from "react";
import './App.css';

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const oper = ["/", "*", "+", "."]

  const updateCalc = (val) => {
    if (oper.includes(val) && calc === "" || oper.includes(val) && oper.includes(calc.slice(-1))) {

      return;
    }

    setCalc(calc + val)

    if (!oper.includes(val)) {
      setResult(eval(calc + val).toString())
    }

  }


  const createdigit = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return digit
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const c = () => {
    if (calc === "") {

      return
    }
    const val = calc.slice(0, -1);
    setCalc(val)

  }

  return (
    <div className="App">
      <div className="cal">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={c}>C</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
        </div>
        <div className="digits">
          {createdigit()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
