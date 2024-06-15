import { useState } from "react";
import Posts from "./Posts";
// import "../../../data/db.json"
import { useNavigate } from "react-router-dom";

function CreatePost(pr) {
    const historyPush = useNavigate();
    const [isLoading, setIsLoading ] = useState(false);
    const [valueInput, setValueInput] = useState({
        username: "",
        imageuser: "",
        title: "",
        body: "",
        image: "",

    });
    const handleForm = (e) => {
        e.preventDefault();
        const Post = new Object();
        Post.title = valueInput.title;
        Post.body = valueInput.body;
        Post.image = valueInput.image;
        Post.username = valueInput.username;
        Post.imageuser = valueInput.imageuser;

        setIsLoading(true);
        fetch(`https://6665831dd122c2868e40e799.mockapi.io/angle/posts/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Post),
        }).then(() => {
            console.log("post added");
            setIsLoading(false);
            

            // location.href =' http://localhost:5173';
            historyPush('/My-App-Postas')
        });
    };
    return (
        <section className="create-post">
            <h2>Add New Post</h2>
            <form action="" onSubmit={handleForm}>
                <label htmlFor="">User Name :</label>
                <input type="text" value={valueInput.username} onChange={(e) => {
                    setValueInput({ ...valueInput, username: e.target.value })
                }} />
                <label htmlFor="">Image User:</label>
                <input type="url" value={valueInput.imageuser} onChange={(e) => {
                    setValueInput({ ...valueInput, imageuser: e.target.value })
                }} required />

                <label htmlFor="">Blog title :</label>
                <input name="title" type="text" value={valueInput.title} onChange={(e) => {
                    setValueInput({ ...valueInput, title: e.target.value })
                }} />
                <label htmlFor="">Blog Image :</label>
                <input type="url" value={valueInput.image} onChange={(e) => {
                    setValueInput({ ...valueInput, image: e.target.value })
                }}  />
                <label htmlFor="">Blog body :</label>
                <textarea rows={10} required value={valueInput.body} onChange={(e) => {
                    setValueInput({ ...valueInput, body: e.target.value })
                }}></textarea>

               
                {!isLoading &&<button className="btnCre" type="submit" disabled={isLoading}>Add Post</button>}
            </form>
            {isLoading && <div className="lodings">
               <div className="spinner-border" role="status">
           <span className="visually-hidden">Loading...</span>
         </div></div>}
        </section>
    )
}

export default CreatePost;