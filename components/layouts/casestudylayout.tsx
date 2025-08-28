import Image from "next/image";
import RecentCaseStudies from "../sections/recentarticles";
import Head from "next/head";
import CaseStudyCard from "../cards/casestudycard";

export default function CaseStudyLayout({
  title,
  industry,
  imagesrc,
  pdfsrc,
}: {
  title: string;
  industry: string;
  imagesrc: string;
  pdfsrc: string;
}) {
  return (
    <>
      <Head>
        <title>{title + " | Case Study | ArightCo"}</title>
      </Head>
      <div className="text-center bg-gray-lighter px-3 py-32 lg:py-44 lg:text-xl lg:px-32 font-bold">
        <div className="text-sm">{"CASE STUDY | " + industry}</div>
        <div className="text-6xl">{title}</div>
      </div>
      {/* <Image
        src={imagesrc}
        alt={title + "case study"}
        height={600}
        width={800}
        className="mx-auto rounded-3xl my-10"
      ></Image> */}
      <iframe
        src={pdfsrc}
        width="100%"
        height="1090px"
        className="mx-auto p-3 lg:px-32"
      ></iframe>
    </>
  );
}
