import React from "react";

export default function Footer() {
  return (
    <div className="h-auto" style={{ backgroundColor: "rgb(28, 35, 49)" }}>
      <div className="flex justify-between items-start ml-5 text-white">
        <div className="flex flex-col text-left ml-2 w-1/2">
          <span className="mt-4 text-base">
            Built with hope and lot&apos;s of ❤️
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center text-base mt-4 text-gray-400">
        <span className="mt-1 mb-1">
          Copyright © {new Date().getFullYear()} Cheersly. All rights reserved.
        </span>
      </div>
    </div>
  );
}
