import React from "react";
import Navbar from "@/app/component/Navbar";
import Header from "@/app/component/Header";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
