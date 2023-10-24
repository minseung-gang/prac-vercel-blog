import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout";
import styles from "@/components/layout.module.css";
import { getSortedPostsData } from "../../lib/posts";
/* import { useEffect, useState } from "react"; */
import Date from "../../lib/Date";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  /*  const [allPostsData, setAllPostsData] = useState();
  useEffect(() => {
    fetch("api/posts")
      .then((res) => res.json())
      .then((data) => setAllPostsData(data.allPostsData));
  }, []); */
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={styles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <h2 className={styles.headingLg}>Blog</h2>
          <ul className={styles.list}>
            {allPostsData &&
              allPostsData.map(({ id, date, title }) => (
                <li className={styles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={styles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
