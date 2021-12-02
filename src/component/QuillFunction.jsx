import React, {useState} from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import './QuillFunction.css'
import axios from "axios"

const QuillFunction = () =>{

  //const [value, setValue] = useState('')
  const [text, setText] = useState('')

  const handleChange = (value) => {
    setText(value)
  }

  const sendToDatabase = async() =>{
    console.log(text)
    const post = {
      text
    }
    await axios.put("/post/generate", post).then(response =>{
      console.log(response.data)
    })
    
  }

  return (
    <div>
    <ReactQuill className="estilo-quill" 
    value={text}
    onChange={(e) => handleChange(e)} 
    theme="snow"/>
    
    <button
    onClick={() => sendToDatabase()} 
    className="button-to-send"
    type="submit">Enviar</button>
    
    </div>
  )
}

export default QuillFunction;