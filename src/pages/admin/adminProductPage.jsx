

import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { SlPlus } from "react-icons/sl";




export default function AdminProductPage(){

    const [products , setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
          axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
        (response)=>{
            console.log(response.data)
            setProducts(response.data)
        }
    ) 
    },[])
    

    console.log(products);
return (
    <div className="w-full h-full p-4 md:p-6 bg-primary/20">
      <Link to="/admin/add-product" className="fixed right-[50px] bottom-[50px] text-5xl hover:text-primary"> 
            <SlPlus />  
      </Link>

        {/* Page Header */}
        <div className="mb-6 flex flex-col flex-row items-center justify-between gap-3">
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-secondary tracking-tight">
                    Products
                </h1>

                <p className="text-sm text-secondary/60 mt-1">
                    Manage your cosmetic products and inventory
                </p>
            </div>

            <div className="px-4 py-2 rounded-full bg-white border border-secondary/10 shadow-sm">
                <span className="text-sm text-secondary/60">
                    Total Products{" "}
                </span>
                <span className="font-semibold text-accent">
                    {products.length}
                </span>
            </div>
        </div>


        {/* Table Card */}
        <div className="w-full overflow-hidden rounded-2xl bg-white border border-secondary/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

            <div className="overflow-x-auto">

                <table className="w-full text-left border-collapse">

                    {/* Table Header */}
                    <thead>
                        <tr className="bg-secondary text-white">
                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                                Image
                            </th>

                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                                Product ID
                            </th>

                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                                Product Name
                            </th>

                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                                Product Price
                            </th>

                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                                Labelled Price
                            </th>

                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                                Stock
                            </th>

                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">
                                Category
                            </th>

                            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>


                    {/* Table Body */}
                    <tbody className="divide-y divide-secondary/10">

                        {
                            products.map((item, index) => {

                                console.log(item);

                                return (
                                    <tr
                                        key={item.productID}
                                        className="group transition-all duration-200 hover:bg-primary/20"
                                    >

                                        {/* Image */}
                                        <td className="px-5 py-4">

                                            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-primary/30 border border-secondary/10 shadow-sm">

                                                <img
                                                    src={item.images[0]}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                />

                                            </div>

                                        </td>


                                        {/* Product ID */}
                                        <td className="px-5 py-4">

                                            <span className="inline-flex px-3 py-1 rounded-full bg-secondary/5 text-xs font-medium text-secondary/70">
                                                {item.productID}
                                            </span>

                                        </td>


                                        {/* Product Name */}
                                        <td className="px-5 py-4">

                                            <div className="font-medium text-secondary group-hover:text-accent transition-colors">
                                                {item.name}
                                            </div>

                                        </td>


                                        {/* Product Price */}
                                        <td className="px-5 py-4">

                                            <span className="font-semibold text-accent">
                                                Rs. {item.price}
                                            </span>

                                        </td>


                                        {/* Labelled Price */}
                                        <td className="px-5 py-4">

                                            <span className="text-secondary/60 line-through">
                                                Rs. {item.lablledPrice}
                                            </span>

                                        </td>

                                        <td className="px-5 py-4">

                                            <span className="text-secondary/60 ">
                                                {item.stock}
                                            </span>

                                        </td>


                                        {/* Category */}
                                        <td className="px-5 py-4">

                                            <span className="inline-flex px-3 py-1 rounded-full bg-primary text-secondary text-xs font-medium">
                                                {item.category}
                                            </span>

                                        </td>


                                        {/* Actions */}
                                        <td className="px-5 py-4">

                                            <div className="flex justify-center items-center gap-2">

                                                {/* Edit */}
                                                <button
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg
                                                    bg-primary/40 text-secondary
                                                    hover:bg-accent hover:text-white
                                                    transition-all duration-200
                                                    hover:scale-105
                                                    shadow-sm"
                                                    onClick={()=>{
                                                        navigate("/admin/update-product",{
                                                            state : item
                                                        })
                                                    }}
                                                >
                                                    <FaRegEdit size={16} />
                                                </button>


                                                {/* Delete */}
                                                <button
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg
                                                    bg-red-50 text-accent
                                                    hover:bg-accent hover:text-white
                                                    transition-all duration-200
                                                    hover:scale-105
                                                    shadow-sm"
                                                >
                                                    <IoTrashOutline size={17} />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>

            </div>

        </div>

    </div>
)

}