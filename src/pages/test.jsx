
import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import mediaUpload from "../../utils/mediaUpload"


export default function TestPage(){
    
    const[file,setFile] = useState(null)
    
    async function uploadImage(){

       const link = await mediaUpload(file)
       console.log(link)

    }

    

    return(
            <div className="flex w-full  h-full items-center justify-center">
                <input type="file" onChange={
                    (e)=>{
                        setFile(e.target.files[0])
                    }
                }/>
                <button className="w-[100px] h-[50px] bg-blue-800 text-white p-2 rounded" onClick={uploadImage}>Upload</button>
            </div>
    )

}