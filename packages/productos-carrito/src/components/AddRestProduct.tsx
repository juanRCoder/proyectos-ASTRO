import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { useStore } from "../store/productsStore";

export type propAddCartProducts = {
  nameProduct: string;
  priceProduct: number;
  count: number;
  setCount: (n: number) => void
}

export default function AddRestProduct({ count, setCount, nameProduct, priceProduct }: propAddCartProducts) {
  const { setCountProducts, setProductCart, seTtotalPrices } = useStore();

  const handleCountAdd = () => {
    let newCount = count + 1;
    setCount(newCount)
    setCountProducts(1)
    setProductCart({
      name: nameProduct,
      price: priceProduct,
      priceTotal: priceProduct,
      count: 1
    })
    seTtotalPrices()
  }
  const handleCountMinus = () => {
    if (count > 0) {
      let newCount = count - 1;
      setCount(newCount)
      setCountProducts(-1)
      setProductCart({
        name: nameProduct,
        price: priceProduct,
        priceTotal: priceProduct,
        count: -1
      })
      seTtotalPrices()
    }
  }

  return (
    <>
      <button onClick={handleCountMinus}>
        <CiCircleMinus className="w-6 h-6" />
      </button>
      <p>{count}</p>
      <button onClick={handleCountAdd}>
        <IoIosAddCircleOutline className="w-6 h-6" />
      </button>
    </>
  )
}
