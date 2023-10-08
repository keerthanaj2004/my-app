import React,{useState} from 'react'

export default function Textbox(props) {
  const handleupclick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleloclick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleclearclick=()=>{
    let newText="";
    setText(newText)
  }

  const handleonchange=(event)=>{
    setText(event.target.value)
  }
  const handleCopy=()=>{
    var text=document.getElementById("Textarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const[text,setText]=useState(''); //get text from form
  //you cant change the value of text directly, shld do it through settext
  return(
    <>
    <div style={{color:'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label">Text Box</label>
        <textarea className="form-control" id="Textarea1" value={text} style={{backgroundColor:'#252222', color:'white'}}  onChange={handleonchange} rows="10"></textarea>
        </div>
        <button className='btn btn-success mx-2' onClick={handleupclick}>Convert to UpperCase</button>
        <button className='btn btn-success mx-2' onClick={handleloclick}>Convert to LowerCase</button>
        <button className='btn btn-success mx-2' onClick={handleclearclick}>Clear Text</button>
        <button className='btn btn-success mx-2' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className='container my-2'>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length===1 ? 0:text.split(" ").length - 1} words and {text.length} characters</p>
    </div>
    </>
  )
}
