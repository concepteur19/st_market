import type { AppProps } from "next/app";
import "../styles/globals.css";
import LayoutApp from "@/layouts/layoutApp";

// hook
import { useEffect, useState } from "react";

// service
import CategoryService from "@/services/Category/category.service";

// context
import { categoryContext } from "@/context/CategoryContext";

export default function App({ Component, pageProps }: AppProps) {

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await CategoryService.getCategories();

        setCategories(response);
        console.log("categories", response);
      } catch (error: any) {
        console.error(
          "Erreur lors de la connexion:",
          error.response.data.message
        );
      }
    };

    getCategories();
  }, []);

  return (
    <categoryContext.Provider value={categories}>
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </categoryContext.Provider>
  );
}
