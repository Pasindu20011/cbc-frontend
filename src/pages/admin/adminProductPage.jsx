import axios from "axios";
import { useState } from "react";

const sampleData = [
  {
    productID: "CBC001",
    name: "Hydrating Face Moisturizer",
    altNames: ["Face Moisturizer", "Hydrating Cream", "Moisturizing Cream"],
    description: "A lightweight moisturizer that helps keep the skin soft, smooth, and hydrated throughout the day.",
    images: [
      "/images/products/moisturizer.jpg"
    ],
    price: 2500,
    lablledPrice: 3000,
    category: "Skincare"
  },

  {
    productID: "CBC002",
    name: "Vitamin C Brightening Serum",
    altNames: ["Vitamin C Serum", "Brightening Serum", "Face Serum"],
    description: "A refreshing vitamin C serum designed to support a brighter and more even-looking complexion.",
    images: [
      "/images/products/vitamin-c-serum.jpg"
    ],
    price: 3200,
    lablledPrice: 3800,
    category: "Skincare"
  },

  {
    productID: "CBC003",
    name: "Aloe Vera Facial Cleanser",
    altNames: ["Aloe Cleanser", "Face Wash", "Facial Wash"],
    description: "A gentle facial cleanser with aloe vera that removes everyday dirt and impurities while leaving skin feeling fresh.",
    images: [
      "/images/products/aloe-cleanser.jpg"
    ],
    price: 1800,
    lablledPrice: 2200,
    category: "Skincare"
  },

  {
    productID: "CBC004",
    name: "Rose Matte Lipstick",
    altNames: ["Matte Lipstick", "Rose Lip Color", "Lip Color"],
    description: "A smooth matte lipstick with rich color and a comfortable finish for everyday looks.",
    images: [
      "/images/products/rose-lipstick.jpg"
    ],
    price: 1500,
    lablledPrice: 1800,
    category: "Makeup"
  },

  {
    productID: "CBC005",
    name: "Waterproof Liquid Eyeliner",
    altNames: ["Liquid Eyeliner", "Waterproof Liner", "Eye Liner"],
    description: "A waterproof liquid eyeliner that provides a smooth and precise application for defined eyes.",
    images: [
      "/images/products/eyeliner.jpg"
    ],
    price: 1200,
    lablledPrice: 1500,
    category: "Makeup"
  },

  {
    productID: "CBC006",
    name: "Long Lasting Foundation",
    altNames: ["Liquid Foundation", "Face Foundation", "Makeup Foundation"],
    description: "A lightweight foundation that provides buildable coverage and a smooth natural-looking finish.",
    images: [
      "/images/products/foundation.jpg"
    ],
    price: 3500,
    lablledPrice: 4200,
    category: "Makeup"
  },

  {
    productID: "CBC007",
    name: "Coconut Hair Oil",
    altNames: ["Hair Oil", "Coconut Oil", "Hair Treatment"],
    description: "A nourishing coconut-based hair oil designed to help keep hair soft and manageable.",
    images: [
      "/images/products/coconut-hair-oil.jpg"
    ],
    price: 1600,
    lablledPrice: 2000,
    category: "Hair Care"
  },

  {
    productID: "CBC008",
    name: "Keratin Hair Shampoo",
    altNames: ["Keratin Shampoo", "Hair Shampoo", "Shampoo"],
    description: "A gentle shampoo formulated to cleanse the hair while helping maintain a smooth and healthy appearance.",
    images: [
      "/images/products/keratin-shampoo.jpg"
    ],
    price: 2200,
    lablledPrice: 2600,
    category: "Hair Care"
  },

  {
    productID: "CBC009",
    name: "Rose Body Lotion",
    altNames: ["Body Lotion", "Rose Lotion", "Moisturizing Lotion"],
    description: "A lightweight body lotion that helps moisturize the skin and leaves a pleasant rose fragrance.",
    images: [
      "/images/products/rose-body-lotion.jpg"
    ],
    price: 1900,
    lablledPrice: 2300,
    category: "Body Care"
  },

  {
    productID: "CBC010",
    name: "Luxury Rose Perfume",
    altNames: ["Rose Perfume", "Women's Perfume", "Fragrance"],
    description: "A floral fragrance with a soft and elegant rose-inspired scent suitable for everyday wear.",
    images: [
      "/images/products/rose-perfume.jpg"
    ],
    price: 4500,
    lablledPrice: 5200,
    category: "Fragrance"
  }
];

export default function AdminProductPage(){

    const [products , setProducts] = useState(sampleData)

    
    // axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
    //     (response)=>{
    //         console.log(response.data)
    //         //setProducts(response.data)
    //     }
    // ) 
    console.log(products);
    return(
        <div className="w-full h-full p-[10px] ">

            <table className="border w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Labelled Price</th>
                        <th>Category</th>  
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>
                           < img src="logo.png" className= "w-16 h-16 object-cover" />
                        </td> 
                        <td>PRD001</td>
                        <td>Classic White Shirt</td>
                        <td>1750</td>
                        <td>2150</td>
                        <td>Men's clothing</td>
                    </tr>

                    <tr>
                        <td>
                           < img src="logo.png" className= "w-16 h-16 object-cover" />
                        </td> 
                        <td> PRD001 </td>
                        <td> Classic White Shirt </td>
                        <td> 1750 </td>
                        <td> 2150 </td>
                        <td> Men's clothing </td>
                    </tr> */}
                {
                    products.map(
                    (item)=>{
                        console.log(item);
                        return (
                        <tr key={item.productID}>
                        <td>
                           < img src={item.images[0]} className= "w-16 h-16 object-cover" />
                        </td> 
                        <td> {item.productID} </td>
                        <td> {item.name} </td>
                        <td> {item.price} </td>
                        <td> {item.lablledPrice} </td>
                        <td> {item.category}  </td>
                    </tr>          
                    )}
                    )

                }
                </tbody>

            </table>
 
        </div>
    )

}