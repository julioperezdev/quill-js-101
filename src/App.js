
import React from "react"
import QuillFunction from "./component/QuillFunction";
import TextComponent from "./component/TextComponent";
import PostRepository from "./component/PostRepository";
import ParticularPost from "./component/ParticularPost";
import PostState from "./context/post/PostState";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HeaderComponent from "./component/header/HeaderComponent";
import "./component/header/HeaderComponent.css"
import QuillClass from "./component/QuillClass";

const App = () => {
  return (
    <Router>
      <PostState>
      <div className="all-links">
      <Link to="/">crear</Link>
      <Link to="/post">Post</Link>
      <Link to="/all">All</Link>
      </div>
      <Routes> 
        <Route exact path="/" element = {<QuillFunction/>}/>
        <Route path="/post" element = {<QuillClass/>}/>
        <Route path="/all" element = {<PostRepository/>}/>
        <Route path="/particular-blog/:classNumber" element = {<ParticularPost/>}/>
      </Routes>
      </PostState>
    </Router>
  );
}

export default App;
