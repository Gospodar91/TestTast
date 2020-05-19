import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Form from "../../components/form/Form";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
interface Itext {
  title: string;
  body: string;
}
const createPost: React.FC = () => {
  const initialState = {
    title: null,
    body: null,
  };
  const [textState, setTextState] = useState<Itext>(initialState);
  const pushPost = async () => {
    try {
      const data = await axios({
        method: "post",
        url: "https://simple-blog-api.crew.red/posts/",
        data: { ...textState },
      });
    // try {
    //   const data = await axios({
    //     method: "delete",
    //     url: "https://simple-blog-api.crew.red/posts/9",
       
    //   });
    } catch (error) {
      console.log("POST ERROR", error);
      throw new Error();
    }
  };
  if (textState.body && textState.title) {
    pushPost();
  }
 

  const addhandler = (title?: string, body?: string) => {
    const mainPost: Itext= {
      title: title,
      body: body,
    };

    setTextState(mainPost);
  };

  return (
    <>
      <Form onAdd={addhandler} />
      <div className="backToHome">
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </>
  );
};
export default createPost;
