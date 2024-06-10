

import useFetch from "../../useFetch";
import Post from "./Post";
import  CreatePost  from "./CreatePost";
 const Posts = () => {
  let {Data , isloading , errorMasUser} = useFetch("https://6665831dd122c2868e40e799.mockapi.io/angle/posts/posts");
  
 
  return (
    <section className="posts">


    {isloading && !Data && <div className="lodings">
      <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div></div>}
    {errorMasUser && (<div className="notFund">
<h2 className="text-found">يرجى أعادة محاولة لأحقا</h2>
</div>)}
    {Data == "" && <div className="goAdd"><h1>Go!!! To add a post</h1></div>}
    {Data && !isloading && !errorMasUser && (Data.map((post) =>(
       <Post key={post.id} post={post}   />
      )) )}
      {/* <div className="lodings">
      <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div> */}

    </section>
  )
}
export default Posts ;