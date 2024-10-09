const AddedToCart = ({ message }) => {
    return (
      <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 
                      sm:px-3 sm:py-1 sm:text-sm sm:top-2 sm:right-2">
        {message}
      </div>
    );
  };
  
  export default AddedToCart;
  