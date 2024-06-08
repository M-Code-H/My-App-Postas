import Post from "./Post";
import Posts from "./Posts";
import useFetch from "../../useFetch";
import { useNavigate, useParams } from "react-router-dom";

export default function PostDetails  (props)  {
  const {id} = useParams(props);
  const historyPush = useNavigate()
  let {Data : post , isloading , errorMasUser} = useFetch(`http://localhost:3000/posts/${id}`);
  
  const deletePosts = ()=>
    {
      fetch(`http://localhost:3000/posts/${id}`, {
        method : "DELETE",
      });
   historyPush('/');
    }

  
  return (
    <>
    {isloading && <div>loading...</div>}
    {errorMasUser && <div className="error">{errorMasUser}</div>}
    {post && !isloading && !errorMasUser &&  <article className="container post-details">
      <div className="post-details-title">
        <h1>By :  {post.author ? post.author : "mohamed"}</h1>





        <button className="btn" onClick={() => deletePosts(post.id)}>Delete</button>








      </div>
      <img src={post.image } alt="" className="post-details-img" />
      <p className="post-detalis-body">
      {post.body}
      </p>
   </article>}
  
   </>
  )
}


