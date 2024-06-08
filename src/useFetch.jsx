import { useEffect, useState } from "react";

const  useFetch = (url) => {
    const [Data , setData] = useState(null);
  const [isloading , setIsloading] = useState(false);
  const [errorMasUser , setErrorMasUser] = useState(null);
  useEffect(()=>{
    setIsloading(true);
    setErrorMasUser(null);
   
    fetch(url).then(
      (res)=> {
        if(!res.ok){
          throw Error(res.statusText ? res.statusText : "Not Found" , 
           setData(null)
          );
        
        };
        return res.json();
      }
    ).then((data)=>{
        setData(data);
        setIsloading(false);
      }).catch(err =>{ 
        setIsloading(false);
        setErrorMasUser(err.message)});
  }, [url]);
  return{Data , isloading , errorMasUser }
};

export default useFetch;