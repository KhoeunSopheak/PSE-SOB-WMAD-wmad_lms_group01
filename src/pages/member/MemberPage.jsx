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
      <h1 className="text-3xl font-bold ms-7">Member</h1>
      <td className="py-2 px-4">
        <button className="bg-blue-500 shadow-lg shadow-indigo-500/50 text-white py-2 px-8 rounded hover:bg-gray-600 ms-4">
        <Link to ='/member/new'>Create</Link>
      </td>
      <div className="overflow-hidden rounded-xl border border-gray-500">
    <table class="min-w-full">
  <thead className="bg-gray-300">
    <tr>
      <th className="py-4 px-4 text-center">Action</th>
      <th className="py-4 px-6 text-center">Member Code</th>
      <th className="py-4 px-6 text-center">Fullname</th>
      <th className="py-4 px-6 text-center">Phone</th>
      <th className="py-4 px-6 text-center">Address</th>
      <th className="py-4 px-6 text-center">Start Date</th>
      <th className="py-4 px-6 text-center">Expiry Date</th>
    </tr>
  </thead>
  <tbody>
    {members.map((item) =>(
    <tr key={item.id} className="border-b border-slate-700">
      <td className="py-4 px-8">{<Button/>}</td>
      <td className="py-4 px-8">{item.member_code}</td>
      <td className="py-4 px-8">{item.fullname}</td>
      <td className="py-4 px-8">{item.phone_number}</td>
      <td className="py-4 px-8">{item.address}</td>
      <td className="py-4 px-8">{item.start_date}</td>
      <td className="py-4 px-8">{item.expiry_date}</td>
    </tr>
    ))}
  </tbody>
  </table>
  </div>
    </div>
  );
}

export default MemberPage;
