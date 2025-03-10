import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen bg-white flex flex-wrap justify-center items-center">
      <div class="loader">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>
    </div>
  );
};

export default Loader;
