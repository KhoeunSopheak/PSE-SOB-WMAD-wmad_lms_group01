import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <button className="rounded-xl bg-blue-500 hover:bg-gray-400 w-32 h-12 mb-8 text-white font-bold py-2 px-4">
        <Link to="/book-catalog/new">Create</Link>
      </button>

      <div className="overflow-hidden rounded-xl border border-gray-500">
        <table className="min-w-full bg-bluec-200">
          <thead className="bg-zinc-200 text-black border-gray-200">
            <tr>
              <th className="py-4 px-6 text-left">Action</th>
              <th className="py-4 px-6 text-left">ISBN</th>
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Authors</th>
              <th className="py-4 px-6 text-left">Publisher</th>
              <th className="py-4 px-6 text-left">Genre</th>
              <th className="py-4 px-6 text-left">Edition</th>
              <th className="py-4 px-6 text-left">Shelf Location</th>
              <th className="py-4 px-6 text-left">Language</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-b border-gray-700">
                <td className="py-2 px-4">
                  <nav>
                    <Link className="px-6 py-3 bg-blue-400 text-white font-medium rounded hover:bg-gray-400" to={`/book-catalog/info/${book.id}`}>View</Link>
                  </nav>
                </td>
                <td className="py-6 px-8">{book.isbn}</td>
                <td className="py-6 px-8">{book.title}</td>
                <td className="py-6 px-8">{book.authors}</td>
                <td className="py-6 px-8">{book.publisher}</td>
                <td className="py-6 px-8">{book.genre}</td>
                <td className="py-6 px-8">{book.edition}</td>
                <td className="py-6 px-8">{book.shelf_location}</td>
                <td className="py-6 px-8">{book.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookCatalogPage;

