import React, {useState, useEffect} from "react"
import axios from "axios"
import ReactQuill from 'react-quill';
import "./PostRepository.css"

import { BrowserRouter as  Redirect, Link } from 'react-router-dom'
import ParticularPost from "./ParticularPost";

const PostRepository = () =>{

  const [value, setValue] = useState(false)
  const [read, setRead] = useState(false)
  const [list, setList] = useState([])

  const getAllPost = async() =>{
    
    await axios.get("/post/getall").then(async response =>{
        console.log(response.data)
        setList(response.data)
        console.log("el valor es -> "+list)
        setValue(true)

    })
    
  }


  const readPost = ()=>{
      setRead(true)
  }

  useEffect(async() => {
    await getAllPost()
  }, [])

  return (
    !value ? <p>No hay datos</p> : 
    <div>
        {list.map(particular => (
            <div className="each-post">
                <h3 className="each-post-number">clase {particular.numberClass}</h3>
                <h1 className="each-post-title">{particular.title}</h1>
                <Link className="each-post-link" to={"/particular-blog/"+particular.numberClass}>leer</Link>
            </div>
        ))}
    </div>
  )
}

export default PostRepository;