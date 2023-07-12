import Image from "next/image";
import Head from "next/head";
import Blog from "./blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div className="flex justify-center mt-5">
        <Image
          src="/home.webp"
          alt="Description of the image"
          width={700}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <Blog />
    </>
  );
}
