import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useStore } from '../store/productsStore';

export default function DessertsCart() {
  const { totalProducts, productCart, deleteProductCart } = useStore();

  const deleteProduct = (name: string) => {
    deleteProductCart(name)
    totalProducts()
  }

  return (
    <article>
      {productCart.map((pr) => (
        <section key={pr.name} className='flex flex-row-reverse justify-between mx-5 pb-3 mb-3 border-b'>
          <button onClick={() => deleteProduct(pr.name)}>
            <IoIosCloseCircleOutline className='font-thin text-amber-700/40 h-7 w-7' />
          </button>
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] font-semibold text-orange-900'>{pr.name}</p>
            <p className='text-orange-950/50 font-semibold'>
              <b className='text-orange-500 font-semibold pr-5'>{pr.count}x</b>
              @ ${(pr.price).toFixed(2)}
              <b className='text-orange-950/75 font-semibold pl-3'>${(pr.priceTotal).toFixed(2)}</b>
            </p>
          </div>
        </section>
      ))}
    </article>
  )
}
