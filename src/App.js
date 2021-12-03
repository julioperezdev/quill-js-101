
import React from "react"
import QuillFunction from "./component/QuillFunction";
import TextComponent from "./component/TextComponent";
import PostRepository from "./component/PostRepository";
import ParticularPost from "./component/ParticularPost";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Link to="/">crear</Link>
      <Link to="/post">Post</Link>
      <Link to="/all">All</Link>
      <Routes> 
        <Route exact path="/" element = {<QuillFunction/>}/>
        <Route path="/post" element = {<TextComponent/>}/>
        <Route path="/all" element = {<PostRepository/>}/>
        <Route path="/particular-blog/:id" element = {<ParticularPost/>}/>
      </Routes>
    </Router>
  );
}

export default App;
