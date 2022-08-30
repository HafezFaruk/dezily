import React from "react";

export default function ServiceProvide() {
  const items = [
    {
      image: "https://themetechmount.com/html/dezily/images/heart.svg",
      title: "Cardiovascular Care Services",
      subtitle:
        "A Variety of programs to preventation heart and vascular disease and your overall health rate.",
    },

    {
      image: "https://themetechmount.com/html/dezily/images/cardiology.svg",
      title: "Heart Screening Technologies",
      subtitle:
        "The heart screening and detection is the essential to the manage and even preventing disease.",
    },

    {
      image: "https://themetechmount.com/html/dezily/images/healthcare.svg",
      title: "Pacemaker Implant Techniquies",
      subtitle:
        "Implantation electronic devices that is placed in under chest to the  help electronic problem.",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/pain.svg",
      title: "Ambulatory Surgery Services",
      subtitle:
        "Ambulatory monitors are small, portable machines that are able to record the heart’s rhythm.",
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

        {items.map((x) => {
         console.log(x)
        })}
      </div>
    </div>
  );
}
