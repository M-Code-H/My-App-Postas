import { Link } from "react-router-dom";
import {


  FaFacebook,
  FaGithub,
  FaX,

  FaInstagram,

} from "react-icons/fa6";
export default function Header() {

  const linksHeader = document.querySelectorAll(".links .btn-navbar");


  linksHeader.forEach((ele) => {
    ele.onclick = function () {
      linksHeader.forEach(function (ele) {
        ele.classList.remove("activeLink");
      });
      ele.classList.add("activeLink");
    };
  })
  return (
    <div className="Header">
      <header className="container-header">
        <nav className="navbar">

          <h2>
            Mh.<span>Code</span>

          </h2>
          <div className="links">

            <Link className="btn-navbar activeLink" to="/My-App-Postas">Home</Link>
            <Link className="btn-navbar" to="/My-App-Postas/create">New Post</Link>
            <span onClick={()=>{
           const nav =   document.querySelector(".box-cuntent");
           nav.style. transform=" translateX(-3%)"
            }}>تواصل معي</span>
          </div>
        </nav>
          <div className="box-cuntent ">
            <p><FaX onClick={()=>{
           const nav =   document.querySelector(".box-cuntent");
           nav.style. transform=" translateX(100%)"
            }}  className="iconX"/></p>
            <a href="#"><FaFacebook /> Mohamed Hl</a>
            <a href="#"> <FaGithub /> M-Code-H</a>
            <a href="#"><FaInstagram /> Mohamed Hl</a>
          </div>
      </header>
    </div>
  )
}


// divImgPush.forEach(function (ele) {
//   ele.onclick = function () {
//     divImgPush.forEach(function (ele) {
//       ele.classList.remove("activeImg");
//     });
//     ele.classList.add("activeImg");
//   };
// });


