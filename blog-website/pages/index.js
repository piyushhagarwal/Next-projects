import Image from "next/image";
import Head from "next/head";
import Blog from "./blog";

export default function Home(props) {
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

      <Blog data={props.data} />
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://pfi-soc-backend.onrender.com/api/v1/blogs");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
