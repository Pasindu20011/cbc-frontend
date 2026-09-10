import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import mediaUpload from "../../../utils/mediaUpload"
import toast from "react-hot-toast"
import { TbLabelFilled } from "react-icons/tb"
import axios from "axios"



export default function UpdateProductPage(){
    const location = useLocation()
 

  const [productId,setProductID] = useState(location.state.productID) 
  const [name,setName] = useState(location.state.name)
  const [altNames,setAltNames] = useState(location.state.altNames.join(","))
  const [description,setDescription] = useState(location.state.description)
  const [images, setImages] = useState([])
  const [price , setPrice] = useState(location.state.price)
  const [lablledPrice , setLablledPrice ] = useState(location.state.lablledPrice)
  const [category , setCategory ] = useState(location.state.category)
  const [stock , setStock] = useState(location.state.stock)


  const navigate = useNavigate()

  async function updateProduct(){
    const token = localStorage.getItem("token");
      if (token == null){
        navigate("/login");
        return
      } 
      const promises = []   
      for (let i=0 ; i<images.length; i++){

        promises[i] = mediaUpload(images[i])
      }
      try{
       let urls = await Promise.all(promises)
       if(urls.length==0){
            urls = location.state.images
       }
       const alternativeNames = altNames.split(",")
          const product = {
            productID : productId,
            name : name,
            altNames : alternativeNames,
            description : description,
            images : urls,
            price : price,
            lablledPrice : lablledPrice,
            category : category,
            stock : stock 
          }

          await axios.put(import.meta.env.VITE_API_URL+"/api/products/"+productId,product,{
            headers:{
              Authorization:"Bearer " + token
            }
          })
          toast.success("Product Updated Successfully")
          
          navigate("/admin/products")

      }catch (error
      ) {
          toast.error("An error Occured");
      }
       
    }

  return(
    <div className="w-full min-h-full bg-secondary flex justify-center items-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-secondary px-8 py-6 border-b-4 border-primary">

          <h1 className="text-2xl font-semibold text-white tracking-wide">
            Update Product
          </h1>

          <p className="text-white/50 text-sm mt-1">
           Update cosmetic product in your CBC collection
          </p>

        </div>

        {/* Form */}
        <div className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Product ID */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Product ID
              </label>

              <input
              disabled
                value={productId}
                onChange={(e)=>{setProductID(e.target.value)}}
                placeholder="e.g. CBC001"
                className="w-full px-4 py-3 rounded-xl border border-secondary/15
                bg-secondary/5 text-secondary outline-none
                focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200"
              />
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Product Name
              </label>

              <input
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                placeholder="Enter product name"
                className="w-full px-4 py-3 rounded-xl border border-secondary/15
                bg-secondary/5 text-secondary outline-none
                focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200"
              />
            </div>


            {/* Alternative Names */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-secondary mb-2">
                Alternative Names
              </label>

              <input
                value={altNames}
                onChange={(e)=>{setAltNames(e.target.value)}}
                placeholder="Enter alternative names"
                className="w-full px-4 py-3 rounded-xl border border-secondary/15
                bg-secondary/5 text-secondary outline-none
                focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200"
              />
            </div>


            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-secondary mb-2">
                Product Description
              </label>

              <textarea
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                placeholder="Describe the product..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-secondary/15
                bg-secondary/5 text-secondary outline-none resize-none
                focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200"
              />
            </div>


            {/* Images */}
            <div className="md:col-span-2">

              <label className="block text-sm font-medium text-secondary mb-2">
                Product Images
              </label>

              <div className="relative border-2 border-dashed border-secondary/20
              rounded-xl p-6 text-center bg-secondary/5
              hover:border-primary hover:bg-primary/5
              transition-all duration-200">

                <p className="text-sm text-secondary/50 mb-3">
                  Select product images
                </p>

                <input
                  type="file"
                  onChange={(e)=>{setImages(e.target.files)}}
                  multiple
                  className="w-full text-sm text-secondary/60
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:bg-primary file:text-white
                  file:font-medium
                  hover:file:bg-primary/90
                  cursor-pointer"
                />

              </div>

            </div>


            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Selling Price
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2
                text-secondary/40 text-sm">
                  Rs.
                </span>

                <input
                  type="number"
                  value={price}
                  onChange={(e)=>{setPrice(e.target.value)}}
                  placeholder="0.00"
                  className="w-full pl-12 pr-4 py-3 rounded-xl
                  border border-secondary/15 bg-secondary/5
                  text-secondary outline-none
                  focus:border-primary focus:ring-2 focus:ring-primary/20
                  transition-all duration-200"
                />

              </div>
            </div>


            {/* Labelled Price */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Labelled Price
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2
                text-secondary/40 text-sm">
                  Rs.
                </span>

                <input
                  type="number"
                  value={lablledPrice}
                  onChange={(e)=>{setLablledPrice(e.target.value)}}
                  placeholder="0.00"
                  className="w-full pl-12 pr-4 py-3 rounded-xl
                  border border-secondary/15 bg-secondary/5
                  text-secondary outline-none
                  focus:border-primary focus:ring-2 focus:ring-primary/20
                  transition-all duration-200"
                />

              </div>
            </div>


            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Category
              </label>

              <select
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
                className="w-full px-4 py-3 rounded-xl
                border border-secondary/15 bg-secondary/5
                text-secondary outline-none
                focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200 cursor-pointer"
              >
                <option value ="cream">Cream</option>
                <option value="lotion">Lotion</option>
                <option value="serum">Serum</option>
              </select>
            </div>


            {/* Stock */}
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Stock Quantity
              </label>

              <input
                type="number"
                value={stock}
                onChange={(e)=>{setStock(e.target.value)}}
                className="w-full px-4 py-3 rounded-xl
                border border-secondary/15 bg-secondary/5
                text-secondary outline-none
                focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200"
              />
            </div>

          </div>


          {/* Bottom Accent */}
          <div className="mt-8 pt-6 border-t border-secondary/10 flex items-center justify-between">

            <div>
              <span className="text-xs text-secondary/40">
                CBC • Crystal Beauty Clear
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex px-3 py-1 h-[40px] w-[100px] rounded-full bg-primary justify-center items-center text-secondary ring-1 ring-accent/30 hover:border-red-500 hover:border-[2px]">
               Cancel
              </button>

              <button onClick={updateProduct} className="flex px-3 py-1 h-[40px] w-[100px] rounded-full bg-primary justify-center items-center text-secondary ring-1 ring-accent/30 hover:border-red-500 hover:border-[2px]">
               Update
              </button>
            </div>
 
          </div>
          

        </div>

      </div>

    </div>
  )
}