import BookCard from "./BookCard";




const FeaturedBooks =async () => {
  const res = await fetch('https://book-borrowing-app.vercel.app/data.json')
    const data = await res.json();

   const books = data.slice(0, 4);


    return (
      <div>
            <h1 className="text-2xl font-bold my-5">Featured Books</h1>

            <div className="grid grid-cols-4 gap-5">
                {books.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default FeaturedBooks;
















// import { getBooks } from "@/lib/books";
// import Link from "next/link";

// export default function FeaturedBooks() {
//     const books = getBooks().slice(0, 4);

//     return (
//         <section className="max-w-7xl mx-auto py-16">
//             <h2 className="text-4xl font-bold text-center mb-10">
//                 Featured Books
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {books.map((book) => (
//                     <div
//                         key={book.id}
//                         className="card bg-base-100 shadow-xl"
//                     >
//                         <figure>
//                             <img src={book.image_url} alt={book.title} />
//                         </figure>

//                         <div className="card-body">
//                             <h2 className="card-title">{book.title}</h2>
//                             <p>{book.author}</p>

//                             <Link
//                                 href={`/books/${book.id}`}
//                                 className="btn btn-primary"
//                             >
//                                 View Details
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }