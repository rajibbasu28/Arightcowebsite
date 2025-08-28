import Head from "next/head";
import Layout from "../components/layouts/layout";
import Section from "../components/sections/section";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>
          Privacy Policy | Finance & Accounting Solutions | ArightCo
        </title>
      </Head>
      <Section type={3} title1={"Privacy Policy"} />
      <div className="bg-white mx-3 xl:mx-32 rounded-xl mt-16 p-8">
        <div className="font-bold lg:text-lg pb-2">
          Effective Date: 8/18/2025
        </div>
        <div className="text-sm lg:text-base pb-8">
          ArightCo, Inc. (“we,” “our,” or “us”) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you communicate with us, including via
          SMS text messages, phone calls, email, and our website.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-2">
          Information We Collect
        </div>
        <div className="text-sm lg:text-base pb-2">
          We may collect the following types of information:
        </div>
        <div className="text-sm lg:text-base pb-2">
          - <strong>Contact Information:</strong> Name, phone number, email
          address, and company name.
        </div>
        <div className="text-sm lg:text-base pb-2">
          - <strong>Message Content:</strong> Information you send to us via
          SMS, phone call, or our online contact form.
        </div>
        <div className="text-sm lg:text-base pb-8">
          - <strong>Service Details:</strong> Information necessary to provide
          services or respond to your inquiries.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-2">
          How We Use Your Information
        </div>
        <div className="text-sm lg:text-base pb-2">
          We use your information solely to:
        </div>
        <div className="text-sm lg:text-base pb-2">
          - Respond to your inquiries. <br></br>- Provide and manage our
          services.<br></br>- Schedule and confirm meetings.<br></br>- Send
          transactional or conversational SMS messages directly related to your
          service request.
        </div>
        <div className="font-bold text-sm lg:text-base pb-8">
          We do not send marketing, promotional, or bulk SMS messages.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-2">
          SMS Communications
        </div>
        <div className="text-sm lg:text-base pb-2">
          By calling or texting +1 (408) 837-0029, you agree to receive SMS
          replies related to your inquiry or service request.
        </div>
        <div className="text-sm lg:text-base pb-8">
          - Message frequency will vary based on your interaction.<br></br>-
          Reply STOP to opt out at any time.<br></br>- Reply HELP for help.
          <br></br>- Message & data rates may apply.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-2">Data Sharing</div>
        <div className="text-sm lg:text-base pb-2">
          We do not sell or rent your personal information. We may share your
          information only with:
        </div>
        <div className="text-sm lg:text-base pb-8">
          - Service providers who assist in delivering our services.<br></br>-
          As required by law, regulation, or legal process.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-2">Data Security</div>
        <div className="text-sm lg:text-base pb-8">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-2">Your Rights</div>
        <div className="text-sm lg:text-base pb-8">
          You may contact us to request access, correction, or deletion of your
          personal information. If you opt out of SMS, you will no longer
          receive text messages from us.
        </div>
        <div className="font-bold text-lg lg:text-xl pb-2">Contact Us</div>
        <div className="text-sm lg:text-base pb-2">
          If you have any questions about this Privacy Policy or our practices,
          please contact us:<br></br>ArightCo, Inc.<br></br>Phone:{" "}
          <Link href={"tel:+1(408)8370029"} className="underline">
            +1 (408) 837-0029
          </Link>
          <br></br>Email:{" "}
          <Link href={"mailto:info@arightco.com"} className="underline">
            info@arightco.com
          </Link>
          <br></br> Web:{" "}
          <Link
            href="https://www.arightco.com/contact-us"
            className="underline"
          >
            https://www.arightco.com/contact-us
          </Link>
        </div>
      </div>
    </Layout>
  );
}
