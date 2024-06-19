import { useState } from 'react';
import './calculator.css';
export default function Calculator()
{
    const[inputvalue,setinputvalue]=useState("");
    function clearvalue()
    {
        setinputvalue("");
    }
    function displayvalue(value)
    {
        setinputvalue(inputvalue+value);
    }
    function calculate()
    {
        let answer=eval(inputvalue);
        setinputvalue(answer);
    }
    return(
        <div className="calculatecontainer">
            <div className="display">
                <div className="input">
                    <input type="text" value={inputvalue} />
                </div>
                </div>
                <div className="numberpanel">
                   <div  onClick={()=>displayvalue("/")}  className='divide'>/</div>
                   <div  onClick={()=>displayvalue(".")}  className="dot">.</div>
                   <div className='minus'onClick={()=>clearvalue()} >C</div>
                   <div onClick={()=>displayvalue("1")} > 1</div>
                   <div onClick={()=>displayvalue("2")}>2</div>
                   <div onClick={()=>displayvalue("3")}> 3</div>
                   <div onClick={()=>displayvalue("*")} className='multi'>X</div>
                   <div onClick={()=>displayvalue("4")} > 4</div>
                    <div  onClick={()=>displayvalue("5")}>5</div>
                   <div  onClick={()=>displayvalue("6")}>6</div>
                   <div  onClick={()=>displayvalue("-")} className="cross">-</div>
                   <div  onClick={()=>displayvalue("7")}>7</div>
                   <div  onClick={()=>displayvalue("8")}>8</div>
                   <div  onClick={()=>displayvalue("9")}>9</div>
                   <div  onClick={()=>displayvalue("+")} className="percentage">
                     +
                   </div>
                   <div  onClick={()=>displayvalue("0")} className='siber' >0</div>
                   <div onClick={()=>calculate()} className='equals'> =</div>
                </div>
        </div>
    )
}