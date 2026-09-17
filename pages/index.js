import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Carlene.</p>
        <p></p>
        <p>I chose Web Development because I enjoy creating websites and applications that people can use in their everyday lives. 
          he growing demand for websites and online services inspired me to learn how technology can help businesses and individuals reach more people.</p>
          
          <p>I became passionate about this field because I like solving problems and turning ideas into functional and interactive websites. 
          Web Development also allows me to be creative while continuously learning new technologies and programming skills.
           My goal is to become a skilled web developer who can create useful, responsive, and user-friendly websites.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}