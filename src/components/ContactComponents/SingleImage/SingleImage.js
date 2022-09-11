import React from "react";

export default function SingleImage() {
  const items = [
    { image: "https://i.ibb.co/xqxLbMz/single-img-15.jpg" },
    { image: "https://i.ibb.co/QMmCkT2/single-img-16.jpg" },
  ];
  return (
    <div className="container mx-auto">
      <h2>h</h2>
      <div className="md:flex gap-4 my-10">
        {items.map((x) => (
          <div>
            <img className="w-full h-full my-4" src={x.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
