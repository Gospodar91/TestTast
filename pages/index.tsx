import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { IHome } from "./../components/interfaces";

const Home: React.FC<IHome> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        {" "}
        <title>Test Blog</title>
      </Head>
      <section className="createPost">
        <Link href="/posts/new">
          <a>Create Post </a>
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
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default Home;
