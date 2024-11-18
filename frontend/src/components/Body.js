import CardView from "./CardView";
import Slideshow from "./Slideshow";
import { homeCardData } from "../utils/Mockdata";
import Homecard from "./Homecard";

const Body = () => {
  return (
    <div className="w-full mt-[0px]">
      <Slideshow />
      <div className="relative lg:-mt-72 z-5 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] mx-auto px-4">
          {homeCardData.map((item, index) => (
            <div key={index}>
              <Homecard data={item} />
            </div>
          ))}
        </div>
      </div>
      <CardView />
    </div>
  );
};

export default Body;