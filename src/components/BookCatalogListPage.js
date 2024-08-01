import React, { useState, useEffect } from "react";

function BookCatalogPage() {
  const [books, setBooks] = useState([]); 

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyMjQwODQ2MiwiZXhwIjoxNzIyNDQ0NDYyfQ.Y7aFigrePRcwXP41g1Fnf1kDZT6jxGxzqia21IhzM-A";
    
    fetch("http://localhost:3000/api/books", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setBooks(data); 
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [])
  return(
    <div>
    <h1>BookCatalog</h1>
  <table>
  <thead>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>authors</th>
      <th>Publisher</th>
      <th>isbn</th>
      <th>edition</th>
      <th>genre</th>
      <th>language</th>
      <th>Shelf Location</th>
    </tr>
  </thead>
  <tbody>
    {books.map((book) => (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.authors}</td>
        <td>{book.publisher}</td>
        <td>{book.isbn}</td>
        <td>{book.edition}</td>
        <td>{book.genre}</td>
        <td>{book.language}</td>
        <td>{book.shelf_location}</td>
     
      </tr>
    ))}
  </tbody>
</table>
</div>
  )
}


export default BookCatalogPage;
