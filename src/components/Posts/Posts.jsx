

import useFetch from "../../useFetch";
import Post from "./Post";
import  CreatePost  from "./CreatePost";
 const Posts = () => {
  let {Data , isloading , errorMasUser} = useFetch("https://6665831dd122c2868e40e799.mockapi.io/angle/posts/posts");
  
 
  return (
    <section className="posts">


    {isloading && <div>loading ...</div>}
    {errorMasUser && (<h2 className="not-found">{errorMasUser}</h2>)}
    {Data && !isloading && !errorMasUser && (Data.map((post) =>(
       <Post key={post.id} post={post}   />
      )) )}
      
    </section>
  )
}
export default Posts ;