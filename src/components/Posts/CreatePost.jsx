import { useState } from "react";
import Posts from "./Posts";
import "../../../data/db.json"
import { useNavigate } from "react-router-dom";

function CreatePost (pr) {
    const historyPush = useNavigate();
    
    const [valueInput , setValueInput] = useState({
        author: "",
        title : "" ,
        body : "" , 
        urlImag : "",
    });
    const handleForm = (e) => {
        e.preventDefault();
        let Post = new Object();
        Post.title = valueInput.title;
        Post.body = valueInput.body;
        Post.image = valueInput.urlImag;
        Post.author = valueInput.author;


        fetch(`https://6665831dd122c2868e40e799.mockapi.io/angle/posts/posts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Post),
        }).then(() => {
          console.log("post added");
          
        // location.href =' http://localhost:5173';
            historyPush('/My-App-Postas')
        });
      };
    return (
        <section className="create-post">
            <h2>Add New Post</h2>
            <form action="" onSubmit={handleForm}>
                <label htmlFor="">Blog title :</label>
                <input name="title" type="text" value={valueInput.title} onChange={(e)=>{
                    setValueInput({...valueInput , title : e.target.value})
                }}/>
                <label htmlFor="">Blog Image :</label>
                <input type="url" value={valueInput.urlImag} onChange={(e)=>{
                    setValueInput({...valueInput , urlImag : e.target.value})
                }}  required />
                <label htmlFor="">Blog body :</label>
                <textarea rows={10} required value={valueInput.body} onChange={(e)=>{
                    setValueInput({...valueInput , body : e.target.value})
                }}></textarea>
                <label htmlFor="">Blog author :</label>
                <select value={valueInput.author} onChange={(e)=>{
                    setValueInput({...valueInput , author : e.target.value})
                }}>
                    <option value="User" >User</option>
                    <option value="admin" >admin</option>
                    <option value="Mh-code" >Mh-code</option>
                </select>
                    <button  className="btn" type="submit">Add Blog</button>
            </form>
        </section>
    )
}

export default CreatePost;