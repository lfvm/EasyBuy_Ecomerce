import React from "react";
import NavBar from "./NavBar";

interface PageLayoutInterface {
  Page: React.FC;
}

export default function PageLayout(props: PageLayoutInterface) {
  const { Page } = props;

  return (
    <div className="page_layout w-full h-screen flex flex-col overflow-y-scroll bg-slate-100">
      <NavBar />
      <main className="main_page w-screen p-4 mt-4">
        <Page />
      </main>
    </div>
  );
}
