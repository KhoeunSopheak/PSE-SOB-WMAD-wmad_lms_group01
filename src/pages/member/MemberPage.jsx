import React,{useState, useEffect} from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const MemberPage = () => {
  const [members, setMembers] = useState([]);
  const apiUrl = 'http://localhost:3000/api/members';
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setMembers(data);
        console.log(data);
        return response.data
      } catch (error) {
        console.error(error);
      }
    };
    fetchMembers(); 
  },[])
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-bold ms-14 text-2xl">Member</h1>
      <td className="py-2 px-4">
        <button className="bg-blue-500 shadow-lg shadow-indigo-500/50 text-white py-2 px-8 rounded hover:bg-gray-600 ms-10">
        <Link to="/member/new">Create</Link>
        </button>
      </td>
      <div className="overflow-hidden rounded-xl border border-gray-500">
    <table class="table-fixed border-collapse border border-slate-800 border-spacing-2 shadow-2xl w-full text-center divide-y-4 divide-slate-400/25 mt-4">
  <thead>
    <tr>
      <th className="p-5 border border-slate-300 bg-slate-200">Action</th>
      <th className="p-5 border border-slate-300 bg-slate-200">Member Code</th>
      <th className="p-5 border border-slate-300 bg-slate-200">Fullname</th>
      <th className="p-5 border border-slate-300 bg-slate-200">Phone</th>
      <th className="p-5 border border-slate-300 bg-slate-200">Address</th>
      <th className="p-5 border border-slate-300 bg-slate-200">Start Date</th>
      <th className="p-5 border border-slate-300 bg-slate-200">Expiry Date</th>
    </tr>
  </thead>
  <tbody>
    {members.map((item) =>(
    <tr key={item.id}>
      <td className="p-3 border border-slate-300">{<Button/>}</td>
      <td className="p-3 border border-slate-300">{item.member_code}</td>
      <td className="p-3 border border-slate-300">{item.fullname}</td>
      <td className="p-3 border border-slate-300">{item.phone_number}</td>
      <td className="p-3 border border-slate-300">{item.address}</td>
      <td className="p-3 border border-slate-300">{item.start_date}</td>
      <td className="p-3 border border-slate-300">{item.expiry_date}</td>
    </tr>
    ))}
  </tbody>
  </table>
  </div>
    </div>
  );
}

export default MemberPage;
