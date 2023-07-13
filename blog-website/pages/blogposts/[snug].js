import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Snug() {
  const router = useRouter();
  const { snug } = router.query;
  useEffect(() => {
    fetchData();
  }, []);

  const [singleBlog, setSingleBlog] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pfi-soc-backend.onrender.com/api/v1/blogs/${snug}`
      );
      setSingleBlog(response.data.blog);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-2">{singleBlog.title}</h2>
      <p className="text-gray-500 text-sm mb-4">date</p>
      <p className="prose max-w-none">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis id ad
        ex, quo numquam accusamus similique sed ducimus quaerat repellendus
        minima maiores quam velit odit quod! Inventore ut at impedit.
      </p>
      <p className="text-gray-700 mt-4">Author: author Name</p>
    </div>
  );
}
