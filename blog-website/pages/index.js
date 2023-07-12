import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl">
                Blog Website
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/aboutus"
                  replace
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h1 className="text-4xl text-center mt-8 mb-12">Blog</h1>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Title</h2>
            <p className="text-gray-500 text-sm mb-2">date</p>
            <div className="prose">Content</div>
          </div>
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Title</h2>
            <p className="text-gray-500 text-sm mb-2">date</p>
            <div className="prose">Content</div>
          </div>
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Title</h2>
            <p className="text-gray-500 text-sm mb-2">date</p>
            <div className="prose">Content</div>
          </div>
        </div>
      </div>
    </>
  );
}
