import React, {useState} from 'react'

export default function TextForms(props) {

   

    const handleUpClick = (event)=>{
        event.preventDefault() // button clicked page reload problem
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick = (event)=>{
        event.preventDefault() // button clicked page reload problem        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClear = (event)=>{
        event.preventDefault() // button clicked page reload problem        
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "success")
    }
    
    
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    
    const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className="container" style={{color:props.mode === 'light' ? 'black':'white'}} >
        <h2 >{props.heading} </h2>
            <form>   
                <div className="form-group" >    
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#212529':'white',color:props.mode === 'dark'?'white':'black'}}  id="exampleFormControlTextarea1" rows="10"></textarea>
                </div><br/>
            <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleClear} >Clear</button>
            {/* <button className="btn btn-primary mx-3" onClick={hanldeDarkMode}>{btnText}</button> */}
            </form>
    </div>


    <div className="conatiner my-3" style={{color:props.mode === 'light' ? 'black':'white'}} >
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length-1} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
</>
  )
}
