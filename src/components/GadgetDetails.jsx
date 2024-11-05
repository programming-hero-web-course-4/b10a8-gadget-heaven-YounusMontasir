import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { productContext } from "../Context/GadgetContext";

const GadgetDetails = () => {
  const { productId } = useParams();
  const allData = useLoaderData();
  const newProductId = parseInt(productId);

  const { addToCart, addToWishlist ,isDisable} = useContext(productContext);

  const detailsData = allData.find((data) => data.product_id === newProductId);

  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = detailsData;

  const handleAddToCart = () => {
    addToCart(detailsData);
  };
  const handleWishlist = () => {
    addToWishlist(detailsData);
  };

  return (
    <div className="w-full  mx-auto bg-[#9538E2] pt-12 pb-56 relative mb-[480px]">
      <h1 className="text-white text-[32px] font-bold text-center w-full lg:w-9/12 mx-auto">
        Product Details
      </h1>
      <p className="text-white text-center w-full lg:w-6/12 mx-auto my-6">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      {/* hero details */}
      <div class="hero bg-base-200  absolute w-full lg:w-10/12 rounded-3xl left-0 lg:left-32">
        <div class="flex flex-col lg:flex-row p-6 gap-8 w-full">
          <img
            className="justify-start w-full  lg:w-1/3 rounded-3xl"
            src={product_image}
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="font-semibold text-3xl">{product_title}</h1>

            <p className="text-[#09080FCC] text-xl font-semibold py-5">
              Price: ${price}
            </p>

            <button className="text-[#309C08] border rounded-full border-[#309C08] p-2">
              In Stock
            </button>
            <p className="text-[#09080F99] text-[18px] py-4">{description}</p>
            <p className="font-bold text-[18px] mb-3">Specification:</p>
            <ol className="text-[18px] text-[#09080F99]">
              {Specification.map((spec) => (
                <li className="mb-1">{spec}</li>
              ))}
            </ol>
            <p className="font-bold text-[18px] my-4 ">Rating</p>
            <div className="flex gap-6">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked="checked"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-[18px]">{rating}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleAddToCart}
                className=" btn p-4 rounded-full bg-[#9538E2] text-white"
              >
                Add to Cart <BsCart3 />
              </button>
              <button
                onClick={handleWishlist}
                className=" btn p-4 rounded-full"
                disabled={isDisable===true}

              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
