"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// 1. DICTIONARY ARRAY: Easily add or remove pages by editing this array
const bookData = [
  {
    id: 1,
    title: "FOOD MEMORY 1",
    name: "Shashi Vardhan",
    age: "18",
    favoriteFood: "RimJim",
    audioTime: "0:00 / 0:14",
    photo: "/images/Page_1.jpeg",
  },
  {
    id: 2,
    title: "FOOD MEMORY 2",
    name: "Pranathi",
    age: "20",
    favoriteFood: "Panipuri",
    audioTime: "0:00 / 0:45",
    photo: "/images/page_4.jpeg",
  },
  {
    id: 3,
    title: "FOOD MEMORY 3",
    name: "Ramarao",
    age: "54",
    favoriteFood: "Mango Pickle",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_8.jpeg",
  },
  {
    id: 4,
    title: "FOOD MEMORY 4",
    name: "Sakuntala",
    age: "48",
    favoriteFood: "Dry fruit Laddu",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_7.jpeg",
  },
  {
    id: 5,
    title: "FOOD MEMORY 5",
    name: "Lakshmi",
    age: "45",
    favoriteFood: "Badusha",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_5.jpeg",
  },
  {
    id: 6,
    title: "FOOD MEMORY 6",
    name: "Anjani Shweta priya",
    age: "31",
    favoriteFood: "fries with nuggets and fruits",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_16.jpg",
  },
  {
    id: 7,
    title: "FOOD MEMORY 7",
    name: "Hareesh",
    age: "18",
    favoriteFood: "Chicken Biryani",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_2.jpeg",
  },
  {
    id: 8,
    title: "FOOD MEMORY 8",
    name: "Akshi",
    age: "16",
    favoriteFood: "Gulabjamun",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_11.jpg",
  },
  {
    id: 9,
    title: "FOOD MEMORY 9",
    name: "srija Atmakuri",
    age: "21",
    favoriteFood: "kaju barfi",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_14.jpg",
  },
  {
    id: 10,
    title: "FOOD MEMORY 10",
    name: "Suryahaas",
    age: "18",
    favoriteFood: "Chapathi with chicken",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_18.jpg",
  },
  {
    id: 11,
    title: "FOOD MEMORY 11",
    name: "Krishna Kartheek",
    age: "31",
    favoriteFood: "Chicken lasagna",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_17.jpg",
  },
  {
    id: 12,
    title: "FOOD MEMORY 12",
    name: "Sampreeth",
    age: "18",
    favoriteFood: "Panner Biryani",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_13.jpg",
  },
  {
    id: 13,
    title: "FOOD MEMORY 13",
    name: "Harika",
    age: "21",
    favoriteFood: "Chicken Lollipop",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_12.jpg",
  },
  {
    id: 14,
    title: "FOOD MEMORY 14",
    name: "Vishruth",
    age: "18",
    favoriteFood: "Punugulu",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_6.jpeg",
  },
  {
    id: 15,
    title: "FOOD MEMORY 15",
    name: "Shashi vardhan",
    age: "18",
    favoriteFood: "Masala papad",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_10.jpeg",
  },
  {
    id: 16,
    title: "FOOD MEMORY 16",
    name: "Vidhyadhari",
    age: "28",
    favoriteFood: "Sizzling brownie",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_19.jpg",
  },
  {
    id: 17,
    title: "FOOD MEMORY 17",
    name: "Pranathi",
    age: "20",
    favoriteFood: "Apricon Delight",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_15.jpg",
  },
  {
    id: 18,
    title: "FOOD MEMORY 18",
    name: "Chaitanya",
    age: "42",
    favoriteFood: "Biryani",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_9.jpeg",
  },
  {
    id: 19,
    title: "FOOD MEMORY 19",
    name: "Prasanth",
    age: "18",
    favoriteFood: "Boba",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_20.jpg",
  },
  {
    id: 20,
    title: "FOOD MEMORY 20",
    name: "Ashwini",
    age: "18",
    favoriteFood: "Laphing",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_21.jpg",
  },
  
  
  

];

export default function RealisticBook() {
  // 0 means closed. 1 means first spread open, 2 means second spread, etc.
  const [currentPage, setCurrentPage] = useState(0);

  // Create an array of physical "sheets" of paper
  // Sheet 0 is the Cover (Front = Cover Art, Back = Data Item 0)
  // Sheet 1 is Page 1 (Front = Blank Right Page, Back = Data Item 1)
  const sheets = bookData.map((dataItem, index) => ({
    index: index,
    isCover: index === 0,
    backData: dataItem,
  }));

  // Fixed Event Handlers
 const openNextPage = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e) e.stopPropagation();
  if (currentPage < sheets.length) setCurrentPage((prev) => prev + 1);
};

const openPrevPage = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e) e.stopPropagation();
  if (currentPage > 0) setCurrentPage((prev) => prev - 1);
};
  return (
    // bg-transparent allows you to place this over any custom background in your app
    <div
      className="flex items-center justify-center min-h-screen bg-transparent overflow-hidden p-10 w-full"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        className="relative w-[380px] h-[500px]"
        style={{ transformStyle: "preserve-3d" }}
        // Center the book when opened by shifting it to the right
        animate={{
          rotateX: currentPage > 0 ? 10 : 25,
          rotateY: currentPage > 0 ? 0 : -20,
          x: currentPage > 0 ? 190 : 0,
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* === 1. STATIC BACK COVER === */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1c120c] rounded-r-lg border border-black/40"
          style={{
            transform: "translateZ(-25px)",
            boxShadow: "10px 15px 30px rgba(0,0,0,0.8)",
          }}
        ></div>

        {/* === 2. 3D PAGE THICKNESS (Right Edge) === */}
        <div
          className="absolute top-1 bottom-1 left-0 right-[-10px] bg-[#d3c2a8] rounded-r-md overflow-hidden flex flex-col justify-evenly pointer-events-none"
          style={{
            transform: "translateZ(-20px)",
            boxShadow: "inset 5px 0 15px rgba(0,0,0,0.3)",
          }}
        >
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-full border-b border-[#b39f82]/40 h-[1px]"></div>
          ))}
        </div>

        {/* === 3. THE SPINE === */}
        <div
          className="absolute top-0 left-0 w-[25px] h-full bg-[#130b06] border-r border-white/5"
          style={{
            transformOrigin: "left",
            transform: "rotateY(-90deg) translateX(-25px)",
          }}
        ></div>

        {/* === 4. STATIC RIGHT BASE PAGE === */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#f4e8d1] rounded-r-lg shadow-inner overflow-hidden"
          style={{
            transform: "translateZ(-1px)",
            backgroundImage: "url(/image_6875bb.jpg)",
            backgroundSize: "200% 100%",
            backgroundPosition: "right center",
            boxShadow: "inset 30px 0 40px rgba(0,0,0,0.6)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center opacity-30">
            <p className="font-serif italic text-[#2b1f14]">The End</p>
          </div>
        </div>

        {/* === 5. MULTIPLE FLIPPABLE PAGES === */}
        {sheets.map((sheet) => {
          const isFlipped = currentPage > sheet.index;
          // Z-Index layering ensures pages stack correctly depending on which side they rest
          const dynamicZIndex = isFlipped
            ? sheet.index
            : sheets.length - sheet.index;

          return (
            <motion.div
              key={sheet.index}
              className="absolute top-0 left-0 w-full h-full origin-left rounded-r-lg cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                zIndex: dynamicZIndex,
              }}
              animate={{ rotateY: isFlipped ? -180 : 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={isFlipped ? openPrevPage : openNextPage}
            >
              {/* FRONT OF THE SHEET (Visible on the right side) */}
              <div
                className="absolute w-full h-full rounded-r-lg overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "translateZ(1px)",
                }}
              >
                {sheet.isCover ? (
                  /* COVER DESIGN */
                  <div className="w-full h-full bg-[#2c1b12] flex items-center justify-center p-4 border-l-4 border-black/60 shadow-[5px_10px_20px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-4 border border-dashed border-[#8a6849]/50 rounded-r-md"></div>
                    <h1 className="text-[#d4af37] text-4xl font-serif text-center uppercase tracking-widest drop-shadow-md">
                      Food
                      <br />
                      Memory
                    </h1>
                  </div>
                ) : (
                  /* STANDARD RIGHT PAGE DESIGN */
                  <div
                    className="w-full h-full bg-[#f4e8d1] flex items-center justify-center"
                    style={{
                      backgroundImage: "url(/image_6875bb.jpg)",
                      backgroundSize: "200% 100%",
                      backgroundPosition: "right center",
                      boxShadow: "inset 30px 0 40px rgba(0,0,0,0.6)",
                    }}
                  >
                    <p className="opacity-0">Click to flip</p>
                  </div>
                )}
              </div>

              {/* BACK OF THE SHEET (Visible on the left side when opened) */}
              <div
                className="absolute w-full h-full bg-[#f4e8d1] rounded-l-lg p-10 flex flex-col"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg) translateZ(1px)",
                  // Uses your provided parchment image for the texture
                  backgroundImage: "url(/image_6875bb.jpg)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "left center",
                  boxShadow: "inset -30px 0 40px rgba(0,0,0,0.6)",
                }}
              >
                {/* DYNAMIC DATA TEMPLATE */}
                <div className="relative z-10 text-[#2b1f14] font-serif flex-1 flex flex-col pointer-events-none">
                  <h2 className="text-sm tracking-widest border-b border-[#2b1f14]/40 pb-2 mb-6">
                    {sheet.backData.title}
                  </h2>

                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-widest opacity-70">
                      NAME
                    </span>
                    <p className="text-2xl border-b border-[#2b1f14]/20 pb-1">
                      {sheet.backData.name}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-widest opacity-70">
                      AGE
                    </span>
                    <p className="text-xl border-b border-[#2b1f14]/20 pb-1">
                      {sheet.backData.age}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-widest opacity-70">
                      FAVORITE FOOD
                    </span>
                    <p className="text-xl border-b border-[#2b1f14]/20 pb-1">
                      {sheet.backData.favoriteFood}
                    </p>
                  </div>

                  {/* Photo container */}
                  <div className="w-full bg-white/70 p-2 shadow-md rotate-[-2deg] mb-auto">
                    <div className="w-full h-32 bg-black/80 overflow-hidden relative">
                      <img
                        src={sheet.backData.photo}
                        alt={sheet.backData.favoriteFood}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>

                  {/* Fake Audio Player */}
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-8 h-8 rounded-full bg-[#2b1f14] text-[#f4e8d1] flex items-center justify-center text-xs pl-1 shadow-sm">
                      ▶
                    </div>
                    <div className="flex-1 h-[2px] bg-[#2b1f14]/30 relative">
                      <div className="absolute top-[-2px] left-[30%] w-2 h-2 rounded-full bg-[#2b1f14]"></div>
                    </div>
                    <span className="text-[10px] font-sans font-bold">
                      {sheet.backData.audioTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}