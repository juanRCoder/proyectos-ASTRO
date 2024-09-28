import { useEffect, useState } from "react"
import iconAddToCard from '../assets/icons/icon-add-to-cart.svg';
import { useStore } from "../store/productsStore";
import AddRestProduct from "./AddRestProduct";

export type propAddCartProducts = {
  nameProduct: string;
  priceProduct: number;
}

export default function AddToCart({ nameProduct, priceProduct }: propAddCartProducts) {
  // Instancias de estado global 
  const resetCount = useStore((state) => state.resetCount)

  const [count, setCount] = useState<number>(0);
  const [view, setView] = useState<boolean>(true);

  useEffect(() => {
    setCount(0)
  }, [resetCount])

  return (
    <>
      <div
        onMouseLeave={() => setView(true)}
        className="relative flex justify-evenly items-center gap-8 px-4 py-[8px] rounded-full bg-orange-500 text-white cursor-pointer"
      >
        <AddRestProduct
          count={count}
          setCount={setCount}
          nameProduct={nameProduct}
          priceProduct={priceProduct}
        />
        {view && (
          <span
            onClick={() => setView(false)}
            className="px-3 top-0 left-0 flex justify-center items-center gap-2 absolute w-full h-full bg-white text-black outline outline-1 outline-orange-500 rounded-full hover:text-orange-500 cursor-pointer"
          >
            <img
              className="img"
              src={iconAddToCard.src}
              alt="addtoCard SVG"
              loading="eager"
            />
            <p className="text-sm font-semibold">Add to Card</p>
          </span>
        )}
      </div>
    </>
  )
}
