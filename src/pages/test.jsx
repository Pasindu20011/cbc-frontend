import { useState } from "react"

export default function TestPage(){
    
      const[count,setCount] = useState(10)
      const [status , setStatus] = useState("Online")

    

    return(
        <div className="w-full h-screen flex justify-center items-center boarder-2 border-amber-50 ">
             
            <div className = "w-[500px] h-[500px] flex flex-col justify-center items-center gap-[20px] p-6 bg-amber-100">
                <div className="flex  justify-center items-center border-2 gap-[20px]">
                    <button onClick={
                    ()=>{
                        console.log("Decreased")
                        setCount(count-1);
                    }
                    } className="w-[80px] h-[40px] bg-accent rounded-lg ">
                    -
                    </button>

                    <span className="text-accent text-5xl w-[80px] text-center ]">
                    {count}
                     </span>

                    <button onClick={
                    ()=>{
                        console.log("Increased")
                        setCount(count+1);
                    }
                    } className="w-[80px] h-[40px] bg-accent rounded-lg ">
                    +
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center gap-[20px] ">
                     <span className="text-accent text-5xl">
                    {status}
                    </span>
                    <div className="flex flex-row gap-[20px]">
                        <button onClick={() =>setStatus("Online")} className="w-[100px] h-[40px] bg-accent rounded-lg ">
                         Online
                        </button>
                        <button onClick={() =>setStatus("Offline")} className="w-[100px] h-[40px] bg-accent rounded-lg ">
                         Offline
                        </button>
                        <button onClick={() =>setStatus("Deactivated")}  className="w-[100px] h-[40px] bg-accent rounded-lg ">
                         Deactivated
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}