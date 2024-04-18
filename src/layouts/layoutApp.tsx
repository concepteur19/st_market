// components
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
  }

const LayoutApp: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutApp;
