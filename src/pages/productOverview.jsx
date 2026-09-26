import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import toast from "react-hot-toast"
import { Loader } from "../components/loader"
import ImageSlider from "../components/imageSlider"
export default function ProductOverview(){
   

    const params = useParams()
    const [status, setStatus] = useState("loading")
    const [product, setProduct] = useState(null)
 
    useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_API_URL + "/api/products/" + params.id).then(
                (response)=>{
                    console.log(response.data)
                    setProduct(response.data)
                    setStatus("success")
                }
            ).catch((error)=>{
                toast.error("Error fetching product ")
                setStatus("error")
            })
        }
   ,[] )
   
    return(
        
        <div className = "w-full h-[calc(100vh-100px)] text-secondary">  
           
            {status == "loading" && <Loader/>}

            {status == "success" && (

                <div className = "w-full h-full  bg-blue-500 flex  ">
                    <div className="w-[40%] h-full  flex border-2 border-white bg-yellow-100 justify-center items-center  ">
                        
                     <ImageSlider images={product.images}/>
                        
                    </div>

                    <div className="w-[50%] h-full  flex flex-col  items-center gap-4 p-10">
                        <span className = "text-sm font-normal text-secondary/70 ">{product.productID}</span>
                        <h1 className = "text-2xl font-bold text-center">{product.name}
                            {
                                product.altNames.map((name,index)=>{
                                    return(
                                        <span key={index} className = "text-sm font-normal text-secondary/70 ">{" | " +name}</span>
                                    )

                                })
                            }
                        </h1>
                        <p className = "mt-[30px] text-justify">{product.description}</p>
                        <div className = "w-full h-[50px] flex">
                        <p>Category :  {product.category}</p>
                        </div>
                        {    
                            product.labelledPrice>product.price?
                            <div className = "flex gap-3">
                                <p>LKR{product.labelledPrice.toFixed(2)}</p>
                                <p className = "text-lg font-bold text-gr-500">LKR{product.price.toFixed(2)}</p>
                            </div>:
                            <p className = "text-lg font-bold text-secondary">LKR{product.price.toFixed(2)}</p>
                        }
                        <div className="w-full h-[40px] items-center justify-center flex gap-2">
                        <div className="w-full h-[40px] flex gap-4">    
                        <button className="w-full h-full bg-accent text-white font-semibold hover:bg-accent/80">Add TO Cart</button>
                       
                        </div> 
                        <div className="w-full h-[40px] flex gap-4">    
                        
                        <button className="w-full h-full bg-transparent border-2 border-accent text-white font-semibold hover:bg-accent/80">Buy Now</button>
                        </div> 
                        
                        </div>

                       </div>
                </div>
            )}
        
            {status == "error" && <h1 className = "text-red-500">Failed to load product details</h1>}
        
        </div>

    
    )
}  