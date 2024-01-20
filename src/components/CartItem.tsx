import { CartItem as Item } from "../@types/types";
import { useCartStore } from "../stores/cartStore";

export default function CartItem({ item }: { item: Item }) {
    
    const {increaseQuantity, decreaseQuantity, removeItem} = useCartStore();

    return (
        <div className="flex items-center gap-x-5 border-b-[1px] p-2">
            <div className="w-10 h-10">
                <img className="w-full h-full object-contain object-center" src={item.product.image} alt="Product image" />
            </div>
            <span className="text-sm">{item.product.title.split(' ').slice(0,3).join(' ')}</span>
            <p className="text-sm">Price: <span className="font-medium">${item.product.price}</span></p>
            <div className="flex items-center gap-x-2">
                <button onClick={() => increaseQuantity(item.product.id)} className="w-6 h-6 shrink-0 text-white font-medium bg-green-600 rounded-full">+</button>
                <div className="flex flex-col gap-y-1 items-center">
                    <p className="text-sm">Quantity: </p>
                    <span className="font-medium">{item.quantity}</span>
                </div>
                <button onClick={() => decreaseQuantity(item.product.id)} className="w-6 h-6 shrink-0 text-white font-medium bg-red-600 rounded-full">-</button>
            </div>
            <p className="text-sm">Total: <span className="font-bold">${(item.quantity * item.product.price).toFixed(2)}</span></p>
            <button onClick={() => removeItem(item.product.id)} type="button">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
            </button>
        </div>
    )

}