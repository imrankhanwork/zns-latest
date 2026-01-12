import React from "react";
import Img1 from "../../assets/Topselling/fink laptop Skin.png";
import Img2 from "../../assets/topselling/ttdd.png";
import Img3 from "../../assets/Topselling/mobile black.png";
import Img4 from "../../assets/Topselling/xyz.png";
import Img5 from "../../assets/Topselling/lap.jpg";
import Img6 from "../../assets/Topselling/mouse pad2.png";
import Img7 from "../../assets/topselling/ttshirtt.png";
import Img8 from "../../assets/Topselling/stickerrs.png";
import Img9 from "../../assets/Topselling/qwreyt.png";
import Img10 from "../../assets/topselling/mouse pad.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Laptop Skine",
    rating: 5.0,
    color: "Mix",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Stickers",
    rating: 4.5,
    color: "Mix",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Mobile Skine",
    rating: 4.7,
    color: "Mix",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Stickers",
    rating: 4.4,
    color: "Mix",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Laptop Skine",
    rating: 4.5,
    color: "Mix",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Mouse pad",
    rating: 5.0,
    color: "Mix",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Printed T-Shirt",
    rating: 4.5,
    color: "Mix",
    aosDelay: "200",
  },
  {
    id: 8,
    img: Img8,
    title: "Stickers",
    rating: 4.7,
    color: "Mix",
    aosDelay: "400",
  },
  {
    id: 9,
    img: Img9,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Mix",
    aosDelay: "600",
  },
  {
    id: 10,
    img: Img10,
    title: "Mouse pad",
    rating: 4.5,
    color: "Mix",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Selling Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
             Design Beyond Limits: Stick, Skin & Wear! Color Your World with Custom Designs.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;