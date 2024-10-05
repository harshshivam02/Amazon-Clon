import ItemCard from "./ItemCard";
import mockData from "../utils/Mockdata";
const CardView =()=>{
    const itemList=mockData;
    
    return (
       <div className="absolute bg-transparent z-50 w-full -mt-56 flex flex-wrap gap-10 mr-28 ml-28 ">
        {itemList.map((item)=>(
             <div 
             className="mt-0"
             key={item.id}>
                <ItemCard data={item}/>
             </div>
        ))}
       </div> 
    )

}
export default CardView;