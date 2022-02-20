import React from "react";
import ImageAssets from "../../assets/images";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center m-10">
      <div className="flex justify-start items-center">
        <header className="cursor-pointer">
          <a href="/" className="no-default-link">
            <div className="w-60">
              <img
                src={ImageAssets.Nav_Logo}
                alt="cheersly"
                width="100%"
                height="100%"
              />
            </div>
          </a>
        </header>
      </div>

      <div className="flex justify-between items-center w-1/2">
        <span className="text-2xl font-medium cursor-pointer">
          <a href="/" className="no-default-link">
            Home
          </a>
        </span>

        <span className="text-2xl font-medium cursor-pointer">
          <a href="/#product" className="no-default-link">
            Product
          </a>
        </span>

        <span className="text-2xl font-medium cursor-pointer">
          <a href="/#use-cases" className="no-default-link">
            Use Cases
          </a>
        </span>

        <span className="text-2xl font-medium cursor-pointer">
          <a href="/pricing" className="no-default-link">
            Pricing
          </a>
        </span>

        <span className="text-2xl font-medium cursor-pointer">
          <a href="/faq" className="no-default-link">
            FAQ
          </a>
        </span>

        <span className="text-2xl font-medium cursor-pointer">
          <a href="/about" className="no-default-link">
            About
          </a>
        </span>
      </div>
    </nav>
  );
}
