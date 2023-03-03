import React ,{useRef,useState,useEffect} from 'react';
import '../styles/App.css';

//complete the following using forward refs concept 

const InputField=React.forwardRef((prop, ref)=>{

  const shivAni=(event)=>{
    prop.setValue(event.target.value);
  }
    return(
    <div>
      <input id="input" type="text"  value={undefined} ref={ref} onChange={shivAni}/>
    </div>
    )
    })
export default InputField;