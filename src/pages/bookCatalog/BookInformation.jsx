import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BookInformation() {
  const [books, setBooks] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:3000/api/books/${id}`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <>
      <div className="flex-1 ">
        <h1 className="text-3xl font-medium">Book Catalog Information</h1>
        <button className="mt-8 h-12 w-28 text-lg text-white font-medium rounded-lg bg-zinc-400 hover:bg-gray-300">
          <Link to={"/book-catalog"}>Back</Link>
        </button>
        <button className="mt-8 h-12 w-32 text-lg text-white font-medium rounded-lg bg-sky-500 ml-4 hover:bg-gray-400">
          Update
        </button>
        <button
          onClick={(e) => {
            const deleturl = `http://localhost:3000/api/books/` + id;
            const Delete = async () => {
              try {
                fetch(deleturl, {
                  method: "DELETE",
                  headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                });
                alert("Do you want to Delete ?");
                navigate("/book-catalog");
              } catch (error) {
                console.error(error);
              }
            };
            Delete();
          }}
          className="mt-8 h-12 w-32 text-lg text-white font-medium rounded-lg bg-red-500 ml-4 hover:bg-gray-400"
        >
          Delete
        </button>
      </div>
      <div className="mt-7">
        <table className="w-full bg-white">
          <tbody>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">ISBN</th>
              <td className="pl-20">{books.isbn}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">Title</th>
              <td className="pl-20">{books.title}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">Authors</th>
              <td className="pl-20">{books.authors}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">
                Publisher
              </th>
              <td className="pl-20">{books.publisher}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">
                Publication Year
              </th>
              <td className="pl-20">{books.publication_year}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">Edition</th>
              <td className="pl-20">{books.edition}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">Genre</th>
              <td className="pl-20">{books.genre}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">Language</th>
              <td className="pl-20">{books.language}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">
                Number of Pages
              </th>
              <td className="text-blue-600 font-semibold pl-20">
                {books.number_of_pages}
              </td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-6">
                Shelf Location
              </th>
              <td className="pl-20">{books.shelf_location}</td>
            </tr>
            <tr className="border-b-2">
              <th className="flex justify-content-start ml-5 py-8">
                Description
              </th>
              <td className="pl-20">{books.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookInformation;
