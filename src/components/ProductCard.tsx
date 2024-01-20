import { Product } from "../@types/types";
import { useCartStore } from "../stores/cartStore";

export default function ProductCard({ product }: { product: Product }) { 
    
    const {addItem} = useCartStore();

    return (
        <div className="rounded-md shadow-md p-5 h-[450px] bg-white space-y-3">
            <div className="w-full h-[50%] rounded-sm relative">
                <img className="w-full h-full object-center object-contain" src={product.image} alt="Product image" />
                <div className="py-1 px-2 absolute top-0 right-0 flex gap-x-2 items-center shadow-xl bg-white rounded-sm">
                    <svg className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="currentColor" />
                    </svg>
                    <span className="font-bold">{product.rating.rate}</span>
                </div>
                <div className="absolute top-0 left-0 shadow-xl py-1 px-2 bg-white rounded-sm">
                    <span className="font-medium">{product.category}</span>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-lg">{product.title.split(' ').slice(0,3).join(' ')}</h2>
                <span className="text-xl font-bold">${product.price}</span>
            </div>
            <p className="text-sm">{product.description.slice(0, 200)}</p>
            <button onClick={() => addItem({product, quantity: 1})} className="py-2 px-3 font-semibold text-white bg-green-600 rounded-md w-full">
                Add to Cart
            </button>
        </div>
    )
}