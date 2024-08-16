import { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function CreateBookCatalog() {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [isbn, setIsbn] = useState('');
   const [publisher, setPublisher] = useState('');
   const [publication_year, setPublication_year] = useState(0);
   const [edition, setEdition] = useState('');
   const [genre, setGenre] = useState('');
   const [language, setLanguage] = useState('');
   const [number_of_pages, setNumber_of_pages] = useState(0);
   const [cover_image_url, setCover_image_url] = useState('');
   const [shelf_location, setShelf_location] = useState('');
   const [description, setDescription] = useState('');
   const navigate = useNavigate();

   function handleSubmit(event) {
      event.preventDefault();
      const formData = {
         title: title,
         authors: author,
         isbn: isbn,
         publisher: publisher,
         publication_year: parseInt(publication_year),
         edition: edition,
         genre: genre,
         language: language,
         number_of_pages: parseInt(number_of_pages),
         cover_image_url: cover_image_url,
         shelf_location: shelf_location,
         description: description,
      };
      const token = localStorage.getItem('token');
      fetch(' https://wmad-library-backend-six.vercel.app/api/books', {
         method: 'POST',
         headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
      })
         .then(response => {
            navigate('/book-catalog');
            console.log(response);
         })
         .catch(error => console.log(error))
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="flex">
            <div className="bg-gray-100 flex-1 ms-5">
               <h1 className="text-3xl font-bold">New Book Catalog</h1>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Title</label>
                  <input type="text" onChange={(e) => setTitle(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg " placeholder='Title' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Authors</label>
                  <input type="text" onChange={(e) => setAuthor(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Authors' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">ISBN</label>
                  <input type="text" onChange={(e) => setIsbn(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='ISBN' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Publisher</label>
                  <input type="text" onChange={(e) => setPublisher(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Publisher' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Publication Year</label>
                  <input type="text" onChange={(e) => parseInt(setPublication_year(e.target.value))} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Publication Year' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Edition</label>
                  <input type="text" onChange={(e) => setEdition(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Edition' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Genre</label>
                  <input type="text" onChange={(e) => setGenre(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Genre' />
               </div>
               <div className="flex mt-8">
                  <Button name="Cancel" bgColor="bg-gray-600" />
                  <Button name="Save" bgColor="bg-blue-600" onChange={handleSubmit} />
               </div>
            </div>
            <div className="bg-gray-100 flex-1 mt-10 mr-10">
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Language</label>
                  <input type="text" onChange={(e) => setLanguage(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Language' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Number of Pages</label>
                  <input type="text" onChange={(e) => parseInt(setNumber_of_pages(e.target.value))} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Number of Pages' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Cover Image Url</label>
                  <input type="text" onChange={(e) => setCover_image_url(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Cover Image Url' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Shelf Location</label>
                  <input type="text" onChange={(e) => setShelf_location(e.target.value)} className="min-h-14 w-96 pl-3  border-2  rounded-lg" placeholder='Shelf Location' />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="mt-3 text-base font-medium">Description</label>
                  <textarea onChange={(e) => setDescription(e.target.value)} className="min-h-56 w-96 pl-3 pt-2 border-2 rounded-lg" placeholder="Description"></textarea>
               </div>
            </div>
         </div>
      </form>
   )
}
export default CreateBookCatalog;