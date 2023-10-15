import React, { useState } from 'react';

function TextEncryption(props) {
  const [inputText, setInputText] = useState('');
  const [deinputText, setdeInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setdecryptedText] = useState('');

  const encryptText = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (/[a-zA-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const isUpperCase = char === char.toUpperCase();
        const shiftedCharCode = charCode + 1;
        if ((isUpperCase && shiftedCharCode > 'Z'.charCodeAt(0)) || (!isUpperCase && shiftedCharCode > 'z'.charCodeAt(0))) {
          shiftedCharCode -= 26;
        }
        char = String.fromCharCode(shiftedCharCode);
      }
      result += char;
    }
    return result;
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEncryption = () => {
    const encrypted = encryptText(inputText);
    setEncryptedText(encrypted);
  };
  const decryptText = (text)=>{    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (/[a-zA-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const isUpperCase = char === char.toUpperCase();
        const shiftedCharCode = charCode - 1;
        if ((isUpperCase && shiftedCharCode > 'Z'.charCodeAt(0)) || (!isUpperCase && shiftedCharCode > 'z'.charCodeAt(0))) {
          shiftedCharCode -= 26;
        }
        char = String.fromCharCode(shiftedCharCode);
      }
      result += char;
    }
    return result;}
  const handleOutputChange = (event)=>{setdeInputText(event.target.value);}
  const handleDecryption = ()=>{ 
    const decrypted = decryptText(deinputText);
    setdecryptedText(decrypted);}
  return (
    <div style={{color:props.mode==='light'?"black":'white'}}>
      <h1>Text Encryption</h1>
      <label>
        Enter text:
        <input type="text" value={inputText} onChange={handleInputChange} className='mx-1' />
        <button onClick={handleEncryption}>Encrypt</button>
      </label> <br />
      <label className='mt-3 mb-2'>Enter text: <input type="text" value={deinputText} onChange={handleOutputChange} /></label>
      
      <button onClick={handleDecryption}className='mx-1'>Decrypt</button>
      <p>Original Text: {inputText}</p>
      <p>decrypt Original Text: {deinputText}</p>
      <p>Encrypted Text: {encryptedText}</p>
      <p>deEncrypted Text: {decryptedText}</p>
    </div>
  );
}

export default TextEncryption;
