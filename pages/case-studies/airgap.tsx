import Layout from "../../components/layouts/layout";
import CaseStudyLayout from "../../components/layouts/casestudylayout";
import Head from "next/head";
import CaseStudyCard from "../../components/cards/casestudycard";
import RecentCaseStudies from "../../components/sections/recentarticles";

export default function AirGap() {
  return (
    <Layout>
      <Head>
        <title>AirGap | Case Study | ArightCo</title>
      </Head>
      <CaseStudyLayout
        title={"AirGap Case Study"}
        industry={"IT AND SAAS"}
        imagesrc={"/case-studies/images/logo-blue.png"}
        pdfsrc={"/case-studies/pdfs/airgap-case-study.pdf#toolbar=0"}
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
            alt={"AiFi Case Study"}
            title={"AiFi Case Study"}
            href={"/case-studies/aifi"}
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
