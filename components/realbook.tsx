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
    prompt:`Rimjim
I like Rimjim mainly because of its taste.
It has a nice spicy and flavourful taste.
When I eat it, it almost melts in my mouth.
The texture feels different from normal snacks.
It reminds me of tandoori masala papad.
It also gives me a kind of street-food feeling.
I feel the flavour becomes stronger with every bite.
The taste and the new texture are what make it special to me.`
  },
  {
    id: 2,
    prev:"RimJim",
    title: "FOOD MEMORY 2",
    name: "Pranathi",
    age: "20",
    favoriteFood: "Panipuri",
    audioTime: "0:00 / 0:45",
    photo: "/images/page_4.jpeg",
    prompt:` Pani puri is my favorite food.


 I like it because I love its taste.


 The environment is lively and enjoyable.


 I like a lively and cheerful environment.

 My first time eating pani puri with my sister and kids was very special to me.

 I created this memory with my sister at the pani puri stall opposite Max in Lakshmipuram, Guntur.
`
  },
  {
    id: 3,
    title: "FOOD MEMORY 3",
    name: "Ramarao",
    age: "54",
    favoriteFood: "Mango Pickle",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_8.jpeg",
    prompt:`Mango Pickle
Mango pickle is one of the foods I have grown up eating.
I like it mainly because of its spicy and sour taste.
The raw mango gives it a strong sour flavour.
I like it when there is enough oil and masala mixed with the mango.
Even a small amount of pickle can make plain rice taste much better.
I usually eat it with rice, dal or curd rice.
It reminds me of homemade food and meals with my family.
The combination of sour mango, spicy masala and oil is what makes it special to me`
  },
  {
    id: 4,
    title: "FOOD MEMORY 4",
    name: "Sakuntala",
    age: "48",
    favoriteFood: "Dry fruit Laddu",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_7.jpeg",
    prompt:`Dry Fruit Laddu
I like dry fruit laddu because of the different nuts and seeds in it.
I remember ingredients like dry fruits and sunflower seeds.
It feels like a healthy and filling food.
The combination of nuts and seeds gives it a different taste and texture.`
  },
  {
    id: 5,
    title: "FOOD MEMORY 5",
    name: "Lakshmi",
    age: "45",
    favoriteFood: "Badusha",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_5.jpeg",
    prompt:`Badusha
I like Badusha because it is not too sweet.
I remember ingredients like sanagapindi and chakka, along with sugar.
The main reason it is special to me is my grandmother.
Whenever I think about Badusha, I remember her making or serving it.`
  },
  {
    id: 6,
    title: "FOOD MEMORY 6",
    name: "Anjani Shweta priya",
    age: "31",
    favoriteFood: "fries with nuggets and fruits",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_16.jpg",
    prompt:`My first international trip with my husband brought an unexpected challenge—finding vegetarian food in Bali. For days, I lived on fries, fruits, pancakes and croissants, missing a proper meal.

Then we found a tiny place serving vegetarian Bakso, usually made with chicken. That little bowl felt like a treasure. I still remember the happiness on my face.

It tasted like relief, adventure, and a little piece of home in a foreign land.`
  },
  {
    id: 7,
    title: "FOOD MEMORY 7",
    name: "Hareesh",
    age: "18",
    favoriteFood: "Chicken Biryani",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_2.jpeg",
    prompt:`
I like spicy food because I was born in Macherla, Andhra Pradesh.
I like Double Roast Chicken Biryani because of its spicy and strong flavour.
I usually associate it with eating in the evening.
It is more enjoyable when I am with around 4 or 5 friends.
I don't like an environment that is too crowded or too quiet.
I prefer a comfortable place where we can sit, eat and talk with friends.
So for me, the memory is not only about the biryani. It is also about the place, evening time and being with friends.`
  },
  {
    id: 8,
    title: "FOOD MEMORY 8",
    name: "Akshi",
    age: "16",
    favoriteFood: "Gulabjamun",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_11.jpg",
    prompt:`I like gulab jamun the most as I'm a big fan of sweets 
It just melts in my mouth and I really love sweets so there's no specific reason I like it 
My love for gulab jamun started with my mom,I used to ask her to make it whenever I go home,it lits up my mood instantly
I love summer and rainy season the most,cause summer brings me vacation and mangoes and rainy season i love rain and the blustery weather and the peace it provides
`
  },
  {
    id: 9,
    title: "FOOD MEMORY 9",
    name: "srija Atmakuri",
    age: "21",
    favoriteFood: "kaju barfi",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_14.jpg",
    prompt:`my best memories is enjoying it with my family during a festival.
I like kaju barfi because I love the taste of cashews and its soft, smooth texture.
The environment was happy and lively, with everyone talking, laughing, and enjoying the celebration.
I like a peaceful and friendly environment where I can spend quality time with my family or close friends.
A special moment for me was celebrating a festival with my family because everyone was together and happy.
That memory was created at my home with my family`
  },
  {
    id: 10,
    title: "FOOD MEMORY 10",
    name: "Suryahaas",
    age: "18",
    favoriteFood: "Chapathi with chicken",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_18.jpg",
    prompt:`
Chicken provides protein (helps build muscle and strength).Rainy days environment 
A rainy day creates a cool and fresh environment. The air becomes cleaner, trees and plants look green, and the temperature decreases. Rain provides water for crops, rivers, and lakes. People enjoy the pleasant weather, but heavy rain can sometimes cause flooding and traffic problems.Iam vegetarian then after some years my friends force me to eat non veg so I try it after some times eaten I became favorite to non veg items`
  },
  {
    id: 11,
    title: "FOOD MEMORY 11",
    name: "Krishna Kartheek",
    age: "31",
    favoriteFood: "Chicken lasagna",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_17.jpg",
    prompt:`Chicken lasagna.
    I love its rich flavor and the combination of cheesy and creamy textures.
    Rainy weather. I really enjoy the calm and refreshing feeling it brings.
    Having chicken lasagna with my friends on a rainy day. It was a simple but memorable moment because of the food, the weather, and the time spent together.
    In Bhubaneswar, with my friends.
    `
  },
  {
    id: 12,
    title: "FOOD MEMORY 12",
    name: "Sampreeth",
    age: "18",
    favoriteFood: "Panner Biryani",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_13.jpg",
    prompt:`
    My favourite food is Panner biryani . My mother cooks it really well.

Because of the combination of the spices and satisfying taste , i like it.

Food memory: Back in the 2019 just before the Pandemic , when I was celebrating my birthday with my family and friends, the taste of Panner biryani was the finest.
    `
  },
  {
    id: 13,
    title: "FOOD MEMORY 13",
    name: "Harika",
    age: "21",
    favoriteFood: "Chicken Lollipop",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_12.jpg",
    prompt:`My favorite food is chicken lollipop, because its crispy texture and spicy flavor make every bite exciting.
I love enjoying it with my friends in a lively yet comfortable restaurant atmosphere.
One unforgettable moment was when we ordered a plate of chicken lollipops and turned a simple meal into an evening full of laughter and friendly teasing.
That memory is special because it reminds me that good food becomes even more delicious when shared with good friends.
`
  },
  {
    id: 14,
    title: "FOOD MEMORY 14",
    name: "Vishruth",
    age: "18",
    favoriteFood: "Punugulu",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_6.jpeg",
    prompt:`
    
I like Punugulu because they are crispy outside and soft inside.
I usually enjoy them as an evening snack.
They taste especially good when they are hot and freshly made.
I like eating them with chutney.
The crispy texture makes me want to keep eating them.
They remind me of snacks from small street-food shops.
I enjoy having them with friends or family in the evening.
For me, the combination of hot Punugulu, chutney and the evening atmosphere makes the memory special.
    `
  },
  {
    id: 15,
    title: "FOOD MEMORY 15",
    name: "Shashi vardhan",
    age: "18",
    favoriteFood: "Masala papad",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_10.jpeg",
    prompt:`Tandoor Masala Papad
I like Tandoor Masala Papad because it is crispy and spicy.
I usually enjoy it as a starter before the main food.
The roasted taste gives it a different flavour.
I like the masala on top because it makes the papad more interesting.
The combination of crispy papad, onion and masala tastes really good.
It reminds me of eating street food with friends.
I like taking small bites because I can feel the crunch and masala together.
It is special to me because every bite has a different flavour.`
  },
  {
    id: 16,
    title: "FOOD MEMORY 16",
    name: "Vidhyadhari",
    age: "28",
    favoriteFood: "Sizzling brownie",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_19.jpg",
    prompt:`
    The fresh, warm brownie with vanilla ice cream and hot chocolate sauce creates a perfect combination of flavors and textures.
    Rainy weather. I love the calm and refreshing atmosphere.
    Enjoying a sizzling brownie on a rainy evening—it was a simple but memorable experience.
    In Bhubaneswar, with my friends.`
  },
  {
    id: 17,
    title: "FOOD MEMORY 17",
    name: "Pranathi",
    age: "20",
    favoriteFood: "Apricon Delight",
    audioTime: "0:00 / 1:12",
    photo: "/images/Page_15.jpg",
    prompt:`
   Apricot Delight is my favorite dessert.
 I like it because I love its sweet and creamy taste.
 The environment is peaceful and pleasant.
 I like a calm and comfortable environment.
 Eating Apricot Delight with my family was a very special moment for me.
 I created this food memory with my family at a restaurant.

    `
  },
  {
    id: 18,
    title: "FOOD MEMORY 18",
    name: "Chaitanya",
    age: "42",
    favoriteFood: "Biryani",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_9.jpeg",
    prompt:`
    
My grandmother used to make vankaya biryani.
I like it mainly because she made it.
It tastes very good because of the ingredients she used.
Onion and kothimeera give it a nice flavour.
It is special because it is not something we make regularly.
Usually, it is made only on special occasions, so whenever I eat it, it feels different.
    `
  },
  {
    id: 19,
    title: "FOOD MEMORY 19",
    name: "Prasanth",
    age: "18",
    favoriteFood: "Boba",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_20.jpg",
    prompt:`
     Boba 
 I like Boba because it has a sweet and refreshing taste.
 I first found it interesting because of the small chewy tapioca pearls.
 The chewy texture makes it different from normal drinks.
 I like the combination of the drink and the boba pearls together.
 Every sip feels a little different because of the pearls.
 I usually enjoy having it when I go out with friends.
 It feels more like a fun drink than just a normal beverage.
 For me, Boba is special because of its unique taste, texture and the experience of drinking it.
    `
  },
  {
    id: 20,
    title: "FOOD MEMORY 20",
    name: "Ashwini",
    age: "18",
    favoriteFood: "Laphing",
    audioTime: "0:00 / 1:12",
    photo: "/images/page_21.jpg",
    prompt:` 
 I like Laphing because it has a spicy and tangy taste.
 The chilli and sauces give it a strong flavour.
 I like its soft and slightly chewy texture.
 The cold texture makes it different from other spicy foods.
 I enjoy adding extra chilli because I like spicy food.
 I usually eat it as a snack when I go out.
 It reminds me of trying different street foods with friends.
 For me, Laphing is special because of its spicy taste, chewy texture and the fun of trying something different.`
  },
  {
    name: "THE END",
    prompt: "Thank you for exploring these food memories with us. We hope they brought a smile to your face and a taste of nostalgia to your heart. Until next time, keep savoring the flavors of life!"
  }
  
  
  

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
                 
                 <div
  className="w-full h-full bg-[#f4e8d1] flex flex-col items-center justify-center p-10"
  style={{
    backgroundImage: "url(/image_6875bb.jpg)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right center",
    boxShadow: "inset 30px 0 40px rgba(0,0,0,0.6)",
  }}
>
  
  <div className="w-full text-center">

    

    {/* Food name */}
    <h2 className="text-3xl font-serif text-[#2b1f14] mb-8">
      {bookData[sheet.index-1].favoriteFood}
    </h2>

    {/* Decorative line */}
    <div className="w-16 h-[1px] bg-[#8a6849] mx-auto mb-8" />

    {/* Memory prompt */}
    <p className="text-base fontright leading-8 font-serif italic text-[#2b1f14]">
      "{bookData[sheet.index-1].prompt}"
    </p>

    {/* Person name */}
    <p className="mt-10 text-sm tracking-widest text-[#6b4f3a]">
      — {bookData[sheet.index-1].name}
    </p>

  </div>
</div>
                )}
              </div>

              {/* BACK OF THE SHEET (Visible on the left side when opened) */}
              {sheet.index != 20 ? (<div
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
                  <h2 className="carattere-regular text-sm tracking-widest border-b border-[#2b1f14]/40 pb-2 mb-6">
                    {sheet.backData.title}
                  </h2>

                  <div className="mb-4">
                    <span className="carattere-regular text-[10px] font-bold tracking-widest opacity-70">
                      NAME
                    </span>
                    <p className="carattere-regular text-2xl border-b border-[#2b1f14]/20 pb-1">
                      {sheet.backData.name}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="carattere-regular text-[10px] font-bold tracking-widest opacity-70">
                      AGE
                    </span>
                    <p className="carattere-regular text-xl border-b border-[#2b1f14]/20 pb-1">
                      {sheet.backData.age}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="carattere-regular text-[10px] font-bold tracking-widest opacity-70">
                      FAVORITE FOOD
                    </span>
                    <p className="carattere-regular text-xl border-b border-[#2b1f14]/20 pb-1">
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
                    <div className="w-8 h-8 rounded-full bg-[#2b1f14] text-[#EEEAE2] flex items-center justify-center text-xs pl-1 shadow-sm">
                      ▶
                    </div>
                    <div className="flex-1 h-[2px] bg-[#F2F1F0]/30 relative">
                      <div className="absolute top-[-2px] left-[30%] w-2 h-2 rounded-full bg-[#F7F4F2]"></div>
                    </div>
                    <span className="text-[10px] font-sans font-bold bg-[#F7F4F2]">
                      {sheet.backData.audioTime}
                    </span>
                  </div>
                </div>
              </div>):(
                <div 
                className="absolute w-full h-full bg-[#2c1b12] rounded-l-lg p-10 flex flex-col z-index-10 items-center justify-center text-[#d4af37] font-serif text-4xl tracking-widest drop-shadow-md"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg) translateZ(1px)",
                  // Uses your provided parchment image for the texture
                  backgroundImage: "url(/image_6875bb.jpg)",
                  backgroundSize: "500% 100%",
                  backgroundPosition: "right center",
                  boxShadow: "inset -30px 0 40px rgba(0,0,0,0.6)",
                }}
              >
                {sheet.backData.name}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage(0);
                  }}
                  className="mt-10 px-6 py-3 border border-[#d4af37] text-[#d4af37] text-sm tracking-widest hover:bg-[#d4af37] hover:text-[#2c1b12] transition-all duration-300"
                >
                  CLOSE BOOK
                </button>
                
              </div>
              

              
               
                ) }
              
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}