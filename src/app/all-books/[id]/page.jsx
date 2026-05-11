import BorrowButton from "@/components/BorrowButton";


const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://book-borrowing-app.vercel.app/data.json"
  );

  const books = await res.json();

  const book = books.find((book) => book.id === id);
     if (!book) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Book Not Found
        </h1>
      </div>
    );
  }

    return (
        <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      
      <div>
        <img src={book.image_url} alt={book.title} />
      </div>

     
      <div>
        <h1 className="text-5xl font-bold">{book.title}</h1>
        <p className="mt-4">Author: {book.author}</p>
        <p className="mt-6">{book.description}</p>
        <p className="mt-6">{book.available_quantity} copies left</p>

        <BorrowButton/>
      </div>
    </div>
    );
};

export default BookDetailsPage;