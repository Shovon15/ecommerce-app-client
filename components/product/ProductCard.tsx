"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useDispatch, useSelector } from "react-redux";
import { IProduct, addToCart, removeFromCart } from "@/redux/feature/cart/cartSlice";
import { Minus, Plus } from "lucide-react";

type Props = {
	product: {
		id: string;
		image: string;
		title: string;
		price: string;
	};
};
const handleAdd = (product: any) => {
	console.log("product", product);
};

const ProductCard = ({ product }: Props) => {
	const dispatch = useDispatch();
	const products = useSelector((state: IProduct) => state.cart);
	const { id, image, price, title } = product;
	// console.log(products, "from cart");

	const productInCart = products.find((product: { id: string }) => product.id === id);

	let quantityInCart = 0;
	if (productInCart) {
		quantityInCart = productInCart.quantity || 0; 
	}

	const handleCart = (product: any) => {
		dispatch(addToCart(product));
	};

	const handleRemoveCart = (id: string) => {
		dispatch(removeFromCart({ id }));
	};

	return (
		<Card className="w-full z-[0] h-auto shadow-md cursor-pointer bg-primary-foreground dark:bg-secondary bg-red-500 relative">
			{/* <Link href={`course/${course.slug}`}> */}

			<div className="absolute right-5 top-5">
				{productInCart ? (
					<div className="flex gap-0">
						<Button onClick={() => handleRemoveCart(product.id)} className="rounded-l-full px-2">
							<Minus size={20} />
						</Button>
						<p className="w-10 flex justify-center items-center bg-primary text-white">{quantityInCart}</p>
						<Button onClick={() => handleCart(product)} className="rounded-r-full px-2">
							<Plus />
						</Button>
					</div>
				) : (
					<Button onClick={() => handleCart(product)}>Add to cart</Button>
				)}
			</div>
			<div className="flex justify-center w-full h-[200px] p-3">
				{product.image && <Image src={image} alt="course-thmb" className="rounded-md" />}
			</div>
			<CardHeader className="p-3">
				<h1 className="text-lg font-semibold hover:underline">name</h1>
			</CardHeader>
			<CardContent className="py-2 flex justify-between">
				<p className="font-semibold">14 students</p>
			</CardContent>
			<CardFooter className="pt-3 flex justify-between">
				<div className="flex gap-2">
					<p className="font-semibold">$</p>
					<p className="text-sm font-thin line-through">$</p>
				</div>
				<p className="font-semibold flex gap-1 items-center"> 32 lectures</p>
			</CardFooter>

			{/* </Link> */}
		</Card>
	);
};

export default ProductCard;
