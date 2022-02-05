import React, {useState} from 'react';

export default function TextArea(props) {
  const [text, setText] = useState("");
      let calcstyleobj = ()=>{
        if (props.mode !=='light'){
          
          return {height:300,
            border:'2px solid black',
            color: "black",
            backgroundColor: 'white'};
          }
          else{
            return {
          border:'2px solid white',
          height:300,
          color: "white",
          backgroundColor: '#02183a'
        };
      }
    };
    const upperCase=()=>{
      setText(text.toUpperCase());
      props.showAlert('Changed the text to upperCase', 'success');
    }
  const changeText = (event)=>{
    setText(event.target.value);
  }
  const RemoveExtraLines = ()=>{
    let str = "";
    for(let i = 0; i<text.length; i++){
    if((text.charAt(i) === '\n' )&&( text.charAt(i+1) === '\n')){
    }else{
        str += text.charAt(i);
    }
  }
  props.showAlert('extra lines removed', 'success');
  setText(str);
}
  const lowerCase = ()=>{
    setText(text.toLowerCase());
    props.showAlert('changed the text to lowerCase', 'success');
  }
  const sentenceCase = ()=>{
    let text1 = text.toLowerCase();
    let str="";
    for(let i = 0; i<text.length; i++){ 
      if (text1.slice(i-1, i+2) === ' i '){
        str += text1.charAt(i).toUpperCase();
      }
      else if(i === 0){
        str+=text1.charAt(i).toUpperCase();
      }
      else if((text1.charAt(i-2) === '.' )&&(text1.charAt(i-1) === ' ')){
        str+=text1.charAt(i).toUpperCase();
      }
      else{
        str+=text1.charAt(i);
      }
    }
    setText(str);
    props.showAlert('Changed the case to sentence case', 'success');
  }
  const calcWords = ()=>{
      let arr = text.split(' ');
      let counter = 0;
      arr.forEach(element => {
        if (element !== ''){
          counter+=1;
        }
      });
      return counter;
  }
  const clearText = ()=>{
      setText('');
      props.showAlert('cleared the workspace', 'danger')
  }
  const CopyText = ()=>{
    let text = document.getElementById('floatingTextarea2');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('text copied to clipboard', 'success');
  };
  const RemoveExtraSpaces = ()=>{
      let str = "";
      for(let i = 0; i<text.length; i++){
      if((text.charAt(i) === ' ' )&&( text.charAt(i+1) === ' ')){
  
      }else{
          str += text.charAt(i);
      }
    };
    setText(str);
    props.showAlert('extra spaces removed', 'success');
}
  return (
      <>
      {/* <div className={`container my-3 text-${props.mode==='dark'?'dark':'light`}> */}
      <div className={`container my-3  text-${props.mode==='dark'?'dark':'light'}`}>
        <h3>Please enter your text below...</h3>
        <div className="form-floating">
            <textarea style={calcstyleobj()} className="form-control" placeholder="Enter the text here" id="floatingTextarea2" onChange={changeText} value={text}></textarea>
            <label htmlFor="floatingTextarea2">Enter your text here:</label>
            <div className="container">
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary my-2 mx-2 " onClick={upperCase}>Upper Case</button>
                </div>
                <div className="col">
                  <button className="btn btn-primary my-2 mx-2" onClick={RemoveExtraLines}>Remove Extra Lines</button>
                </div>
                <div className="col">
                  <button className="btn btn-primary my-2 mx-2" onClick={lowerCase}>Lower Case</button>
                </div>
                <div className="col">
                  <button className="btn btn-primary my-2 mx-2" onClick={sentenceCase}>Sentence Case</button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-danger  my-2 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Clear text</button>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary my-2 mx-2" onClick={CopyText}>Copy Text</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary my-2 mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark" id="exampleModalLabel">Are you sure</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-dark">
                Are you sure to clear the text.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={clearText} data-bs-dismiss="modal">Confirm</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <h3>Your Text Summary</h3>
          <p>{calcWords()} Words and {text.length} Characters <br />
          {0.008 * calcWords()} Minutes Read
          </p>
          <h3>Preview</h3>
          <pre>{text.length>0?text:"please enter the text above to preview it here."}</pre>
        </div>
        </div>
      </>
  );
}
