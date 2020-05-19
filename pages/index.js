import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>…</Head>
<section className='createPost'>
  <Link href="/posts/CreatePost">
    <a>Create Post Link</a>
  </Link>
</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ params }) => (
            <li className={utilStyles.listItem} key={params.id}>
              <Link href="/posts/[id]" as={`/posts/${params.id}`}>
                <a>{params.title}</a>
              </Link>
              <br />
              <p>{params.body}</p>
              <small className={utilStyles.lightText}></small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};
export default Home;
