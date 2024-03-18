import React from "react";

function Search() {
  return (
    <div className="bg-[#53565A]  flex justify-evenly text-xl p-4">




      <div>
        <input
          className=" placeholder:text-white text-white bg-transparent border pl-4 py-2"
          type="text"
          placeholder="job title or keywords"




        />
      </div>
      <div>
        <button className="bg-[#333333] text-white font-bold px-11 py-2 border"> SEARCH</button>
      </div>



      
    </div>
  );
}

export default Search;
