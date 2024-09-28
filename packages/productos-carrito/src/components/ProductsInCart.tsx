import EmptyProdut from '../assets/icons/illustration-empty-cart.svg';
import { useStore } from '../store/productsStore';
import { IoIosCloseCircleOutline } from "react-icons/io";


export default function ProductsInCart() {
  const { deleteProductCart, totalPrices, productCart, totalProducts } = useStore();

  const deleteProduct = (name: string) => {
    deleteProductCart(name)
    totalProducts()
  }
  return (
    <>
      {
        productCart.length > 0 ? (
          <section>
            {productCart.map((pr) => (
              <div key={pr.name}>
                <button onClick={() => deleteProduct(pr.name)}>
                  <IoIosCloseCircleOutline />
                </button>
                <p className='text-lg font-semibold'>{pr.name}</p>
                <p> {pr.count}x  @${(pr.price).toFixed(2)} ${(pr.priceTotal).toFixed(2)}</p>
              </div>
            ))}
            <p className='text-2xl text-right text-orange-950 font-semibold'>Order Total ${totalPrices.toFixed(2)}</p>
          </section>
        ) : (
          <figure>
            <img
              className="m-auto"
              src={EmptyProdut.src}
              alt="emptyProduct"
              loading="eager"
            />
            <p className="pb-4 text-center text-orange-950 text-sm">
              Your added items will appear here
            </p>
          </figure>
        )
      }
    </>
  )
}
