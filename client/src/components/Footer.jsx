import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src={assets.logo}
            alt=""
            className="mb-5 w-32 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            dolorem nulla consequatur repellendus quasi ad! Laboriosam autem
            eligendi quisquam consectetur placeat quam unde nostrum in, aliquam
            impedit et earum ratione.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
