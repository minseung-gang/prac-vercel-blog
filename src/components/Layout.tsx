import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  home?: boolean;
};

const name = "Minseung";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/minseung.jpeg"
              className={styles.borderCircle}
              height={144}
              width={144}
              alt="프로필 이미지"
              aria-label="프로필 이미지"
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/minseung.jpeg"
                className={styles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={styles.headingLg}>
              <Link href="/" className={styles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
