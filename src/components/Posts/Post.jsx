import { Link } from "react-router-dom";
const Post = ({ post, deletePosts }) => {

  return (
    <Link to={`/My-App-Postas/${post.id}`} className="post-card" >

    
      <div className="card">
        <div className="card-header">
          <img src={post.imageuser} className="img_profile" alt="" />
          <p>@{post.username ? post.username : "null"}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {/* <img className="ima-post" src={post.image} alt="" /> */}
         <div className="img-card">
         {!post.image == "" && <img src={post.image} alt="" className="ima-post" /> }
         {post.image == "" && <div></div>}
          </div>       </div>
      </div>
    </Link>
  );
};


export default Post;
  {/* <img src={post.image} alt="" />
      <div className="post-author">
        <p>By : <b> {post.author ? post.author : "mohamed"}</b> </p>|
      <p>Title : <b> {post.title}</b></p>

      </div>
      <h3>{post.body}</h3> */}