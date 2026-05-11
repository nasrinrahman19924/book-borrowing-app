import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import MarqueeText from "@/components/MarqueeText";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      
       <Banner/>
       <MarqueeText/>
      <FeaturedBooks/>
    </div>
  );
}
