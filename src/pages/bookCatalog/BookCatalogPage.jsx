import React, { useState, useEffect } from "react";

function BookCatalogPage() {
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Catalog</h1>
      <button className="rounded-xl bg-blue-500 w-32 h-12 mb-8 text-white font-bold py-2 px-4">
        Create
      </button>

      <div className="overflow-hidden rounded-xl border border-gray-500">
        <table className="min-w-full bg-bluec-200">
          <thead className="bg-zinc-200 text-black border-b border-gray-800">
            <tr>
              <th className="py-2 px-4 text-left">Action</th>
              <th className="py-2 px-4 text-left">ISBN</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Authors</th>
              <th className="py-2 px-4 text-left">Publisher</th>
              <th className="py-2 px-4 text-left">Genre</th>
              <th className="py-2 px-4 text-left">Edition</th>
              <th className="py-2 px-4 text-left">Shelf Location</th>
              <th className="py-2 px-4 text-left">Language</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-b border-gray-700">
                <td className="py-2 px-4">
                  <button className="bg-blue-400 text-white py-1 px-6 rounded hover:bg-gray-600">
                    View
                  </button>
                </td>
                <td className="py-2 px-4">{book.isbn}</td>
                <td className="py-2 px-4">{book.title}</td>
                <td className="py-2 px-4">{book.authors}</td>
                <td className="py-2 px-4">{book.publisher}</td>
                <td className="py-2 px-4">{book.genre}</td>
                <td className="py-2 px-4">{book.edition}</td>
                <td className="py-2 px-4">{book.shelf_location}</td>
                <td className="py-2 px-4">{book.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookCatalogPage;
