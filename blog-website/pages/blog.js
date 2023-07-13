import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pfi-soc-backend.onrender.com/api/v1/blogs"
      );
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };
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

export default Blog;
