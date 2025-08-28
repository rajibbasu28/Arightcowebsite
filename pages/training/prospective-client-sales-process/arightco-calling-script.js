import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function ArightCoCallingScript() {
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
          <h3 className="text-3xl">ArightCo Calling Script</h3>
          <p>Hi this is ___ with ArightCo.</p>
          <p>Have you heard about us before?</p>
          <br />
          <p className="font-bold">Prospect: Yes</p>
          <p>
            XYZ: That is great as you know that ArightCo is a simple and
            affordable solution and offers a comprehensive range of Accounting,
            HR, and Back-End services that will optimize your workflow. Our
            services offer access to a team of skilled professionals - saving
            your business time and money.
          </p>
          <p className="font-bold">Prospect: No</p>
          <p>
            Ok, so ArightCo is a a simple and affordable solution and offers a
            comprehensive range of Accounting, HR, and Back-End services that
            will optimize your workflow. Our services offer access to a team of
            skilled professionals - saving your business time and money.
          </p>
          <p className="font-bold">What we do:</p>
          <p>
            ArightCo is a Silicon Valley financial services company that
            specializes in meeting the needs of businesses that do not have the
            resources or the desire to build their own Finance and HR teams.
          </p>
          <p className="font-bold"></p>
          <br />
          <p className="ml-2">
            - No, I am not interested: Oh, that’s absolutely fine. However, a
            lot of companies had said the same thing before they had a chance to
            see our capabilities, especially on how we save their operational
            cost. So, can we connect for a conference call for 30 minutes to
            discuss it further with you? Would date/time work for you?
          </p>
          <p className="ml-2">
            - We are happy with our current partners: We expect a company like
            yours to already have preferred vendors in place for any support.
            However, ArightCo has been able to add value to multiple clients
            which were in a similar scenario. In some of the cases, where client
            was completely satisfied with their vendor’s performance and
            productivity, we were able to demonstrate high cost reduction
            through our solutions. Sometimes vendor performance was not up to
            the mark or vendor had become complacent in the engagement. In such
            cases ArightCo was able to show immediate value to our clients post
            transition.
          </p>
          <p className="ml-2">
            - Not right now. Send me an email: I can certainly send you the
            information about us on your email that you can use, however we can
            explain about us and our capabilities better if given a chance to
            speak to you. So if you allow I can book your calendar for a short
            connect. Would date/time work for you?
          </p>
          <p className="ml-2">
            - I am not the right person for this: Could you please let me know
            who the right person would be? Are these decisions made at your
            division level or at the company level?
          </p>
          <p className="ml-2">
            - Are you in our preferred vendor list? If I understand correctly we
            have made attempts to be in your vendor list so we may be one of
            your preferred vendors, I am not 100% sure and our field team would
            be in a better position to provide that clarity.
          </p>
          <br />
          <p className="font-bold">Prospect: “If” No, Thank you.</p>
          <p>
            XYZ: No problem. Is it ok if I can keep a follow-up with you in a
            couple of months to see if we may get to meet with you?
          </p>
          <p className="font-bold">Prospect: Sure. That’ll be fine.</p>
          <p>
            XYX: Thank you Scott for sparing few minutes talking to me. Have a
            Great Day!!
          </p>
          <p className="font-bold">
            Prospect: “If” Yes. Ok I can spare 30 minutes on date/time.
          </p>
          <p>
            XYZ: Thank you Scott!! I have your email as 123@abc.com. Is that
            correct?
          </p>
          <p className="font-bold">Prospect: Yes.</p>
          <p>
            XYZ: Thanks!! I will send out the meeting invite to you either today
            or latest by tomorrow and would appreciate your acceptance on the
            same. Thank you, for your time and we look forward to speaking with
            you soon. Have a Great Day!!
          </p>

          <div className="flex flex-row justify-between">
            <Link
              href="/training/prospective-client-sales-process/getting-started"
              className="text-xl mt-4"
            >
              ← Previous Step
            </Link>
            <Link
              href="/training/prospective-client-sales-process/script-examples"
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
