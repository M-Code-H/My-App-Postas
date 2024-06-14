import Post from "./Post";
import Posts from "./Posts";
import useFetch from "../../useFetch";
import { useNavigate, useParams } from "react-router-dom";
import {FaX} from "react-icons/fa6";

export default function PostDetails(props) {
  const { id } = useParams(props);
  const historyPush = useNavigate()
  let { Data: post, isloading, errorMasUser } = useFetch(`https://6665831dd122c2868e40e799.mockapi.io/angle/posts/posts/${id}`);

  const deletePosts = () => {
    fetch(`https://6665831dd122c2868e40e799.mockapi.io/angle/posts/posts/${id}`, {
      method: "DELETE",
    });
    historyPush('/My-App-Postas');
  }
  const password = "angel100"
  const inputPass = document.getElementById("pass");
  const span = document.querySelector(".box-delete span");
  const box =   document.querySelector(".box-delete");

  function handePass(){

    if(inputPass.value ==  password){
     
      deletePosts(post.id);
    }
    else{
      span.innerHTML = "Wrong password";
    }
  };

  function test () {
    if(inputPass.value !==  password){
      span.innerHTML = "Wrong password"
       inputPass.style.border ="3px solid red"
     
    }else if (inputPass.value ==  password){
      span.style.color = "rgb(75, 236, 75)"
        span.innerHTML = "true password"
       inputPass.style.border ="3px solid rgb(75, 236, 75)"
    }
  }


  return (<>
    <div style={{position:"relative"}}>
      {isloading && <div style={{
        margin:"auto",
        height:"200px"
      }} className="lodings">
      <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div></div>}
      {errorMasUser && <div style={{
        width:"fit-content",
        margin:"auto"
        
      }} className="notFund">
<h2 className="text-found">يرجى أعادة محاولة لأحقا</h2>
</div>}
      {post && !isloading && !errorMasUser &&
       <article className="container post-details">
      <div className="card">
  <div className="card-header">
    <img src={post.imageuser} className="img_profile" alt="" />
    <b className="username-details"> @{post.username ? post.username : "null"}</b> 
{/* <button className="btn" onClick={() => deletePosts(post.id)}>Delete</button> */}
</div>
  <div className="card-body" dir={"auto"}>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text-details">{post.body}</p>
    {/* <img src={post.image} alt="" /> */}
    <div className="item-post-img">
     {!post.image == "" && <img className="ima-post" src={post.image} alt="" /> }
    {post.image == "" && <div></div>} </div>
  </div>
 <div className="buttons">
 <button className="clickBtn"onClick={()=>{
    const box =   document.querySelector(".box-delete");
    box.style. transform=" translateY(-250%)"
     }} >Delete</button>
 </div>
  
</div>
  
      </article>
      }

    </div>
    <div className="box-delete" >
  <FaX style={{
    position:"absolute",
    right:"25",
    top:"10",
    fontSize:"20px",
    color:"white",
    cursor:"pointer"

  }} onClick={()=>{
    const box =   document.querySelector(".box-delete");
    box.style. transform=" translateY(-600%)"
     }}/>
<span style={{color:"red"}}></span>
 <input id="pass" type="text" placeholder="Password" onChange={test} />
 <button onClick={()=>{
  handePass()
box.style. transform=" translateY(-300%)"
 }} className="Btn" >Delete</button>
</div>
    </>
  )
}


