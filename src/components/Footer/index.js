import React from "react";
import { CHEERSLY_SUPPORT_EMAIL } from "../../utils/constants";
import ImageAssets from "../../assets/images";

export default function Footer() {
  return (
    <div className="h-auto" style={{ backgroundColor: "rgb(28, 35, 49)" }}>
      <div className="flex justify-between items-start ml-5 text-white">
        <div className="flex flex-col text-left ml-2 w-1/2">
          <span className="mt-4 text-base">
            Built with hope and lot&apos;s of ❤️
          </span>
        </div>

        <div className="flex flex-col text-left mt-4 w-1/2">
          <span className="text-xl font-medium">COMPANY</span>
          <span className="mt-2">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/privacy" className="no-default-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/tos" className="no-default-link">
                  Terms of Service
                </a>
              </li>

              {/* <li>
                <a href="/blog" className="no-default-link">
                  Blog
                </a>
              </li> */}
            </ul>
          </span>
        </div>

        <div className="flex flex-col text-left mt-4 w-1/2">
          <span className="text-xl font-medium">CONTACT US</span>
          <span className="mt-2">
            <a
              href={`mailto:${CHEERSLY_SUPPORT_EMAIL}?subject=Hello`}
              className="no-default-link"
            >
              {CHEERSLY_SUPPORT_EMAIL}
            </a>
          </span>
        </div>

        <div className="flex flex-col text-left mt-4 w-1/2">
          <span className="text-xl font-medium">SOCIAL</span>
          <span className="mt-2">
            <a
              href="https://www.linkedin.com/company/cheersly"
              className="no-default-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={ImageAssets.LinkedIn_Icon}
                alt="LinkedIn"
                width="30"
                height="30"
              />
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center text-base mt-4 text-gray-400">
        {/* <p>
          Made by{" "}
          <span className="font-bold">
            <a
              href="https://thelonewolf.tech"
              className="no-default-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              LoneWolf Technologies, LLC.
            </a>
          </span>
        </p> */}
        <span className="mt-1 mb-1">
          Copyright © {new Date().getFullYear()} Cheersly. All rights reserved.
        </span>
      </div>
    </div>
  );
}
