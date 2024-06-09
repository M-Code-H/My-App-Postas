import Post from "./Post";
import Posts from "./Posts";
import useFetch from "../../useFetch";
import { useNavigate, useParams } from "react-router-dom";

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


  return (
    <>
      {isloading && <div>loading...</div>}
      {errorMasUser && <div className="error">{errorMasUser}</div>}
      {post && !isloading && !errorMasUser && <article className="container post-details">
        <div className="post-details-title">

          <h1>Title: {post.title}</h1>
          <button className="btn" onClick={() => deletePosts(post.id)}>Delete</button>
        </div>
        <img src={post.image} alt="" className="post-details-img" />
        <h1>By :  {post.author ? post.author : "mohamed"}</h1>
        <p className="post-detalis-body">
          {post.body}
        </p>
      </article>}

    </>
  )
}


