import { Accordion } from "flowbite-react";
import React from "react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { Link } from "react-router-dom";
const FAQDetails = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h5 className="capitalize font-semibold text-xl text-[#33C687]">
          Have any questions
        </h5>
        <h2 className="capitalize text-[#2A334E] text-5xl font-bold">
          Recently Asked questions
        </h2>
        <p className="text-gray-500 pt-2 text-xl">
          Heart surgery can fix problems in the heart valves and arteries,
          restore blood flow, or <br /> replace a diseased heart altogether.
        </p>
      </div>
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <img src="https://i.ibb.co/W63q7QH/col-bgimage-8.png" alt="" />
          </div>
          <div>
            <Accordion arrowIcon={HiOutlineArrowCircleDown}>
              <Accordion.Panel>
                <Accordion.Title>What are the open hours?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Patients may schedule appointment by visiting the clinic
                    between 9:00 AM and 6:00 PM Monday – Friday or by calling
                    (123) 456-7899. The Emergency cases is available up to 8 PM.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>How Can I Contact You?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Please visit contact us page for all your queries and
                    redressal of grievances. You can also contact us on +12 (3)
                    4567 899 number.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  What are the facilities available ?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Our Hospitals are multispecialty hospitals and offer the
                    complete range of medical and surgical specialties, with
                    highly experienced doctors.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  What are the facilities available in the hospital?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    First appointment, please bring the following:
                  </p>
                  <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                    <li>Insurance card</li>
                    <li>A picture Photo</li>
                    <li>
                      Any previous medical records (including test results from
                      other clinics)
                    </li>
                    <li>All current medications (with prescription )</li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5]  w-full relative h-[28rem] bg-cover bg-center ">
        <img
          className="w-full absolute mix-blend-overlay h-full bg-center object-cover"
          src="https://i.ibb.co/XbTP3H1/bg-FAQ.jpg"
          alt=""
        />

        <div className="flex items-center h-full justify-center text-center relative">
          <div className="space-y-3">
            <h4 className="uppercase text-[#33D687] text-xl font-semibold">
              Want to get 20% off?
            </h4>
            <h2 className="text-6xl font-semibold text-[#2A334E] capitalize">
              Get a solutions for all types <br /> of Health services
            </h2>
            <div className="pt-5 z-10">
              <Link to="/contact">
                <button className="py-3 px-10 text-white bg-[#2A334E] hover:bg-[#33D687] transition duration-500">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQDetails;
