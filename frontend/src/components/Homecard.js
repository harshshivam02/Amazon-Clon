const Homecard = ({ data }) => {
    return (
        <div className="bg-white h-[420px] p-4 shadow-lg ">
            <div className="font-bold text-xl pb-4 text-gray-800">
                <h1>{data.title}</h1>
            </div>
            <div className="grid grid-cols-2 gap-2
            ">
                {data.items.map((item) => (
                    <div key={item.id} className="relative group">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-[120px] object-contain rounded-md transition-transform group-hover:scale-105" 
                            />
                            <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                                {item.category}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <a 
                    href="#" 
                    className="text-blue-700 hover:text-[#8e69e5] hover:underline text-sm"
                >
                    See More
                </a>
            </div>
        </div>
    );
}

export default Homecard;