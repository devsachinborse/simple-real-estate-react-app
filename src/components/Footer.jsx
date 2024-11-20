import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {

    const footerMenu = [
        {
          title:"Home",
          Links:"#Home"
        },
        {
          title:"About",
          Links:"#About"
        },
        {
          title:"Contact us",
          Links:"#Contact"
        },
        {
          title:"Privacy Policy",
          Links:"#Home"
        }
      ]
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden " id="Footer">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum veniam dolores obcaecati fuga incidunt fugiat nulla odit,
            impedit facilis enim voluptas ratione mollitia dolorem.
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4" >Company</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
                {footerMenu.map((menu, index) => (
                    <a className="hover:text-white" href={menu.Links}>{menu.title}</a>
                ))}
            </ul>
        </div>


        <div className="w-full md:w-1/3">
                <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
                <p className=" text-gray-400 mb-4 max-w-80">The latesst news, articales, and resources, sent to your inbox weekly</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Enter your email" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto" />
                    <button className="py-2 px-4 rounded bg-indigo-500">Subscribe</button>
                </div>
        </div>
      </div>
      <div className=" border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 © SachinBorse. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
