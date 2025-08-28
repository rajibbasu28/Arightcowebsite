import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../components/intranet/Account";
import { useRouter } from "next/router";

export default function ProspectiveClientSalesProcessHomePage() {
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
    return (
      <div></div>
    );
  }
  return (
    <div className="p-10 flex flex-col gap-6">
      <Link className="absolute top-0 left-0 p-4" href="/training">
        ← Back to Training Home Page
      </Link>
      <h1 className="text-3xl pt-10">Prospective Client Sales Process</h1>
      <Link href="/training/prospective-client-sales-process/getting-started">Getting Started</Link>
      <Link href="/training/prospective-client-sales-process/arightco-calling-script">ArightCo Calling Script</Link>
      <Link href="/training/prospective-client-sales-process/script-examples">Script Examples</Link>
    </div>
  );
}
