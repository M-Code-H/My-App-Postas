// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "../src/components/Footer";
import PostDetails from "../src/components/Posts/PostDetails";
import  CreatePost  from './components/Posts/CreatePost';
import NotFounds from './components/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() { 
  return (
    <Router>
    <div className="App">
      <Header />
       <main className='container'>
       <Routes>
          <Route exact path="/My-App-Postas" element={<Home/>}/>
          <Route  path={`/My-App-Postas/:id`} Component={PostDetails } />
          <Route   path="/My-App-Postas/create" Component={CreatePost}/>
          <Route   path={'/My-App-Postas/*'} element={<NotFounds/>}/>
        </Routes>
       </main>
        <Footer />
        </div>
    </Router>

  );
}

export default App;
 