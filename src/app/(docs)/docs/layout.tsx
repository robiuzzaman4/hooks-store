import Container from "@/components/shared/container";
import Sidebar from "@/components/shared/sidebar";
import React, { ReactNode } from "react";

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full">
      <Container className="flex-1 items-start lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-10">
        <Sidebar />
        <div className="relative py-6">{children}</div>
      </Container>
    </section>
  );
};

export default DocsLayout;
