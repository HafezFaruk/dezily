import React from "react";
import HeaderFeature from "./../Pages/about/HeaderFeature";

export default function CardioConsultancy() {
  const aboutDezily = [
    {
      image: "https://i.ibb.co/4Rs4cJD/single-img-14.jpg",
      title: "Heart Surgery Specialist Expert Doctors",
      headtext:
        "We have the top level of world best heart surgery specialist expert doctors. We are used latest technology in our healthcare.",
      subtitle: "About Dezily",
      subimage: "https://i.ibb.co/DQHL29s/single-img-01.jpg",
      content:
        "Contrary to popular belief, Lorem Ipsum is not ly randomtext. It has roots in a piece of classical Lterature from 45 BC, making it over 2000 . Richard McClintock, a Latin professor at Hampden-Sydin Virginia",
    },
  ];

  const solutions = [
    {
      image: "https://i.ibb.co/x1wMFwS/service-09.png",
      title: "SURGERY",
      content: "Aneurysm repair",
    },
    {
      image: "https://i.ibb.co/nsPBR8m/service-10.png",
      title: "SURGERY",
      content: "MAZE SURGERY",
    },
    {
      image: "https://i.ibb.co/LPzhr1v/service-11.png",
      title: "SURGERY",
      content: "HEART TRANSPLANT",
    },
    {
      image: "https://i.ibb.co/YRJDZSH/service-12.png",
      title: "SURGERY",
      content: "BYPAS SURGARY",
    },
  ];

  const choseUsText = [
    {
      subtitle: "WHY CHOOSE US",
      title: "Cardiologists Are Doctors Who Treating Diseases",
      content:
        "A surgical procedure used in which the blocked portion of the coronary artery is bypassed with another piece of blood vessel.",
    },
  ];
  return (
    <div>
      {/* ServiceBanner */}
      <div className="bg-apple  ">
        <div className="h-[28rem]">
          <HeaderFeature tab="Services-2" />
        </div>
      </div>
      {/* About-Section */}
      <div className="container mx-auto">
        <div className="my-[8rem]">
          {aboutDezily.map((x) => (
            <div className="md:flex gap-3">
              <div>
                <img src={x.image} alt="doctorImage" />
              </div>
              <div className="my-[1rem] p-5">
                <h3 className="font-semibold text-green">{x.subtitle}</h3>
                <h2 className="text-5xl text-dark font-bold">{x.title}</h2>
                <p>{x.headtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
