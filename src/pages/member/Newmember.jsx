import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewMemberPage = () => {
  const [fullname, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMember = {
      fullname: fullname,
      date_of_birth: dob,
      start_date: startDate,
      expiry_date: expiryDate,
      address: "string",
      phone_number: "string",
      email: email,
      is_active: true,
    };
    // console.log(newMember);
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newMember),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/member");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-gray">
      <h1 className="text-3xl font-bold pb-8">New Member</h1>
      <div className="min-h-screen flex">
        <form onSubmit={handleSubmit} className="space-y-3 pt-4">
          <div>
            <label className="text-lg font-bold">Full Name </label>
            <input
              type="text"
              name="fullname"
              className="mt-2 py-3 mb-2 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-lg font-bold">Email</label>
            <input
              type="email"
              className="mt-2 py-3 mb-2 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-lg font-bold">Date Of Birth</label>
            <input
              name="dob"
              type="date"
              className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div>
            <label className="text-lg font-bold">Start Date</label>
            <input
              name="startDate"
              type="date"
              className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="text-lg font-bold">Expiry Date</label>
            <input
              name="expiryDate"
              type="date"
              className="mt-2 py-3 w-full border-2 p-4 rounded-lg shadow-sm focus:border-blue-300 focus:outline-none"
              placeholder="Expiry Date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="px-8 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 mr-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMemberPage;
