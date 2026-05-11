import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1512820790803-83ca734da794')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-7xl md:text-7xl font-bold mb-4 max-w-2xl">
            Find Your Next Read 📚
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Discover amazing books from every category.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                 Browse Now
              </Button>
            </Link>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



// import Link from "next/link";
// import MarqueeText from "@/components/MarqueeText";
// import FeaturedBooks from "@/components/FeaturedBooks";


//   const Banner=() =>{
//     return (
//       <>
          
//       <div
//         className="hero min-h-[70vh]"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1512820790803-83ca734da794')",
//         }}
//       >
        
//         <div className="hero-overlay bg-gradient-to-r from-black via-black/20 to-transparent"></div>

//         <div className="hero-content text-center text-white">
//           <div>
//             <h1 className="text-5xl font-bold">
//               Find Your Next Read 📚
//             </h1>

//             <p className="py-4">
//               Discover amazing books from every category
//             </p>

//             <Link href="/all-books">
//               <button className="btn btn-primary">
//                 Browse Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>


       
//         <MarqueeText/>

        
//         <FeaturedBooks/>

       
//         <section className="py-20 bg-base-200 text-center">
//           <h2 className="text-4xl font-bold">
//             Why Choose Us?
//           </h2>

//           <p className="mt-4">
//             Fast, secure, and modern online borrowing
//           </p>
//         </section>

        
//         <section className="py-20 text-center">
//           <h2 className="text-4xl font-bold">
//             Trusted by Readers
//           </h2>

//           <p className="mt-4">
//             Thousands of students use BookApp daily
//           </p>
//         </section>
//       </>
//     );
//   };

//   export default Banner;