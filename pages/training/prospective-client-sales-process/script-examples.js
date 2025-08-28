import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function ScriptExamples() {
  const { getSession } = useContext(AccountContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getSession()
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (!isAuthenticated) {
    return <div></div>;
  }
  return (
    <>
      <Link
        className="absolute top-0 left-0 p-4"
        href="/training/prospective-client-sales-process"
      >
        ← Back to Prospective Client Sales Process
      </Link>
      <div className="flex justify-center items-center min-h-screen pt-16 pb-8 px-3">
        <div className="flex flex-col w-[500px] gap-2">
          <h3 className="text-3xl">Script Examples</h3>
          <p className="font-bold text-xl">
            Another examples: Script 1 (For well researched prospect)
          </p>
          <p>
            Hi, Charlie. Manish at ArightCo here. Hope your day is going
            well/hope you are doing well.
          </p>
          <p>
            I was reading about you on LinkedIn/website and the way Company Name
            is (the problem that his/her company solves) is truly amazing. Hope
            your business is doing well!
          </p>
          <p>
            So I noticed you guys are obviously looking to scale up your
            business and was wondering how you are managing your accounting and
            finance currently?
          </p>
          <p>
            Alright, and what would be the top most challenges with that as of
            now?
          </p>
          <p>
            That's something I hear often. Charlie, we at ArightCo are exactly
            solving this problem for over 13 years now with more than 100 happy
            customers. Many of our customers simply loves us because:
          </p>
          <p>(explain the benefit as per his problem statement)</p>
          <p>
            Charlie, our experts would love to have a chat with you over a short
            call to see if something like this would make sense for your
            business. What would work best with you, sometime this week or later
            next week?
          </p>
          <p className="font-bold text-xl   ">Script 2: For bulk calling IT & SaaS</p>
          <p>Hi XX,</p>
          <p>This is Manish here from ArightCo. Hope you are well.</p>
          <p>
            XX, the reason for me to give you a call today is because we are
            helping our customers over 13 years with Finance and Accounting
            engines (that power change and safeguard financial health.)
          </p>
          <p>We help with</p>
          <p className="font-bold">1. Accounting services and</p>
          <p className="font-bold">2. Bookkeeping services</p>
          <p>
            (We are helping with a bundled service of Bookkeeping, Accounting, &
            Human Resources)
          </p>
          <p>
            We are a team of experts to help you scale up your business with
          </p>
          <p className="font-bold">1. Invoicing & Payroll</p>
          <p className="font-bold">2. Financial Planning & Accounting</p>
          <p className="font-bold">3. Cost Accounting</p>
          <p className="font-bold">
            4. External Reporting, Budget Forecasting & Strategic Implementation
          </p>
          <p className="font-bold">5. Tax Planning.</p>
          <p>
            Our services also come along with high quality Human Resources and
            Legal Business
          </p>
          <p>(Details if required - listed on website)</p>
          <p>
            Our experts would love to talk with us to discuss some of the use
            cases and to see it together if this could be a right fit for your
            business.
          </p>
          <p>IT services: You get insights on</p>
          <p className="font-bold">1. Billable/Non Billable headcount</p>
          <p className="font-bold">2. Bench Headcount</p>
          <p className="font-bold">3. Revenue by billable resources</p>
          <p className="font-bold">4. Average margin by billable resources</p>
          <p className="font-bold">5. Revenue concentration</p>
          <p className="font-bold">6. Contractor margin, etc.</p>
          <p>
            Saas & Professional service: Churn rate, Total booking, Average deal
            size, Average contract length, avg contract amt., monthly recurring
            revenue, lifetime value, etc
          </p>
          <p className="font-bold text-xl">
            Script 3: (For series A & B funded companies bulk calling - IT/SaaS)
          </p>
          <p>
            Hi, XX. This is Mike here from ArightCo.. I Hope you are doing well,
            can we talk for a minute? We are a Finance & Accounting firm
          </p>
          <p>
            I was reading about your company on google/linkedIn and I noticed
            you guys are looking to scale up your business and I was wondering
            how you are managing your accounting & finance currently.
          </p>
          <p>
            At Arightco we are helping more than 100 customers for over 10 years
            with accounting, Finance & HR services. As you are looking to scale
            up, maintaining your books & accounting properly is very crucial. My
            CEO would love to have a chat with you , discuss some use cases and
            together find out what would be best for your business as you scale
            up. Would early or later next week look good on your calendar?
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/prospective-client-sales-process/arightco-calling-script"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/prospective-client-sales-process"
              className="text-xl mt-4"
            >
              Next Step →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
