import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";
import Count from "../../components/Pages/about/Count";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="">
      <div className="bg-[#252E47]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-16">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-100">
                Subscribe With Us
              </h2>
              <p className="text-[#8d8d8d] text-xl pb-1">
                For any help mail us. 24/7 emergency services
              </p>
              <form className="flex">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="h-14 w-full lg:w-[30rem] bg-[#2A334E] p-5 outline-none"
                />
                <button className="bg-[#33D687] px-10">Message</button>
              </form>
            </div>
            <div className="">
              <p className="text-[#8d8d8d] text-xl">
                With more 25+ Hospitals <br /> In united states, Europe, and
                Asia
              </p>
              <p className="py-5">
                <hr />
              </p>
              <h2 className="flex text-3xl font-semibold text-[#33D687]">
                <Count end="25" /> <span className="ml-3"> Hospitals</span>
              </h2>
            </div>
            <div>
              <button className="border border-white text-white hover:bg-white transition duration-1000 hover:text-[#252E47] px-10 py-3">
                View Our Locations
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 bg-[#2a334e]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-4 space-x-5">
            <div className="space-y-3">
              <h2 className="text-2xl text-white font-semibold">
                About Dezily
              </h2>
              <p className="text-[#d1d1d1]">
                Our Hospital has grown to provide a world class facilities for
                the clinically advanced restorative heart ralated treatments
                available.
              </p>
              <div className="flex space-x-2 pt-3">
                <span className="border-4 border-gray-500 text-gray-400 p-3 hover:bg-[#33D687] hover:text-white">
                  <FaFacebookF />
                </span>
                <span className="border-4 border-gray-500 text-gray-400 p-3 hover:bg-[#33D687] hover:text-white">
                  <IoLogoTwitter />
                </span>
                <span className="border-4 border-gray-500 text-gray-400 p-3 hover:bg-[#33D687] hover:text-white">
                  <AiOutlineInstagram />
                </span>
                <span className="border-4 border-gray-500 text-gray-400 p-3 hover:bg-[#33D687] hover:text-white">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Useful Links
              </h2>
              <div className="grid grid-cols-2 space-x-5 pt-4">
                <div className="space-y-2">
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to="/pages/about"
                  >
                    About Us
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block  text-[#d1d1d1]"
                    to="/pages/team"
                  >
                    Our Team
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to=""
                  >
                    How IT Works
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to=""
                  >
                    Partners
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to=""
                  >
                    Projects
                  </Link>
                </div>
                <div className="space-y-2">
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to="/pages/faq"
                  >
                    FAQ'S
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to="/pages/faq"
                  >
                    Price Plans
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to="/pages/faq"
                  >
                    Feedback
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to="/pages/faq"
                  >
                    Policies
                  </Link>
                  <Link
                    className="hover:text-[#33D687] block text-[#d1d1d1]"
                    to="/contacts/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Popular Posts
              </h2>
              <div className="pt-4 space-y-3">
                <div className="flex space-x-4">
                  <img
                    src="https://i.ibb.co/Tt3fKpY/footer-post-01.jpg"
                    alt=""
                  />
                  <div>
                    <p className="text-[#33D687]">April17, 2022</p>
                    <p className="text-[#f5f5f5] hover:text-[#33D687] transition duration-1000">
                      Can Depression Increase Of Your Risk.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <img
                    src="https://i.ibb.co/y8yDg9f/footer-post-02.jpg"
                    alt=""
                  />
                  <div>
                    <p className="text-[#33D687]">April17, 2022</p>
                    <p className="text-[#f5f5f5] hover:text-[#33D687] transition duration-1000">
                      Heart Transplant For The Development Services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Get In Touch
              </h2>
              <div className="pt-4 space-y-2">
                <p>
                  <span className="text-gray-300">Mail: </span>
                  <span className="text-[#f5f5f5] hover:text-[#33D687]">
                    ashrafulislam1659@gmail.com
                  </span>
                </p>
                <p className="text-gray-300">Fax: +123 456 7890</p>
                <p className="text-gray-300">Fax: +000 78945 666</p>
                <p className="text-gray-300">
                  Location: Fair Oaks Blvd, San Francisco,USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#252E47]">
        <div className="container mx-auto">
          <div className="flex justify-between text-white py-5">
            <p>Copyright &copy; {year} Dezily. All rights reserved</p>
            <div className="flex space-x-2">
              <Link className="hover:text-[#33D687]" to="">
                About Us
              </Link>{" "}
              <span>|</span>
              <Link className="hover:text-[#33D687]" to="">
                FAQ
              </Link>{" "}
              <span>|</span>
              <Link className="hover:text-[#33D687]" to="">
                Blog
              </Link>{" "}
              <span>|</span>
              <Link className="hover:text-[#33D687]" to="">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
