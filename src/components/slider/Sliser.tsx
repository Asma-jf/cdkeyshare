import "swiper/css/pagination";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import ProductItem from "/src/components/productitem/Productitem.tsx";
import "/src/components/slider/Slider.module.css";

// Dummy product data
const products = [
  {
    id: 1,
    title: "تغییر ریجن اکانت اپیک گیمز Epic...",
    price: "300000",
    description: "Description 1",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 2,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider1.jpg",
  },
  {
    id: 3,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider2.jpg",
  },
  {
    id: 4,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider3.jpg",
  },
  {
    id: 5,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 6,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 7,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 8,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 9,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 10,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 11,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
  {
    id: 12,
    title: "خرید بازی Tiny Tina’s Wond...",
    price: "130000",
    description: "Description 2",
    image: "/src/assets/img/slider.jpg",
  },
];

export default function MySwiperComponent() {
  const [productData, setProductData] = useState(products);

  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={5}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {productData.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductItem {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
