import React from "react";

export default function Clients() {
  const items = [
    {
      image:
        "https://themetechmount.com/html/dezily/images/client/client-01.png",
    },
    {
      image:
        "https://themetechmount.com/html/dezily/images/client/client-03.png",
    },
    {
      image: "https://i.ibb.co/PztXmQ3/client-06.png",
    },
    {
      image: "https://i.ibb.co/RCPwykK/client-02.png",
    },
    {
      image:
        "https://themetechmount.com/html/dezily/images/client/client-05.png",
    },
  ];
  return (
    <div className="bg-service-color">
      <div className="container mx-auto py-8">
        <h2 className="text-start font-bold py-2 text-xl text-dark pt-2">Happy Customers & Clients</h2>
        <div className="md:flex  space-x-3 justify-around">
          {items.map((x) => (
            <div className="flex justify-center my-10">
              <img  src={x.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
