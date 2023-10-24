import Layout from "@/components/Layout";
import styles from "../../components/layout.module.css";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../lib/Date";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function Post({ postData }: any) {
  return (
    <Layout home={false}>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <div className={styles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
