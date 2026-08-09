import { Link } from "react-router-dom";    
export default function Header(){
    return(
        <header className = "w-full h-[150px] bg-accent text-white px-[35px]">
            <div className = "w-full h-full flex relative " >
                <img src="logo.png" className="h-full absolute w-[170px] left-0  object-cover" />
                <div className="w-full h-full flex justify-center items-center gap-[20px] text-lg ">
                    <Link to="/"> Home </Link> 
                    <Link to="/products"> Products </Link> 
                    <Link to="/about"> About </Link> 
                    <Link to="/contact"> Contact </Link>                   
                </div>
           
            </div>

        </header>    

    )
}