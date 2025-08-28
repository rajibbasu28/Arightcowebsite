import Layout from "../../components/layouts/layout";
import CaseStudyLayout from "../../components/layouts/casestudylayout";
import Head from "next/head";
import CaseStudyCard from "../../components/cards/casestudycard";
import RecentCaseStudies from "../../components/sections/recentarticles";

export default function AiFi() {
  return (
    <Layout>
      <Head>
        <title>AiFi | Case Study | ArightCo</title>
      </Head>
      <CaseStudyLayout
        title={"AiFi Case Study"}
        industry={"IT AND SAAS"}
        imagesrc={"/case-studies/images/logo-blue.png"}
        pdfsrc={"/case-studies/pdfs/aifi-case-study.pdf#toolbar=0"}
      />
      <div className="text-2xl lg:text-4xl lg:ml-32 mt-20 m-3 font-bold">
        Related Articles
      </div>
      <RecentCaseStudies>
        <CaseStudyCard
          src={"/logo-blue.png"}
          alt={"Nexient Case Study"}
          title={"Nexient Case Study"}
          href={"/case-studies/nexient"}
        />
        <CaseStudyCard
          src={"/logo-blue.png"}
          alt={"AirGap Case Study"}
          title={"AirGap Case Study"}
          href={"/case-studies/airgap"}
        />
        <CaseStudyCard
          src={"/logo-blue.png"}
          alt={"Heart & Soul Case Study"}
          title={"Heart & Soul Case Study"}
          href={"/case-studies/heart-and-soul"}
        />
      </RecentCaseStudies>
    </Layout>
  );
}
