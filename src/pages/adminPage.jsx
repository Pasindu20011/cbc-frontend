import {Link , Routes , Route} from 'react-router-dom';
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { BsBox2Heart } from "react-icons/bs";
import AdminProductPage from './admin/adminProductPage.jsx';
import AddProductPage from './admin/adminAddNewProduct.jsx';
import UpdateProductPage from './admin/adminUpdateProduct.jsx';
export default function AdminPage(){

    return(
        <div className= "w-full h-screen flex bg-primary p-2 text-secondary ">
                <div className="w-[300px] h-screen flex flex-col bg-primary items-center  ">
                    <div className="w-[90%] h-[100px] flex flex-row bg-accent items-center rounded-2xl p-1.5">
                        <img 
                            src="/logo.png" 
                            alt="CBC-Crystal Beauty Clear" 
                            className="h-[70px] " />

                        <span className="text-white ml-4 ">Admin Panel</span>
                    </div>
                    <Link to="/admin" className="w-[90%] flex items-center gap-2  rounded-lg ">
                        <div className="w-full h-full flex flex-row p-2 gap-[10px]  items-center">
                            <HiOutlineChartSquareBar className="text-2xl
                            " />
                            Dashboard 
                        </div>
                    </Link>

                    <Link to="/admin/orders" className="w-[90%] flex items-center gap-2  rounded-lg ">
                        <div className="w-full h-full flex flex-row p-2 gap-[5px]  items-center">
                            <MdOutlineShoppingCart className="text-2xl
                            " />
                            Orders 
                        </div>
                    </Link>

                    <Link to="/admin/products" className="w-[90%] flex items-center gap-2  rounded-lg ">
                        <div className="w-full h-full flex flex-row p-2 gap-[5px]  items-center">
                            <BsBox2Heart className="text-2xl
                            " />
                            Products
                        </div>   
                    </Link>

                    <Link to="/admin/users" className="w-[90%] flex items-center gap-2  rounded-lg ">
                        <div className="w-full h-full flex flex-row p-2 gap-[5px]  items-center">
                            <PiUsersBold className="text-2xl
                            " />
                            Users
                        </div>
                    </Link>

                    

                </div> 
                <div className="w-[calc(100%-300px)] h-full flex border-[4px] border-accent rounded-[20px] overflow-hidden ">
                    <div className = "bg-accent h-full max-h-full max-w-full w-full overflow overflow-y-scroll ">
                    <Routes>
                        <Route path ="/"element={<h1> Dashboard </h1>} />
                        <Route path ="/products"element={<AdminProductPage/>} />
                        <Route path ="/orders"element={<h1> Orders </h1>} />   
                        <Route path ="/users"element={<h1> Users </h1>} />  
                        <Route path="/add-product" element={<AddProductPage/>}/>
                        <Route path="/update-product" element={<UpdateProductPage/>}/>
                    </Routes>
                    </div>
                </div> 
        </div>
    ) 
}