import { useEffect } from "react"

const AddedToCart=({onClose,message})=>{
    useEffect(()=>{
const timer=setTimeout(onclose,3000);
return ()=>clearTimeout(timer);
    },[onClose])
return (
    <div>
        <h1>{message}</h1>
    </div>
 
)
}
export default AddedToCart