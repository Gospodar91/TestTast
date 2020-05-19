import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <p className="styles">{postData.body}</p>
        <h2> COMMENTS</h2>
         {postData.comments.map(elem=>(
           <li key={elem.postId}>
            <p> {elem.body}</p>
           </li>
         )
           
         )}
        <div className={utilStyles.lightText}></div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params);

  return {
    props: {
      postData,
    },
  };
}
