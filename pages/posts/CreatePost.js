import axios from 'axios'
import Link from "next/link";
axios.defaults.headers.post['Content-Type'] ='application/json; charset=UTF-8';
const postToAdd = {
    title: 'NEXT JS',
    body: 'Typescript',
  };
const createPost=()=>{
  const pushPost=async ()=> {
        try {
          const data = await axios({
            method: 'post',
            url: 'https://simple-blog-api.crew.red/posts',
            data: postToAdd
          }); 
          ;
          
        } catch (error) {
          console.log("POST ERROR", error);
        ;
          throw new Error();
        }
      }
    //   pushPost()

    return (
        <>
           
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
   
        </>
    )


}
export default createPost