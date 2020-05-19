import axios from "axios";
export async function getSortedPostsData() {
  try {
    const posts = await axios.get("https://simple-blog-api.crew.red/posts");
    return posts.data.map((post) => {
      return {
        params: {
          id: post.id.toString(),
          ...post,
        },
      };
    });
  } catch (error) {
    console.log("ERRROR--------------------------------->", error);
    throw new Error();
  }
}

export async function getAllPostIds() {
  try {
    const posts = await axios.get("https://simple-blog-api.crew.red/posts");
    return posts.data.map((post) => {
      return {
        params: {
          id: post.id.toString(),
        },
      };
    });
  } catch (error) {
    console.log("ERRROR--------------------------------->", error);
    throw new Error();
  }
}

export async function getPostData(params) {
  try {
    const postsInfo = await axios.get(
      `https://simple-blog-api.crew.red/posts/${params.id}?_embed=comments`
    );
    return postsInfo.data;
  } catch (error) {
    console.log("ERRROR--------------------------------->", error);
    throw new Error();
  }
}
