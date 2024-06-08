import { Link } from "react-router-dom";
const Post = ({ post, deletePosts }) => {

  return (
    <Link to={`/${post.id}`}  className="post" >
      <img src={post.image} alt="" />
      <div className="post-author">
        <p>By : <b> {post.author ? post.author : "mohamed"}</b> </p>|
      <p>Title : <b> {post.title}</b></p>

      </div>
      <h3>{post.body}</h3>
    </Link>
  );
};


export default Post;
