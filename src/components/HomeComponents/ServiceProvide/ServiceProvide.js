import React from "react";

export default function ServiceProvide() {
  const items = [
    {
      image: "https://themetechmount.com/html/dezily/images/heart.svg",
      title: "Cardiovascular Care Services",
      subtitle:
        "A Variety of programs to preventation heart and vascular disease and your overall health rate.",
      exit: "<i class='fa-solid fa-pen-swirl'></i>",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/cardiology.svg",
      title: "Heart Screening Technologies",
      subtitle:
        "The heart screening and detection is the essential to the manage and even preventing disease.",
      exit: "<i class='fa-solid fa-pen-swirl'></i>",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/healthcare.svg",
      title: "Pacemaker Implant Techniquies",
      subtitle:
        "Implantation electronic devices that is placed in under chest to the  help electronic problem.",
      exit: "<i class='fa-solid fa-pen-swirl'></i>",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/pain.svg",
      title: "Ambulatory Surgery Services",
      subtitle:
        "Ambulatory monitors are small, portable machines that are able to record the heart’s rhythm.",

      exit: "<i class='fa-solid fa-pen-swirl'></i>",
    },
  ];
  return (
    <div className="bg-service-color p-24">
      <div className="container mx-auto">
        <h2 className="text-center font-semibold text-green">
          SERVICES WE PROVIDE
        </h2>
        <h1 className="text-dark text-4xl font-bold">
          Take The Road To A Healthy <br /> Heart Beat
        </h1>

        {/* Carsol */}
        <div className="flex space-x-4 my-28" >
          {items.map((x) => (
            <div className=" w-80 bg-white py-12 px-2 hover:border-l-2 border-green ease-in">
              <div className="flex justify-center">
                <img className="w-20  delay-200 ease-in" src={x.image} alt=""/>
              </div>
              <div>
                <h2 className="font-semibold text-xl text-dark hover:text-green">{x.title}</h2>
                <p className="text-center text-light-gray py-4">{x.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
