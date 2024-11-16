import "./style.css";

import React from "react";
import { Header } from "#widgets/Header";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
      <>
        <Header />
          {children}
      </>
  );
}