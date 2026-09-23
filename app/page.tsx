import Beams from "@/components/Beams";
import Book from "@/components/book"

export default function Home() {
  return (
  <main className="relative min-h-screen">

  
  <div className="absolute inset-0 z-0">
    <Beams />
  </div>

  
  <div className="relative z-10">
    <Book />
  </div>

</main>
  );
}
