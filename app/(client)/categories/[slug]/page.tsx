"use client"
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
    params: {
        slug: string;
    };
};

const Mens_collection = [
    {
        alternate_name: "",
        branch_stock: { 10: true, 12: true },
        branch_stock_qty: { 10: 6, 12: 3 },
        brand_name: "GorillaFRESH",
        brand_slug: "gorillafresh",
        categories: [
            { id: 19, name: "Vegetables", slug: "vegetables" },
            { id: 1, name: "Kachabazar", slug: "kachabazar" },
            { id: 5, name: "Mens collection", slug: "mens_collection" }
        ],
        description: "",
        description_bn: "",
        discount_price: 48,
        id: 3659,
        images: [
            {
                image: "https://cdn.gorillamove.com/products/images/3659/15_02_2024_10_18_55AM_F4EF75_23_12_2022_06_24_42AM_158DAB_03_12_2022_20_59_53PM_F93055_20_11_2022_10_59_50AM_80EE17_Fullkopi.jpg"
            }
        ],
        in_stock: true,
        is_active: true,
        is_featured: false,
        is_non_inventory: false,
        low_stock_threshold: 0,
        max_order_qty: 20,
        name: "man's cloth",
        next_day_enable: true,
        next_day_inventory_enable: true,
        ordered_qty: 0,
        ordered_qty_bucket: 1,
        price: 60,
        priority: 0,
        sku: "NEX-KAC-00001053",
        slug: "fulkopi-cauliflower-1-pcs-1",
        thumbnail: "https://cdn.gorillamove.com/products/images/3659/15_02_2024_10_18_55AM_F4EF75_23_12_2022_06_24_42AM_158DAB_03_12_2022_20_59_53PM_F93055_20_11_2022_10_59_50AM_80EE17_Fullkopi.jpg",
        total_stock_qty: 9,
        uom_name: "pcs"
    },

];
const WomenCollection = [
    {
        alternate_name: "",
        branch_stock: { 10: true, 12: true },
        branch_stock_qty: { 10: 6, 12: 3 },
        brand_name: "GorillaFRESH",
        brand_slug: "gorillafresh",
        categories: [
            { id: 19, name: "Vegetables", slug: "vegetables" },
            { id: 1, name: "Kachabazar", slug: "kachabazar" },
            { id: 4, name: "weman collection", slug: "women_collection" }
        ],
        description: "",
        description_bn: "",
        discount_price: 48,
        id: 3659,
        images: [
            {
                image: "https://cdn.gorillamove.com/products/images/3659/15_02_2024_10_18_55AM_F4EF75_23_12_2022_06_24_42AM_158DAB_03_12_2022_20_59_53PM_F93055_20_11_2022_10_59_50AM_80EE17_Fullkopi.jpg"
            }
        ],
        in_stock: true,
        is_active: true,
        is_featured: false,
        is_non_inventory: false,
        low_stock_threshold: 0,
        max_order_qty: 20,
        name: "women cloth",
        next_day_enable: true,
        next_day_inventory_enable: true,
        ordered_qty: 0,
        ordered_qty_bucket: 1,
        price: 60,
        priority: 0,
        sku: "NEX-KAC-00001053",
        slug: "fulkopi-cauliflower-1-pcs-1",
        thumbnail: "https://cdn.gorillamove.com/products/images/3659/15_02_2024_10_18_55AM_F4EF75_23_12_2022_06_24_42AM_158DAB_03_12_2022_20_59_53PM_F93055_20_11_2022_10_59_50AM_80EE17_Fullkopi.jpg",
        total_stock_qty: 9,
        uom_name: "pcs"
    }
]


const CategoryPage = ({ params }: Props) => {
    const [products, setProducts] = useState([{}])

    useEffect(() => {
        if (params.slug === "mans_collection") {
            setProducts(Mens_collection);
        }
        if (params.slug === "women_collection") {
            setProducts(WomenCollection);
        }
    }, [params.slug]);
    
    return (
        <div className="min-h-screen">
            <p>CategoryPage</p>
            <p>Post: {params.slug}</p>

            {/* {
                products.length > 0 &&
                products.map((product, i) => (
                    <div key={i}>
                        {product.name}
                    </div>

                ))
            } */}
        </div>
    );
};

export default CategoryPage;
