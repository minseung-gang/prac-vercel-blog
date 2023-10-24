import Layout from "@/components/Layout";
import { useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Write() {
  const [showLink, setShowLink] = useState(false);
  const idRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    if (id && title && content) {
      /*  fetch("/api/post/write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, content }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(
              "Fetch error: " + res.status + " " + res.statusText
            );
          }
        })
        .then((data) => alert(data.message))
        .catch((error) => alert(error.message)); */

      try {
        const response = await axios.post(
          "/api/post/write",
          {
            id,
            title,
            content,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 200) {
          setShowLink(true);
          alert(response.data.message);
        } else {
          throw new Error(
            "Fetch error: " + response.status + " " + response.statusText
          );
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <Layout>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <button type="submit">Create</button>
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current?.value}`} legacyBehavior>
          <a>Created Post</a>
        </Link>
      )}
    </Layout>
  );
}
