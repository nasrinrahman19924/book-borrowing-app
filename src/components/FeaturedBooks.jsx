import { Button, Chip, Link } from "@heroui/react";



const FeaturedBooks =async () => {
  const res = await fetch('https://book-borrowing-app.vercel.app/data.json')
    const data = await res.json();

   const books = data.slice(0, 4);


    return (
      <section className="max-w-7xl mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-10">
                Featured Books
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="card bg-base-100 shadow-xl"
                    >
                        <figure className="relative w-full aspect-square">
                            <img src={book.image_url} fill='true'  alt={book.title} className="object-cover rounded-xl" />
                        </figure>

                        <Chip size="sm" className="absolute right-2 top-2"> {book.category}</Chip>

                        <div className="card-body">
                            <h2 className="card-title">{book.title}</h2>
                            <p>{book.author}</p>
                    <Button variant="outline" className={'w-full'}> View Details</Button>
                           
                        </div>
                    </div>
                ))}
            </div>
        </section>
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