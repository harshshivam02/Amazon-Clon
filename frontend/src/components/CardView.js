import ItemCard from "./ItemCard";
import mockData from "../utils/Mockdata";

const CardView = () => {
  const itemList = mockData;

  return (
    <div className="bg-transparent absolute w-full   flex flex-wrap justify-center gap-6 p-4">
      {itemList.map((item) => (
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 " key={item.id}>
          <ItemCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default CardView;
