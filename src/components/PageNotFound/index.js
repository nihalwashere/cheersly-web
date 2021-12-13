import React from "react";

export default function PageNotFound() {
  return (
    <div className="flex items-center flex-col justify-center mt-20">
      <div className="text-lg font-semibold">Page Not Found</div>
      <div className="font-medium text-gray-600" style={{ color: "vp-pink" }}>
        Something has gone awry
      </div>
    </div>
  );
}
