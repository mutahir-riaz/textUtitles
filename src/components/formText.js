import React,{useState} from 'react'


export default function FormText(props) {
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
      
        // Set the text to be spoken
        msg.text = text; // Assuming 'text' is the variable containing the text you want to speak
      
        // Configure additional properties (optional)
        msg.volume = 1; // Volume (0 to 1)
        msg.rate = 1; // Speaking rate (0.1 to 10)
        msg.pitch = 1; // Pitch (0 to 2)
      
        // Choose a voice (optional)
        const voices = window.speechSynthesis.getVoices();
        msg.voice= voices[12]
        console.log(voices);
        props.showAlert("Speaking...","success")
        // Select a voice by its index or name, e.g., msg.voice = voices[0];
      
        // Speak the text
        window.speechSynthesis.speak(msg);
      };
      
    const handleUpClick =()=>{console.log("Everything is okay in handleUpClick"); 
    setText(text.toUpperCase())
    props.showAlert("Text is converted into uppercase","success")
}
    const handleLoClick =()=>{console.log("verything is okay in handleLoClick"); 
    setText(text.toLowerCase())
    props.showAlert("Text is converted into lowercase","success")}

    const [text,setText]=useState("Enter the text here")
    const [beforeReserve,reversed]=useState("")
    const [word, setWord] = useState(''); // Changed to setWord
  const [occurrence, setOccurrence] = useState(0);
  const wordReverse=()=>{
    const reversedWord = word.split('').reverse().join('');
    reversed(reversedWord)
    props.showAlert("Text is reserved","success")
  }
    const handleChange = (event)=>{
        console.log("onclick");
        setText(event.target.value)
    }
    const finderWord = (event)=>{setWord(event.target.value)
        }
    const wordCount = ()=>{
        const newtext = text.toLowerCase()
        const wordo = newtext.split(/\W+/);
        const occurrences = wordo.filter(w => w === word.toLowerCase()).length;
        setOccurrence(occurrences);
        props.showAlert("Text word count run Successfully","success")
    }
    const clearText= ()=>{
        let myBox = document.getElementById("exampleFormControlTextarea1")
        myBox.select()
        setText('')
        props.showAlert("Textarea has been cleared","success")
    }
    const handleCopy = ()=>{
        let myBox = document.getElementById("exampleFormControlTextarea1")
        myBox.select()
        navigator.clipboard.writeText(myBox.value)
        props.showAlert("Text is copied to clipboard","success")
    }
    return (
        <>
        <div className='container mb-4' style={{color:props.mode==='light'?"black":'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control " style={{backgroundColor:props.mode==='light'?"white":'grey',color:props.mode==='light'?"black":'white'}} onChange={handleChange} value={text} id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button className='btn btn-primary ' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-3' onClick={speak}>Bol</button>
            <button className='btn btn-primary mx-3' onClick={wordReverse}>reverse</button>
            <button className='btn btn-primary mx-3' onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary mx-3' onClick={clearText}>Clear</button>
            <form className="d-flex" role="search" style={{color:props.mode==='light'?"black":'white'}}>
            <input className="form-control me-2 mt-3" type="search" onChange={finderWord} placeholder="Search" aria-label="Search"/>
            <button className='btn btn-primary' type='button' onClick={wordCount}>wordcount</button>
         
            </form>
            <p>The"{word}" has {occurrence} occurrences in the text {beforeReserve}</p>
        </div>
        <div className="container" style={{color:props.mode==='light'?"black":'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008*(text.split(" ").length)} Mintues to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div></>
    )
}
