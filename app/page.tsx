import Beams from "@/components/Beams";
import Book from "@/components/book";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <Beams />
      </div>

      <div className="relative z-10 flex-1">
        <Book />
      </div>

      <footer className="relative z-10 footer-bar">
        <div className="footer-inner">
          <div className="footer-about">
            <span className="footer-title"><h1>About Us</h1></span>
            
          </div>

          <div className="footer-members">
            <span className="footer-title">Members</span>
            <ul>
              <li>Prasanth : 25BCS110</li>
              <li>Bhavik : 25BCS063</li>
              <li>Pranay : 25BCS109</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
