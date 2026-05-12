import BookCard from "@/components/BookCard";
import Category from "@/components/Category";


const AllBooksPage = async (searchParams) => {
   const {category} = await searchParams;

const res = await fetch('https://book-borrowing-app.vercel.app/data.json')
    const data = await res.json();
    
    const filteredBooks= category ? data.filter(book=> book.category.toLowerCase() == category.toLowerCase()) : data

    return (
     <div>

            <h1 className="text-2xl font-bold m-4">All Books</h1>

            <Category/>

            <div className="grid grid-cols-4 gap-5">
                {filteredBooks.map(book=> <BookCard key={book.id} book={book}/>)}
            </div>

            
        </div>
    );
};

export default AllBooksPage;