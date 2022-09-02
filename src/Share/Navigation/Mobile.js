import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./NavLink.js";
const { page, services, portfolio, blog } = navLinks[0];
function Mobile() {
  return (
    <div>
      <div className="space-y-4 py-8 px-20 text-white bg-green-900">
        <Link to="/" className="uppercase">
          Home
        </Link>
        <div className="cursor-pointer relative group">
          <Link to="/" className="uppercase ">
            pages
            <div className="nav-card">
              <ul className="nav-ul border-light-blue">
                {page.map((p, index) => (
                  <li key={index}>
                    <Link className="nav-link" to={p.link}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer relative  group">
          <Link to="/" className="uppercase">
            services
            <div className="nav-card">
              <ul className="nav-ul border-light-blue">
                {services.map((p, index) => (
                  <li key={index}>
                    <Link className="nav-link" to={p.link}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer relative  group">
          <Link to="/" className="uppercase">
            portfolio
            <div className="nav-card">
              <ul className="nav-ul border-light-blue">
                {portfolio.map((p, index) => (
                  <li key={index}>
                    <Link className="nav-link" to={p.link}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer relative  group">
          <Link to="/" className="uppercase">
            blog
            <div className="nav-card">
              <ul className="nav-ul border-light-blue">
                {blog.map((p, index) => (
                  <li key={index}>
                    <Link className="nav-link" to={p.link}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/contact" className=" uppercase  cursor-pointer py-8">
            Contact US
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
