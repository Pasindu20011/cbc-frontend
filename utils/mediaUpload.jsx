import { createClient } from "@supabase/supabase-js"

const anonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6d2x6d2Jnamd0anF5anV6cm5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxMjU0NjcsImV4cCI6MjEwMjcwMTQ2N30.hjXzJnFQbzX4vToOUlZM9YbYdVjW3Y4iAszotUQKodg"
const supaBaseUrl ="https://xzwlzwbgjgtjqyjuzrnq.supabase.co"

const supabase = createClient(supaBaseUrl , anonKey)
/*
 supabase.storage.from("images").upload(file.name , file , {
            upsert: false,
            cacheControl : '3600',
        }).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl
                console.log(publicUrl);
            }
        )
*/
export default function mediaUpload(file){
    return new Promise(
        (resolve , reject)=>{

            if (file==null){
                reject("No file selected")
            }else{
                const timestamp = new Date().getTime();
                const fileName = timestamp+file.name

                supabase.storage
                .from("images")
                .upload(fileName, file, {
                    upsert: false,
                    cacheControl : '3600',

                }).then(()=>{
                    const publicUrl = supabase.storage
                    .from("images")
                    .getPublicUrl(fileName).data.publicUrl;
                    
                    resolve(publicUrl);
                    
                }).catch(()=>{
                    reject("An error occured")
                })
            }
        });
}