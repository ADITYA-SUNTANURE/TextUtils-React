import React,{useState} from 'react'

export default function TextForm(props) {

    const handleOnClick = ()=>{
        console.log("Uppercase was clicked")

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Changed to Uppercase !','success');
    }

    const handleOnClick1 = ()=>{
        console.log("Lowercase was clicked")

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Changed to Lowercase !','success');
    }

    const handleClearClick = ()=>{
      console.log("Lowercase was clicked")

      setText("");
  }
    
    const handleCopy = ()=>{
      console.log("I am copy")
      var text = document.getElementById("mybox")
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);

    }


    const handleOnChange = (event)=>{
        console.log("Onchange happened")
        setText(event.target.value)
        
    }

    const [text,setText] = useState('text')
  return (
    <>
  <div className={`textbox text-${props.mode === 'dark'?'white':'black'}`}>
    <h2>{props.heading}</h2>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="9"></textarea>

    <button className='btn btn-primary my-4 mx-2' onClick={handleOnClick}>Convert to Uppercase</button>
    <button className='btn btn-primary my-4 mx-2' onClick={handleOnClick1}>Convert to Lowercase</button>
    <button className='btn btn-primary my-4 mx-2' onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary my-4 mx-2' onClick={handleCopy}>Copy Text</button>

  </div>

<div className={`container text-${props.mode === 'dark'?'white':'black'}`}>
<h1 className='detail my-3'>Details :</h1>
  <p> {text.split(" ").length} words and {text.length} characters.
  </p>
  <p>{0.08 * text.split(" ").length} time read</p>

</div>
  
  </>
  )
}
