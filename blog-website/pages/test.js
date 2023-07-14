import React from "react";
import Link from "next/link";

export default function Test(props) {
  let blogs = props.data.blogs;
  return (
    <div>
      <h1 className="text-4xl text-center mt-8 mb-12">Blogs</h1>
      <div className="container mx-auto">
        {blogs.map((blog) => {
          return (
            <Link href={`/blogposts/${blog._id}`} key={blog._id}>
              <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{blog.publishedOn}</p>
                <div className="prose">{blog.summary}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://pfi-soc-backend.onrender.com/api/v1/blogs");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
