import Posts from "./Posts/Posts";




export default function Home () {
  const title = "HOME"
  return (
    <div className='home' >
      <h1>{title}</h1>
<Posts />
    </div>
  );
}
