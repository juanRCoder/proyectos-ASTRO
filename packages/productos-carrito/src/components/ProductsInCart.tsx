import { useState } from 'react';
import { useStore } from '../store/productsStore';
import Modal from './modal/Modal';
import DessertsCart from './DessertsCart';
import ConfirmOrder from './ConfirmOrder';


export default function ProductsInCart() {
  const { totalPrices, productCart } = useStore();
  const [toggleModal, setToggleModal] = useState<boolean>(false);


  return (
    <>
      <section>
        {
          productCart.length > 0 ? (
            <>
              <DessertsCart />
              <div className='my-7 mx-5 flex justify-between items-center text-orange-950 font-semibold'>
                <p className='font-medium'>Order Total</p>
                <p className='text-3xl font-bold'>${totalPrices.toFixed(2)}</p>
              </div>
              <div className='flex gap-2 justify-center pb-4'>
                <figure>
                  <img
                    src="/icons/icon-carbon-neutral.svg"
                  />
                </figure>
                <p className='text-sm text-orange-950/70 mb-5'>
                  This is a <b>carbon-neutral</b> delivery
                </p>
              </div>
              <ConfirmOrder setToggleModal={setToggleModal} />
              {
                toggleModal &&
                <Modal
                  toggleModal={(bool) => setToggleModal(bool)}
                  totalPrices={totalPrices}
                />
              }
            </>
          ) : (
            <figure>
              <img
                src="/icons/illustration-empty-cart.svg"
                alt='imagen1'
                loading="eager"
                className='mx-auto'
              />
              <p className="pb-4 text-center text-orange-950 text-sm">
                Your added items will appear here
              </p>
            </figure>
          )
        }
      </section>
    </>
  )
}
