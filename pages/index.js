import{ useEffect, useState } from "react";
import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData ,} from '../lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


  export async function getAllPostsFromServer() {
    const allPostsDataFromServer = getAllPosts()
    return {
      props: {
        allPostsDataFromServer
      }
    }
  }


 const Home=({ allPostsData , allPostsDataFromServer}) =>{
  // const [postState, setState] = useState([]);
  // const  getPosts =async () => {
  //   await operations.getAllPosts().then(data => {
  //     return( 
  //       console.log('datUEIIIa', data),setState('hhhhhhh')) 
    
  //   })
  //  await console.log('postState', postState);
  // };
  // getPosts();
  // useEffect(() => {
  //   getPosts();
  // }, [postState]);


  return (
    <Layout home>
   
      <Head>…</Head>
      {/* {postState&& postState.map((elem)=> (
            <li className={utilStyles.listItem} key={id}>
              {elem.title}
              <br />
              {elem.id}
              <br />
              {elem.body}
            </li>
         ))} */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
  <Link href="/posts/[id]" as={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export default Home;