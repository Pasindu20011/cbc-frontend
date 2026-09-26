
import { Link } from "react-router-dom"
export default function ProductCard(props){
    const product = props.product
    return(
        <div className="w-[300px] h-[400px] shadow-2xl  m-3 flex flex-col items-center bg-gray-400 rounded-2xl justify-center
        p-[10px] ">
        <img src={product.images[0]} className = "w-full h-[250px] object-cover wrap-normal"/>
        <h1 className="text-xl font-bold text-secondary ">{product.name}</h1>
        {
            product.lablledPrice>product.price?
            <div className = "  flex gap-3 items-center">
                 <p className="text-lg text-secondary line-through font-semibold">LKR {product.lablledPrice.toFixed(2)}</p>
                 <p className="text-lg text-white font-semibold">LKR {product.price.toFixed(2)}</p>
            </div>:
             <p className="text-lg text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
        }
        <p className="text-sm text-secondary/70 ">{product.productID}</p>
        <p className="text-sm text-secondary/70 ">{product.category}</p>
       
        <Link   to={"/overview/"+product.productID}
                 className= "w-[260px] bg-orange-300 h-[30px] border-white rounded-2xl shadow-2xl  hover:bg-blue-400 text-accent">
                 View Product
        </Link> 
        </div>
    )
}