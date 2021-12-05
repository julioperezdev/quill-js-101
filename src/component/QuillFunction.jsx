import React, {useState, useEffect} from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import './QuillFunction.css'
import axios from "axios"
import {useForm} from "react-hook-form"

const QuillFunction = () =>{

  const {register, handleSubmit} = useForm()

  const [complete, setComplete] = useState(0)
  const [numberClass, setNumberClass] = useState(null)
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  
  const allFormats = ["background","color", "header", "bold", "italic", "underline", "align"]

  const textHandleChange = (value) => {
    console.log(value)
    setText(value)
  }

  const titleHandleChange = (value) => {
    console.log(value.target.value)
    setTitle(value.target.value)
  }

  const numberClassHandleChange = (value) => {
    console.log(value.target.value)
    setNumberClass(value.target.value)
  }

  const emptyValues = () =>{
    setTitle("")
    setText(null)
    setNumberClass(0)
  }

  const checkIfHaveTitle = (title) =>{
    return title === "" || !title ? false : true
  }

  const checkIfHaveText = async(text) => {
    return true
  }

  const checkIfHaveNumberClassAndIsUnique = (numberClass) =>{
    //we should generate a service that can search every number classes to return boolean 
  }

  const sendToDatabase = async() =>{
    //console.log(data)
    const post = {
      title,
      numberClass,
      text
    }
    checkIfHaveTitle(title)
    checkIfHaveText(text)
    //checkIfHaveNumberClassAndIsUnique(numberClass)

    console.log(post)
    await axios.put("/post/generate", post).then(response =>{
      console.log(response.data)
      if(response.data.title !== title){
        return console.log("No se ha guardado")
      }
      console.log("se ha guardado")
      emptyValues()
    })
    
  }

  

  return (
    <div>
        <ReactQuill className="estilo-quill" 
        value={text}
        onChange={(e) => textHandleChange(e)} 
        //formats={allFormats}
        theme="snow"/>
      
      {/* <form action="" onSubmit={handleSubmit(sendToDatabase)}> */}
      <input 
      //{...register("title")}
      placeholder="title"
      onChange={(e) => titleHandleChange(e)}
      value={title}
      />
      <input 
     //  {...register("numberClass")}
      placeholder="number class"
      onChange={(e) => numberClassHandleChange(e)}
      value={numberClass}
      />
      
      <button
      onClick={() => sendToDatabase()} 
      className="button-to-send"
      type="submit">Enviar</button>
      
      {/* </form> */}
    </div>
  )
}

export default QuillFunction;