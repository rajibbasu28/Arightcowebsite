import { motion } from "framer-motion";
import Head from "next/head";
import { sweepRight } from "../../components/animations";
import CaseStudyCard from "../../components/cards/casestudycard";
import Layout from "../../components/layouts/layout";

export default function CaseStudies() {
  return (
    <Layout>
      <Head>
        <title>Case Studies | Finance & Accounting Solutions | ArightCo</title>
      </Head>
      <div className="text-center text-white bg-gradient-to-r from-blue to-blue-light px-3 py-32 lg:py-44 lg:text-xl lg:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
        >
          <div className="font-bold text-6xl">Case Studies</div>
          <div className="px-20 py-6">
            Access expert advice on startup accounting and bookkeeping, download
            key resources and checklists, and get a better grasp of your
            business finances.
          </div>
        </motion.div>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-[1350px]:px-32 p-3 place-items-center items-stretch">
          <CaseStudyCard
            src={"/case-studies/images/nexient.png"}
            alt={"Nexient Case Study"}
            title={"Nexient Case Study"}
            href={"/case-studies/nexient"}
          />
          <CaseStudyCard
            src={"/case-studies/images/airgap.png"}
            alt={"AirGap Case Study"}
            title={"AirGap Case Study"}
            href={"/case-studies/airgap"}
          />
          <CaseStudyCard
            src={"/case-studies/images/aifi.png"}
            alt={"AiFi Case Study"}
            title={"AiFi Case Study"}
            href={"/case-studies/aifi"}
          />
          <CaseStudyCard
            src={"/case-studies/images/heart-and-soul.png"}
            alt={"Heart & Soul Case Study"}
            title={"Heart & Soul Case Study"}
            href={"/case-studies/heart-and-soul"}
          />
        </div>
      </div>
    </Layout>
  );
}
