import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div>
      <h1 className="text-4xl text-center mt-8 mb-12">Blogs</h1>
      <div className="container mx-auto">
        <Link href="/blogposts/slug">
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Title</h2>
            <p className="text-gray-500 text-sm mb-2">date</p>
            <div className="prose">Content</div>
          </div>
        </Link>
        <Link href="/blogposts/slug1">
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Title</h2>
            <p className="text-gray-500 text-sm mb-2">date</p>
            <div className="prose">Content</div>
          </div>
        </Link>
        <Link href="/blogposts/slug2">
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Title</h2>
            <p className="text-gray-500 text-sm mb-2">date</p>
            <div className="prose">Content</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
