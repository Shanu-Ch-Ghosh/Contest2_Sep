import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputField = ({ setData }) => {
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pincode.length < 6) {
      setError("Error: Pincode must be 6 digits long.");
      return;
    }

    const response = await fetch(
      `https://api.postalpincode.in/pincode/${parseInt(pincode)}`
    );
    const json = await response.json();

    setData(json);
    navigate("/displaydata");
  };

  return (
    <div>
      <h1 className="text-lg font-semibold m-3">Enter Pincode</h1>
      <form className="flex flex-col space-y-3 m-3" onSubmit={handleSubmit}>
        <input
          className="border w-[50%] p-2 text-lg rounded-lg"
          onChange={(e) => setPincode(e.target.value)}
          type="text"
          placeholder="Pincode"
        />
        <button
          className="w-[15%] p-2 border rounded-lg bg-stone-800 hover:bg-stone-600 text-white text-lg"
          type="submit"
        >
          LookUp
        </button>
      </form>
      <div className="text-red-800">{error}</div>
    </div>
  );
};

export default InputField;
