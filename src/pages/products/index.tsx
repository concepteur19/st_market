import React, { useEffect, useState } from "react";

// component
import CardProduct from "@/components/Base/home_basis/card-product";
import SearchSort from "@/components/category/search-sort";
import ActiveFilter from "@/components/category/active-filter";
import Pagination from "@/components/category/pagination";

//  image src
import imageTop from "../../../public/images/png/producttop.png";
import Product from "@/models/product.model";
import ProductService from "@/services/Products/product.service";

const filterSelected = ["Electronics Devices", "5 stars rating", "< 200£"];

const Id = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getProducts();
        console.log("products",response.products);
        setProducts(response.products);
        
        
      } catch (error: any) {
        console.log(error);
        
      }
    };

    fetchProducts();
  }, []);

  // PAGINATION
  const [active, setActive] = useState<number>(1);

  const itemsPerPage = 30;

  // Calcul de l'indice de début et de fin pour découper les éléments de la page actuelle
  const startIndex = (active - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtenir les éléments de la page actuelle
    const currentProducts = products.slice(startIndex, endIndex);

  // Calculer le nombre total de pages
  const totalPages = products.length / itemsPerPage;
  console.log("nbr of pages", totalPages);
  

  // Fonction pour changer de page
  const changePage = (page: number) => {
    setActive(page);
  };

  // next and previous page
  const next = () => {
    if (active === Math.ceil(totalPages)) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className={`px-[343px] pb-[72px] pt-10 space-y-10 ${!products && 'h-screen'}` }>
      <div className="grid gap-6">
        <div className=" space-y-4">
          <SearchSort />

          <ActiveFilter filterSelected={filterSelected} resultFound={100} />
        </div>

        <div className="relative grid grid-cols-5 grid-flow-row gap-4 ">
        {/* {Array.from({ length: 10 }, (_, index) => { */}
        {products[0] ?
          currentProducts.map((product, index) => {
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
          }): (<p className="absolute left-[500px] font-publicSB text-black-0 text-center text-xl">There is no products here</p>)}

        {/* })} */}
      </div>
      </div>

      <div>
        <Pagination totalPages={Math.ceil(totalPages)} active={active} next={next} prev={prev} changePage={changePage}/>
      </div>
    </div>
  );
};

export default Id;
