import React from "react";

function Search() {
  return (
    <div className="bg-[#53565A] py-4 gap-3 flex justify-evenly text-xl flex-col sm:flex-row items-center ">

      <div className="">
        <input
          className="rounded-lg placeholder:text-white text-white bg-transparent border pl-4 py-2"
          type="text"
          placeholder=" Search Jobs"
        />
      </div>
      
      <div>
        <button className="rounded-lg bg-[#333333] text-white font-bold px-11 py-2 border">
          {" "}
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default Search;
