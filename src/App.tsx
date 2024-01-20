import { useEffect, useState } from 'react'
import './index.css'
import { Product } from './@types/types';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import { useCartStore } from './stores/cartStore';

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [menu, setMenu] = useState(false);
  const {products: cartProducts, removeAll} = useCartStore();

  useEffect(() => {

    async function getProducts() {

      try {
        const res = await fetch('https://fakestoreapi.com/products');

        const data: Product[] = await res.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();

  })

  return (
    <div className='w-full h-full space-y-10 bg-gray-100 p-3 relative'>
      <h1 className='text-center text-3xl font-bold'>Cart Management with Zustand</h1>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
        {products.map(p => <ProductCard key={p.id} product={p}></ProductCard>)}
      </div>
      <div className='space-y-2 fixed top-0 right-10 flex flex-col items-end'>
        <div onClick={() => setMenu(true)} className='h-10 w-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-2xl border-gray-200 border-[1px]'>
          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </div>
        {
          menu ? 
            <div className='p-5 bg-white relative max-h-[400px] space-y-3 overflow-y-scroll rounded-md'>
              <h3 className='text-sm font-bold'>Your Cart</h3>
              <div className='space-y-2'>
                { cartProducts.length > 0 ? cartProducts.map(p => <CartItem key={p.product.id} item={p}></CartItem>) : 'No items yet'}
              </div>
              <button onClick={() => setMenu(false)} className='text-xl font-bold text-red-600 absolute top-2 right-2'>
                x
              </button>
              {cartProducts.length > 0 ? <button type='button' onClick={() => removeAll()} className='w-full py-2 px-3 text-white font-semibold bg-red-600 rounded-md'>Remove all</button> : null}
            </div>
          : null
        }
      </div>
    </div>
  )
}

export default App
