import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
<nav className="navbar">

    <h1>
      Mh.<p>Code</p>
    
    </h1>
    <div className="links">
       
        <Link className="btn" to="/My-App-Postas">Home</Link>
        <Link className="btn" to="/My-App-Postas/create">New Post</Link>
    </div>
</nav>
    </header>
  )
}
