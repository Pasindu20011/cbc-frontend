import {Routes , Route} from 'react-router-dom';
export default function AdminPage(){

    return(
        <div className= "w-full h-screen flex bg-primary p-2">
                <div className="w-[300px] h-screen bg-primary ">
                
                </div> 
                <div className="w-[calc(100%-300px)] h-full flex border-[2px] border-accent rounded-[20px]">
                    <Routes>
                        <Route path="/"elements={<h1>Dashboard</h1>} />
                        <Route path="/products"elements={<h1>Products</h1>} />
                        <Route path="/orders"elements={<h1>Orders</h1>} />   
                    </Routes>
                </div> 
        </div>
    ) 
}