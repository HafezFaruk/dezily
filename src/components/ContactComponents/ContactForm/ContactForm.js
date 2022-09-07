import React from "react";

export default function ContactForm() {
  const items = [
    {
      image: "https://i.ibb.co/SJHchgB/doctor.png",
      title: "Let’s Call or Email",
      email: "example@evenex.com",
      phone: "+1800 123 456 7890",
    },
    {
      image: "https://i.ibb.co/gVqg24m/defibrillator.png",
      title: "Be Creative Our Team",
      email: "example@evenex.com",
      phone: "+1800 123 456 7890",
    },
    {
      image: "https://i.ibb.co/FKrF5jk/heart.png",
      title: "Call or Message",
      email: "@skype.com",
      phone: "123 456 7890",
    },
  ];
  return (
    <div className="bg-service-color">
      <div className="container mx-auto">
        <p className="text text-green text-center font-semibold py-10">
          Send Message
        </p>
        <h2 className="text-center text-[3rem] text-dark font-semibold">
          Drop Your Links To Our <br />
          <span>Experts</span>{" "}
        </h2>
        <div>
          <form className="">
            <div class="md:grid grid-cols-3 gap-4 py-[10rem]">
              <div className="col-span-2  bg-white h-[40rem]">
                <div class="grid grid-cols-2 gap-4 p-10  ">
                  <input
                    className="border-none bg-service-color border-r h-[4rem]"
                    type="text"
                    placeholder="Your Name*"
                  />
                  <input
                    className="border-none bg-service-color border-r h-[4rem] "
                    type="text"
                    placeholder="Email*"
                  />
                  <input
                    className="border-none bg-service-color border-r h-[4rem] "
                    type="text"
                    placeholder="Phone Number*"
                  />
                  <input
                    className="border-none bg-service-color border-r h-[4rem] "
                    type="text"
                    placeholder="Subjects*"
                  />
                  <textarea
                    className="col-span-2  bg-service-color border-none h-[19rem] "
                    type="text"
                    placeholder="Message"
                  ></textarea>
                  <div>
                    <button className="text-white bg-green px-6 py-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- ... --> */}
              <div className=" bg-white">
                <div>
                  {items.map((x) => (
                    <div className="my-4 p-5">
                      <div>
                        <img className="img_color h-12 w-16 " src={x.image}/>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold my-2">{x.title}</h2>
                        <p className="text-lg text-gray-400 my-2">{x.email}</p>
                        <p className="text-gray-400 text-lg">{x.phone}</p>
                        <hr className="my-1"/>
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
