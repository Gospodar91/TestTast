import React, { useState, ChangeEvent } from "react";
import {FormProps} from "../interfaces"


const Form: React.FC<FormProps> = (props) => {
  const [textTitle, setTextTitle] = useState<string>();
  const [textBody, setTextBody] = useState<string>();
  const changeHandlerTitle=(event:ChangeEvent<HTMLInputElement>)=>{
      setTextTitle(event.target.value)
  }
  const changeHandlerBody=(event:ChangeEvent<HTMLInputElement>)=>{
      setTextBody(event.target.value)
  }
  const keyPress=(event:React.KeyboardEvent)=>
  {
if(event.key==='Enter'){
   props.onAdd(textTitle!,textBody!)
  
    setTextTitle('')
    setTextBody('')

}
  }
  return (
    <div className="input-field">
        <form className='form' onKeyPress={keyPress}>
      <input 
      onChange={changeHandlerTitle}
      value={textTitle}
      placeholder='Enter Title'
      type="text" id="title" />
      <label htmlFor="title" className="active">
      Enter Title
      </label>
      <input 
      onChange={changeHandlerBody}
      value={textBody}
      placeholder='Enter description'
      type="text" id="body" />
      <label htmlFor="body" className="active">
     Enter description
      </label>
      <h3> Fill the blanks and press Enter</h3>
      </form>
    </div>
  );
};
export default Form