import React, { useEffect, useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [allGadgets, setAllGadgets] = useState([]); 
  const [color, setColor] = useState('All Product')

  useEffect(() => {
    fetch("gadgetsData.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setAllGadgets(data); 
      });
  }, []);

  const buttonTexts = [
    "All Product",
    "Laptop",
    "Phone",
    "Accessory",
    "Smart Watch",
    "MacBook",
    "Iphone"
  ];

  const handleCategory = (category) => {
    if (category === "All Product") {
      setGadgets(allGadgets); 
    } else {
      const newData = allGadgets.filter(
        (categoryData) => categoryData.category === category
      );
      setGadgets(newData);
    }
    setColor(category)
  };


  return (
   <div>
    
       <div className="w-10/12 mx-auto">
       <h1 className="text-4xl font-bold text-center mb-12">
         Explore Cutting-Edge Gadgets
       </h1>
 
       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
         {/* Category list */}
         <div className="p-6 rounded-2xl border-2 border-gray-100">
           {buttonTexts.map((text, index) => (
             <button
               onClick={() => handleCategory(text)}
               key={index}
               className={`text-[18px] font-extrabold w-full p-6 rounded-full mb-6 ${color===text ? 'bg-[#9538E2] text-white' : 'bg-[#09080F0D] text-[#09080F99]'}`}
              //  className="text-[18px] font-medium text-[#09080F99] bg-[#09080F0D] w-full p-6 rounded-full mb-6"
             >
               {text}
             </button>
           ))}
         </div>
         {gadgets.length > 0 ?(
          <div className="col-span-3">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {gadgets.map((gadget) => (
              <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
            ))}
          </div>
        </div>
         ) : (
          <div className="col-span-3 flex justify-center items-center">
          <p className="text-6xl">No item is here</p>
         </div>
         )}
       </div>
     </div>
    

   
   </div>
  );
};

export default Gadgets;
