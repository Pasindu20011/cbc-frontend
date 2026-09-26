import { useState } from "react"
export default function ImageSlider(props){
    const images = props.images
    const [activeImage , setActiveImage] = useState(0)

    return(
        <div className = "max-w-[350px] w-full flex flex-col gap-2 drop-shadow-amber-500 object-cover rounded-3xl ">
            <img 
                src = {images[activeImage]} 
                className = "w-full h-[350px] object-cover rounded-3xl"
                alt = "Product preview"
            />
            <div className="w-full h-[100px] border-black border-2 flex justify-center items-center p-2 gap-2 rounded-lg  "> 
            {
                images.map(
                    (img,index)=>{
                        return( 
                            <img 
                                onClick = {()=>{setActiveImage(index)}}
                                key={index} 
                                className={"w-[70px] h-[70px] overflow-hidden  flex object-cover" + (activeImage == index && " border-[4px] border-black")} 
                                src={images[index]}
                                alt = "Product preview"/>
                            )
                    }
                )
            }
            </div>
        </div>
    )
}    