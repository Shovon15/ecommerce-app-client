import { IProduct } from '@/redux/feature/cart/cartSlice';
import React from 'react'
import { useSelector } from 'react-redux';

type Props = {
    isCartOpen: React.ReactNode;
}
const CartComponent = ({ isCartOpen }: Props) => {
    // console.log(isCartOpen, "isCartOpen")
    const products = useSelector((state: IProduct) => state.cart);
    // console.log(products, "products from cart")
    return (
        <div className={`${isCartOpen ? "opacity-1" : " opacity-0"} md:w-full min-h-screen bg-red-500 duration-300 hidden md:block`}>
            {
                products.length > 0 &&
                products.map((product: IProduct, i:null | number) => (
                    <div key={i}>
                        <p>{product.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CartComponent