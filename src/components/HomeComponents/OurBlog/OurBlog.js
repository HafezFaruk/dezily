import React from "react";

export default function OurBlog() {
  const items = [
    {
      image: "https://themetechmount.com/html/dezily/images/blog/blog-14.jpg",
      title: "Can depression increase your risk for heart disease?",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/blog/blog-15.jpg",
      title: "Heart Transplant development solutions for great surgery",
    },
    {
      image: "https://themetechmount.com/html/dezily/images/blog/blog-16.jpg",
      title: "Hard Content We Decide Ourselves A Intently Heart ",
    },
  ];
  return (
    <div className="bg-service-color">
      <div className="container mx-auto py-16">
        <p className="text-center text-md font-bold text-green">
          READ OUR BLOG
        </p>
        <h2 className="text-4xl text-dark font-bold py-1 my-4">
          We Provide Special Service <br /> For Patients
        </h2>
        <div className="flex space-x-3">
          {items.map((x) => (
            <div className="bg-white ">
              <div className="">
                <img className="object-fill scale-90 hover:scale-100 ease-in duration-500" src={x.image} />
              </div>
              <div className="">
                <h2 className="px-8 text-2xl font-bold text-dark hover:text-green">
                  {x.title}
                </h2>
                <div>
                  <p className="text-light-gray py-2 mt-1 px-8 text-start">
                    <span>
                      <i className="fa-regular fa-user text-green "></i>{" "}
                    </span>{" "}
                    KIMOX / <span></span> HEART SURGERY
                  </p>
                </div>
                <hr className=" w-80 mx-auto my-4" />
                <p className="text-start px-8 py-2">Read More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
