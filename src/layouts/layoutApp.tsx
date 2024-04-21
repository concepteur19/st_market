// components
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { selectedCategoryContext } from "@/context/CategoryContext";
import { FC, ReactNode, createContext, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutApp: FC<LayoutProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col font-publicR text-sm">
      <Navbar onCategoryChange={handleCategoryChange} />
      <selectedCategoryContext.Provider value={selectedCategory}>
        <main>{children}</main>
      </selectedCategoryContext.Provider>
      <Footer />
    </div>
  );
};

export default LayoutApp;
