import React, { useState, useEffect } from "react";

const New_MemberPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    startDate: "",
    expiryDate: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setFormData((inputdata) => ({
      ...inputdata,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data", formData);
  };

  return (
    <div className="bg-gray">
      <h1 className="text-3xl font-bold pb-8">New Member</h1>
      <div className="min-h-screen flex">
        <form onSubmit={handleSubmit} className="space-y-3 pt-4">
          <div>
            <label htmlFor="fullname" className="text-lg font-bold">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              className="mt-2 py-3 mb-2 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Fullname"
              onChange={handleInputChange}
              value={formData.fullname}
            />
          </div>

          <div>
            <label htmlFor="dob" className="text-lg font-bold">
              Date of Birth
            </label>
            <input
              name="dob"
              type="date"
              className="mt-2 py-3 mb-2 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Date of Birth"
              onChange={handleInputChange}
              value={formData.dob}
            />
          </div>

          <div>
            <label htmlFor="startDate" className="text-lg font-bold">
              Start Date
            </label>
            <input
              name="startDate"
              type="date"
              className="mt-2 py-3 mb-2 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Start Date"
              onChange={handleInputChange}
              value={formData.startDate}
            />
          </div>

          <div>
            <label htmlFor="expiryDate" className="text-lg font-bold">
              Expiry Date
            </label>
            <input
              name="expiryDate"
              type="date"
              className="mt-2 py-3 mb-2 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Expiry Date"
              onChange={handleInputChange}
              value={formData.expiryDate}
            />
          </div>

          <button
            type="button"
            className=" px-8 py-3 bg-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-400 mr-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default New_MemberPage;
