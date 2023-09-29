import React, { useState, useEffect } from "react";

const UI = () => {
  const [typedValue, setTypedValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.getElementById("topelement").textContent = typedValue;
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [typedValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value > 0) {
      setTypedValue(value);
    } else {
      setTypedValue("value cannot be negative or zero");
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-white flex place-content-center">
      <div className="w-[90%] h-full flex flex-col justify-center gap-8">
        <div className="flex w-[33%] bg-slate-700 rounded-2xl cursor-pointer">
          <p className="px-12 py-1 rounded-2xl bg-white text-black">Open</p>
          <p className="px-12 py-1 ">Close</p>
          <p className="px-12 py-1 ">Boost</p>
        </div>
        <div className="w-full bg-neutral-500 h-[0.1%] my-4"></div>
        <div className="flex mx-auto w-[90%] h-[60%] gap-8">
          <div className="p-8 border  border-neutral-500 rounded-lg w-[50%] ">
            <form className="flex flex-col gap-3 w-[90%] h-full justify-center mx-auto">
              <label>Select Asset</label>
              <select className="bg-transparent rounded-md p-1 py-2 border  border-neutral-500 pr-2  block">
                <option>ETH</option>
                <option>BTC</option>
                <option>BNB</option>
              </select>
              <label className=" flex justify-between mt-4">
                <p>Borrow Amount</p>
                <span className="font-thin text-xs border  border-neutral-500 px-2 rounded-md p-1">
                  {" "}
                  Max Held Amount:200
                </span>
              </label>
              <input
                type="number"
                placeholder="Enter supply amount"
                id="lala"
                value={typedValue}
                onChange={handleInputChange}
                className="bg-transparent rounded-md p-1 py-2 border border-neutral-500 pr-2 appearance-none"
              ></input>
              <button className="place-self-end content-end w-[25%] border p-1.5 mt-28 rounded-lg bg-white text-black">
                Execute
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-6 w-[50%]">
            <div
              className="border  border-neutral-500 p-8 h-[60%] rounded-lg"
              id="topelement"
            ></div>
            <div
              className="border  border-neutral-500 p-8 h-[40%] rounded-lg"
              id="bottomelement"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
