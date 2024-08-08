import React, { useState, useEffect } from 'react';

function BookInformation() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/books", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <>
      <div className="flex-1 ">
        <h1 className="text-3xl font-medium">Book Catalog Information</h1>
        <button className="mt-8 h-12 w-28 text-lg text-white font-medium rounded-lg bg-zinc-400">
          Back
        </button>
        <button className="mt-8 h-12 w-32 text-lg text-white font-medium rounded-lg bg-sky-500 ml-4">
          Update
        </button>
        <button className="mt-8 h-12 w-32 text-lg text-white font-medium rounded-lg bg-red-500 ml-4">
          Delete
        </button>
      </div>
      {books.map((bookinfo) => (
        <div key={bookinfo.id} className="mt-7">
          <table className="w-full bg-white">
            <tbody>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">ISBN</th>
                <td className='pl-20'>{bookinfo.isbn}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">Title</th>
                <td className='pl-20'>{bookinfo.title}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">Authors</th>
                <td className='pl-20'>{bookinfo.authors}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">Publisher</th>
                <td className='pl-20'>{bookinfo.publisher}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">
                  Publication Year
                </th>
                <td className='pl-20'>{bookinfo.publication_year}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">Edition</th>
                <td className='pl-20'>{bookinfo.edition}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">Genre</th>
                <td className='pl-20'>{bookinfo.genre}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">Language</th>
                <td className='pl-20'>{bookinfo.language}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">
                  Number of Pages
                </th>
                <td className="text-blue-600 font-semibold pl-20">
                  {bookinfo.number_of_pages}
                </td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-6">
                  Shelf Location
                </th>
                <td className='pl-20'>{bookinfo.shelf_location}</td>
              </tr>
              <tr className="border-b-2">
                <th className="flex justify-content-start ml-5 py-8">
                  Description
                </th>
                <td className='pl-20'>{bookinfo.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}

export default BookInformation;