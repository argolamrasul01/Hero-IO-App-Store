import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <div className="flex items-center gap-2">
            <img className="w-6 md:w-8" src="/src/assets/logo.png" alt="logo" />
            <h2 className="text-xl md:text-2xl font-bold">HERO.IO</h2>
          </div>
        </aside>

        <nav className="ml-auto">
          <h6 className="footer-title">Social Links</h6>

          <div className="grid grid-flow-col gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              <Twitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <Linkedin />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Facebook />
            </a>
          </div>
        </nav>
      </footer>

      <div className="bg-neutral text-neutral-content text-center py-3 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          Copyright © HERO.IO 2025 - All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
