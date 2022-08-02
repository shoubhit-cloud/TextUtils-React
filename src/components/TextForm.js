import React, { useState } from "react";
//useState - A React hook for function based

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "warning");
  };

  const handleRanClick = () => {
    let newText = `Lyrics
        Did I really just forget that melody?
        Nah, da da dadadada nananana
        Alright, da da dadadada
        Modest with my jewels but check the bank
        Finally got that money, say my thanks
        When I popped off then your girl gave me just a little bit of lockjaw
        Baby so cold he from the North, he from the Canada
        Bankroll so low, I got nothing else that I can withdraw
        Ran out the door`;
    setText(newText);
    props.showAlert("Random Data Filled", "success");
  };

  const handleInClick = () => {
        let newText = text;
        var s = "";
        var i = 0;
        while (i < newText.length) {
            var n = newText.charAt(i);
            if (n === n.toUpperCase()) {
                // *Call* toLowerCase
                n = n.toLowerCase();
            } else {
                // *Call* toUpperCase
                n = n.toUpperCase();
            }

            i += 1;
            s += n;
        }

        setText(s);
        props.showAlert("Converted to InverseCase", "success");
  };

  const handleTitClick = () => {
    let newText = text;
    let a = newText.split(" ");
    let ltext = "";
    a.forEach(
        (item) =>{
            item = item.charAt(0).toUpperCase() + item.slice(1);
            ltext += item + " ";
        }
    );
    setText(ltext);
    props.showAlert("Converted to TitleCase", "success");
  }

  const handleCpClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "primary");
  }

  const handleExSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  }




  const handleonChange = (event) => {
    //onChange is needed as we are using state variable {text} in
    // textarea, so while changing it, it is req. also in input and etc

    // console.log('OnChange');
    setText(event.target.value); // text + added text
  };

  //const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");
  // a variable text is holding default value 'Enter text here' and text can
  // be updated only with function setText and text is updated at all place
  // learn useState Syntax ^

  // text = "lalala" // wrong way to update state variable
  // setText('lalalala') // correct way

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Your text here"
            onChange={handleonChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'grey':'white',
                    color: props.mode==='dark'?'white':'#042743'}}//object in js
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRanClick}>
          Random Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTitClick}>
          TitleCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInClick}>
          InverseCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCpClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExSpaces}>
          Remove extra Spaces
        </button>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        {/* text string features using js */}
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
      <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in textbox to preview"}</p>
      </div>
    </>
  );
}
