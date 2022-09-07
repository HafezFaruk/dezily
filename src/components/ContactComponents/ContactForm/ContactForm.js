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
            <div class="grid grid-cols-3 gap-4">
              <div className="col-span-2  bg-white">
                <div class="grid grid-cols-2 gap-4 p-5  ">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Name" />
                  <textarea className="col-span-2" placeholder="Message"></textarea>
                  <button className="text-start">Submit</button>
                </div>
                
              </div>
              {/* <!-- ... --> */}
              <div className=" bg-white">Call-Section</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
