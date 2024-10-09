import mockData from "../utils/Mockdata";
import { useSearchParams } from "react-router-dom";

import ItemCard from "./ItemCard";
const SearchView = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const searchCategory = searchParams.get("category");
  console.log(mockData)
console.log(searchCategory, searchQuery);
  const filteredList = () => {
    if (searchQuery && searchCategory) {
      return mockData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          item.category === searchCategory
      );
    } 
    else if (searchQuery) {
   return mockData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchCategory) {
      return mockData.filter((item) => item.category === searchCategory);
    } else {
      return mockData;
    }
  };
  const filteredItems=filteredList();
  console.log(filteredItems);
  if (!filteredItems.length) {
    return <h2>No items found.</h2>;
  }

  return (
    <div className="m-auto  p-8 flex flex-wrap gap-6 justify-center ">
      {filteredList()?.map((item) => {
        return (
          <div  key={item.id} >
            <ItemCard data={item} />
          </div>
        );
      })}
      
    </div>
  );
};
export default SearchView;
