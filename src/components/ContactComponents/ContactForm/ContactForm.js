import React from "react";

export default function ContactForm() {
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
                    <button className="text-white bg-green px-6 py-2">Submit</button>
                  </div>
                </div>
              </div>
              {/* <!-- ... --> */}
              <div className=" bg-white">
                <div>
                  <div>
                    <img src="https://i.ibb.co/SJHchgB/doctor.png"/>
                  </div>
                  <div></div>
                </div>
                <div>
                  <div>
                    <img src="https://i.ibb.co/gVqg24m/defibrillator.png"/>
                  </div>
                  <div></div>
                </div>
                <div>
                  <div>
                    <img src="https://i.ibb.co/FKrF5jk/heart.png"/>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
