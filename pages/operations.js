import axios from "axios";
export const operations = {
 async getAllPosts() {
    try {
      const data = await axios.get(`https://simple-blog-api.crew.red/posts`);
    //   console.log('data', data.data)
      return data.data;
    } catch (error) {
      console.log("GetSummaryError", error);
    ;
      throw new Error();
    }
  }
}