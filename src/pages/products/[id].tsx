import ImageSlider from "@/components/Product/imageSlider";
import Button from "@/components/Shared/Button";
import { useCartContext } from "@/context/Context";
// import { useCartContext } from "@/context/CartContext";
// import { CartContext, CartProvider } from "@/context/CartContext";

// import { CartContext, CartProvider } from '@/context/cart.jsx'
// import Cart from '@/Cart.jsx'

import Product from "@/models/product.model";
import ProductService from "@/services/Products/product.service";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsStar, BsStarFill } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);

  const {addToCart} = useCartContext();



  useEffect(() => {
    const productDetails = async () => {
      try {
        const responseProduct = await ProductService.getOneProduct(id!);
        // console.log("product", responseProduct);
        setProduct(responseProduct);
      } catch (error: any) {}
    };

    productDetails();
  }, []);

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change); // Ensure quantity stays positive
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart({id: product?.id, title: product?.title, price: product?.price, thumbnail: product?.thumbnail, quantity: quantity})
    // const existingItem = cartItem && cartItem.find((item: any) => item.id === product?.id);
  
    // if (existingItem) {
    //   // Si l'item existe déjà dans le panier, augmentez sa quantité
    //   const updatedCart = cartItem.map((item: any) => {
    //     if (item.id === product?.id) {
    //       return {
    //         ...item,
    //         quantity: item.quantity + quantity
    //       };
    //     }
    //     return item;
    //   });
  
    //   setCart(updatedCart);
    // } else {
    //   // Si l'item n'existe pas dans le panier, ajoutez-le avec la quantité spécifiée
    //   const cartItem = {
    //     id: product?.id,
    //     quantity: quantity,
    //     title: product?.title,
    //     price: product?.price,
    //   };
  
    //   setCart([...cart, cartItem]);
    // }
  };

  return (
    // <CartProvider>
      <div className="flex pt-8 pb-[72px] space-x-[56px] px-[300px] ">
        <ImageSlider images={product?.images!} />

        <div className="space-y-4">
          <div className=" space-y-2">
            <div className=" flex items-center space-x-[6px]">
              <span className="stars flex space-x-[2px] ">
                {Array.from(
                  { length: Math.floor(Number(product?.rating!)) },
                  (_, index) => {
                    return (
                      <BsStarFill
                        key={"star" + index}
                        size={13}
                        className=" fill-orange-0"
                      />
                    );
                  }
                )}

                {Array.from(
                  { length: 5 - Math.floor(Number(product?.rating!)) },
                  (_, index) => {
                    return (
                      <BsStar
                        key={"starFill" + index}
                        color="#ADB7BC"
                        size={13}
                        className=" stroke-[0.5px]"
                      />
                    );
                  }
                )}
              </span>
              <span>{product?.rating} Star Rating</span>
            </div>
            <h1 className=" font-publicR text-[20px] ">{product?.title}</h1>
          </div>

          <div className="flex space-x-10">
            <div>
              Brand: <span className=" font-publicSB"> {product?.brand} </span>
            </div>
            <div>
              {" "}
              Category:{" "}
              <span className=" font-publicSB"> {product?.category} </span>
            </div>
          </div>

          <div className=" font-publicSB text-blue-0 text-2xl ">
            ${product?.price}
          </div>

          <div className="space-x-4 text-lg">
            Description: <p> {product?.description}</p>
          </div>

          <hr />

          <div className="flex space-x-6 my-6 justify-start">
            <span className="flex items-center border border-black-4 px-5 py-3 space-x-7 w-[148px]">
              <button
                className="inline-block rounded-md text-gray-400 hover:text-gray-600 text-[16px]"
                onClick={() => handleQuantityChange(-1)}
                //   disabled={item.quantity <= 1}
              >
                <BiMinus size={16} />
              </button>
              <span className="mx-2 text-[16px]">{quantity}</span>
              <button
                className="inline-block rounded-md text-gray-400 hover:text-gray-600"
                onClick={() => handleQuantityChange(1)}
              >
                <BiPlus size={16} />
              </button>
            </span>

            <Button
              buttonText="ADD TO CART"
              btnIconRight={
                <PiShoppingCartSimpleLight color="#ffffff" size={32} />
              }
              handleClick={handleAddToCart}
            />

          </div>
        </div>
      </div>
    // </CartProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params!;

  return {
    props: {
      id,
    },
  };
};

export default ProductDetailPage;

