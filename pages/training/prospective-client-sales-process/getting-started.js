import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function GettingStarted() {
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
          <h3 className="text-3xl">Getting Started</h3>
          <p>
            1. Put the potential lead/referral into Zoho CRM to track all leads.
          </p>
          <p>
            2. Follow up with the referral by emailing them to setup a zoom/meet
            call.
          </p>
          <p className="ml-4">
            a. On the call ask about their company, product, team, and what they
            are looking for and give an overview of what Arightco does for other
            clients, year established, etc. (see Arightco Calling Script in
            Exhibit A for more details)
          </p>
          <p className="ml-4">
            b. Ask specific questions about the role they are looking to
            fill/company they are searching for.
          </p>
          <p className="ml-4">
            c. Refer to the pricing on the Arightco Website for SaaS, Nonprofit,
            and IT clients for pricing discussions.
          </p>
          <p className="ml-4">
            d. Email the potential client the list of questions below to get a
            better understanding of the workload and time it will take:
          </p>
          <p className="ml-8">i. Do you use QBO/QBD/Xero/NetSuite?</p>
          <p className="ml-8">
            ii. How many employees do you have? Are you looking to hire in the
            next 6-12 months? How many employees if so?
          </p>
          <p className="ml-8">
            iii. What payroll system do you use? How often is payroll running?
            Will we be handling payroll?
          </p>
          <p className="ml-8">
            iv. Do you have an HR team, or do you need HR support? Handbook,
            onboarding/offboarding/state registration assistance, etc.
          </p>
          <p className="ml-8">
            v. How many customers do you have if any? Do you need us to do the
            invoicing?
          </p>
          <p className="ml-8">
            vi. How many transactions would you say the company has monthly?
            (Bank, credit card, etc.)
          </p>
          <p className="ml-8">
            vii. Do you have a file storage system? Drive, Dropbox, Box,
            OneDrive?
          </p>
          <p className="ml-8">
            viii. What basis of accounting are the financial statement currently
            being recorded on (Cash, Accrual, Other)
          </p>
          <p className="ml-8">
            ix. Have the accounts been reconciled? If so, by whom and through
            what dates?
          </p>
          <p className="ml-8">
            x. Do you use credit cards as a normal course of business? If so how
            many are issued, through what platform and what's the average
            monthly spend.
          </p>
          <p className="ml-8">
            xi. Do you accept credit cards as a payment method?
          </p>
          <p className="ml-8">
            xii. How are the client contracts written when it comes to
            invoicing? Up front annual, quarterly, monthly or some other term?
          </p>
          <p className="ml-8">
            xiii. Are there schedules that corroborate the monthly transactions
            and amounts. For example, prepaid, accruals, deferred revenue and
            other accounts?
          </p>
          <p className="ml-8">
            xiv. If not already compiled, reviewed or audited, do you anticipate
            either in the next 12 months?
          </p>
          <p className="ml-8">
            xv. Have your tax returns been filed for the previous year?
          </p>
          <p className="ml-8">
            xvi. Do you have a subsidiary? If so, do you need a consolidation?
          </p>
          <p className="ml-8">
            xvii. Do you file sales tax? If so, what system do you use to file?
            Avalara, etc.?
          </p>
          <p className="ml-8">
            xviii. Do you have a monthly dashboard that you prepare?
          </p>
          <p className="ml-8">
            xix. Do you need an annual budget/model created?
          </p>
          <p className="ml-8">
            xx. Do you reimburse employee expenses using a system or excel?
          </p>
          <p className="ml-8">
            xxi. Do you need us to track stock options and board minutes?
          </p>
          <p className="ml-8">
            xxii. If in Manufacturing, ask what software is used to track
            inventory and if they have the COGS set up with a BOM.
          </p>
          <p className="ml-8">
            xxxiii. If a nonprofit, what is the Finance committee and board
            schedule? Will we be needed to present?
          </p>
          <p>
            3. Once the information is given back to you, plug in the data to
            the client estimation tool on the drive to get an understanding of
            the level of hours needed for this client and include hours for
            complexity.
          </p>
          <p className="ml-4">
            a. Run the proposed amount by the SLT if needed and beyond the scope
            of the pricing on the website.
          </p>
          <p>
            4. Ask on the marketing channel for a proposal to be created to send
            to the client. Work with the team to get the logo, name of the
            client, the scope of work needed for the client, and the pricing on
            the proposal.
          </p>
          <p>
            5. Email the proposal to the client along with a recap of your call
            like so:
          </p>
          <br />
          <p>
            Hi Sam! Thank you for meeting us today! We have attached our
            proposal based on our understanding of the level of work needed for
            your company. Let me know if you have any questions about the
            proposal and if you want to meet to go through anything. If you
            accept the proposal, we will send the contract out to you for
            signature and then set up a kickoff zoom meeting to get started.
          </p>
          <p>
            Here is also a quick summary below of our call and the tools we use:
          </p>
          <p className="text-xl font-bold">Tools we use:</p>
          <p>
            QuickBooks online for financial reports, tsheets for timesheet
            keeping, bill.com for AP, Keeper for secure password storage, and
            Reach Reporting for KPI tracking, along with a few others. Brex.com
            and Divvy.com we use for credit card expense tracking.
          </p>
          <p>Great companies we also use for payroll:</p>
          <p className="font-bold">Gusto.com</p>
          <p className="font-bold">Rippling.com</p>
          <p>
            Let me know if you have any questions or comments about anything.
            Thank you!
          </p>
          <p>
            1. If the client accepts the proposal send an email with the
            proposal attached to accounts@arightco.com to create the contract
            based on the proposal. Review the contract and send the contract via
            Adobe sign. **Please review the scope of work and pricing carefully
            before sending!
          </p>
          <p>
            2. If the client signs, congrats and Move to the client onboarding
            process!
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/prospective-client-sales-process"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/prospective-client-sales-process/arightco-calling-script"
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
