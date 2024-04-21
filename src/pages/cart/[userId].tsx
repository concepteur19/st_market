import { Cart } from "@/models/cart.model";
import CartService from "@/services/Cart/cart.service";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const cartList = () => {
  const router = useRouter();
  //   const { userId } = router.query;
  const [userId, setId] = useState("");

  useEffect(() => {
    const getUserId = () => {
      const fullPath = router.asPath;
      const segments = fullPath.split("/");
      const userId$ = segments[segments.length - 1];

      console.log("id oh the user", userId$);

      setId(userId$);
    };

    getUserId();
  }, []);

  const [userCarts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    const userCarts = async () => {
      try {
        const responseCart = await CartService.getUserCarts(userId);
        // console.log("product", responseProduct);
        // setCarts(responseCart.carts);
        console.log("responsecart", responseCart);
      } catch (error: any) {}
    };

    userCarts();
  }, [userId]);

  return (
    <div className=" flex flex-col pt-8 pb-[72px] border border-black-4 text-sm px-[300px] h-screen">
      <header className=" py-5 px-6 ">
        <h1 className=" font-publicSB text-lg">Shopping Cart</h1>
      </header>
      <main>
        <div className=" w-full">
          <div className=" border border-black-4 text-[12px] bg-black-4 text-black-2 w-full">
            <div className="flex justify-between py-[10px] px-6">
              <span className="">N°</span>
              <span className="">TOTAL PRODUCTS</span>
              <span className="">TOTAL QUANTITY</span>
              <span>USER ID</span>
              <span>TOTAL</span>
            </div>
          </div>
          <div className="py-[10px]  px-6">
            {userCarts.map((cart) => (
              <div
                key={cart.id + "-" + cart.userId}
                className="flex justify-between items-center space-y-4"
              >
                {/* <div className="w-[308px] flex items-center space-x-4"> */}
                <span>{cart.id}</span>
                {/* </div> */}
                <span className=" flex justify-start ">
                  ${cart.totalProducts}
                </span>

                <span className="mx-2 text-[16px]">{cart.totalQuantity}</span>

                <span className="text-left">
                  {cart.userId}
                  {/* ${calculateSubTotal(item.price, item.quantity)} */}
                </span>

                <span className="mx-2 text-[16px]">{cart.total}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { userId } = params!;

  return {
    props: {
      userId,
    },
  };
};

export default cartList;
