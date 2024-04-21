import { useContext, useEffect, useState } from "react";

// components
import Image from "next/image";
import CardProduct from "@/components/Base/home_basis/card-product";
import HighlightProductList from "@/components/Base/home_basis/highlight-product-list";
import Button from "@/components/Shared/Button";
import PriceCircle from "@/components/Base/home_basis/price-circle";
import OurStrengthContainer from "@/components/Base/home_basis/our-strength-container";
import ProductBadge from "@/components/Base/home_basis/product-badge";
import TopProduct from "@/components/Home/TopProduct";
import NavHome from "@/components/Base/home_basis/nav-home";

//  image src
import imagebottom from "../../public/images/png/cardBottom.png";

import Product from "@/models/product.model";
import ProductService from "@/services/Products/product.service";
import {
  categoryContext,
  selectedCategoryContext,
} from "@/context/CategoryContext";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const categories = useContext(categoryContext);
  const [activePath, setActivePath] = useState("all");
  const [mostExpensiveProduct, setExpensiveProduct] = useState<Product>();

  const selectedCategory = useContext(selectedCategoryContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getProducts(10);
        console.log("products", response.products);
        setProducts(response.products);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on activePath
    const filterProducts = () => {
      if (activePath === "all") {
        setFilteredProducts(products); // Show all products
      } else {
        setFilteredProducts(
          products.filter((product) => product.category === activePath) // Filter by category
        );
      }
    };

    filterProducts(); // Call on initial render and activePath change
  }, [products, activePath]);

  useEffect(() => {
    setActivePath(selectedCategory);
    // Filter products based on selectedCategory
    const filteredProducts = products.filter(
      (product) =>
        product.category === selectedCategory || selectedCategory === "all"
    );
    setFilteredProducts(filteredProducts);
  }, [products, selectedCategory]);

  const handleClick = (category: string) => {
    setActivePath(category);
  };

  useEffect(() => {
    setExpensiveProduct(
      products.reduce((previousProduct, currentProduct) => {
        const previousPrice = parseFloat(previousProduct.price);
        const currentPrice = parseFloat(currentProduct.price);

        return previousPrice > currentPrice ? previousProduct : currentProduct;
      }, products[0])
    );
  }, [products]);
  // the most expensive product

  return (
    <div className="flex flex-col min-h-screen p-0 m-0 text-black-0">
      <div className="flex space-x-6 px-[300px] my-6">
        <TopProduct />

        <div className=" flex flex-col space-y-6">
          <div className=" w-full relative p-14 rounded-[6px] bg-black-0 h-1/2"></div>
          <div className="relative p-14 rounded-[6px] bg-black-3 w-full h-1/2"></div>
        </div>
      </div>

      <div className=" px-[300px]">
        <OurStrengthContainer />
      </div>

      <div className="space-y-6 px-[300px] py-[72px]">
        <div>
          <NavHome
            categories={categories}
            activePath={activePath}
            handleClick={handleClick}
          />
        </div>

        <div className="relative grid grid-cols-5 grid-flow-row  gap-4 ">
          {/* {Array.from({ length: 10 }, (_, index) => { */}
          {products[0] ? (
            filteredProducts.map((product, index) => {
              return (
                <CardProduct
                  key={`cardProduct-${index}`}
                  name={product.title}
                  notation={Number(product.rating)}
                  price={Number(product.price)}
                  cardClassName=" p-4 flex-col rounded-[2px] space-y-3"
                  contentClassName=" space-y-2"
                  imgH={172}
                  imgW={202}
                  imgSrc={product.images[0]}
                />
              );
            })
          ) : (
            <p className="absolute left-[800px] top-1/2 font-publicSB text-black-0 text-center text-xl">
              There is no products here
            </p>
          )}

          {/* })} */}
        </div>
      </div>

      {/* component reminder */}
      <div className="px-[241px]  ">
        {mostExpensiveProduct && (
          <div className="flex justify-between bg-orange-2">
            <div className=" my-20 ml-[72px] space-y-6">
              <div className="flex flex-col space-y-3">
                <ProductBadge
                  badgeText={`SAVE UP TO $${200.0}`}
                  bgColor=" bg-blue-0"
                  textColor=" font-publicSB text-white py-[6px] px-3 "
                />

                <h1 className=" font-publicSB text-5xl">
                  {mostExpensiveProduct.title}
                </h1>
              </div>

              <p className=" font-publicR text-2xl w-96">
                {mostExpensiveProduct.description}
              </p>

              <Button />
            </div>

            <div className="p-0 mr-12 relative">
              <Image
                src={imagebottom}
                alt="bottom"
                width={536}
                height={424}
                layout="fixed"
                objectFit="cover"
              />
              
              <PriceCircle
                priceColor=" "
                bgColor=" bg-orange-3"
                price={Number(mostExpensiveProduct.price)}
                priceCircleClass=" top-10 -left-1"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-6 px-[300px] py-[72px] ">
        <HighlightProductList />
        <HighlightProductList />
        <HighlightProductList />
        <HighlightProductList />
      </div>
    </div>
  );
}
