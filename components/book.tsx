"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import "@/app/book.css";

type BookPerson = {
  id: number;
  name: string;
  age: string;
  food: string;
  image?: string;
  prompt?: string;
  audio?: string;
};

const createDefaultAudioMap = (): Record<number, { name: string; url: string }> =>
  bookPeople.reduce<Record<number, { name: string; url: string }>>((acc, person) => {
    const defaultAudio = person.audio ?? "/audio/audiosb.mp3";
    acc[person.id] = {
      name: `${person.name} audio`,
      url: defaultAudio,
    };
    return acc;
  }, {});

const bookPeople: BookPerson[] = [
  {
    id: 1,
    name: "Shashi Vardhan",
    age: "18",
    food: "RimJim",
    image: "/images/Page_1.jpeg",
    audio: "/audio/audiosb.mp3",
    prompt: "1. Rimjim\nI like Rimjim mainly because of its taste.\nWhen I eat it, it almost melts in my mouth, so the texture feels different.\nIt reminds me of tandoori masala papad or street food.\nEvery bite feels like the flavour is increasing.\nThe taste and texture together are what make it memorable."
  },
  { id: 2, name: "Hareesh", age: "18", food: "Biryani"


    ,image: "/images/Page_2.jpeg",
    prompt: "I like spicy food because I was born in Macherla, Andhra Pradesh.\nChicken biryani is one of the non-vegetarian foods I enjoy.\nI especially like Double Roast Chicken Biryani.\nI like its spicy and strong flavour.\nI usually enjoy eating it in the evening.\nI like having it with around four or five friends.\nI prefer a place that is neither too crowded nor too quiet.\nFor me, the memory is about the biryani, the evening, the friends and the comfortable atmosphere together."
  },
  { id: 3, name: "Dheeraj", age: "Age", food: "Favorite Food" },
  { id: 4, name: "Pranathi", age: "20", food: "Panipuri"
    ,image: "/images/page_4.jpeg",
    prompt:"I like Panipuri because of its spicy and tangy taste.\nThe pani gives it a strong and refreshing flavour.\nI like the crispy puri when it breaks as soon as I eat it.\nThe combination of potato, chutney and pani makes every bite different.\nI usually enjoy eating it with my friends.\nIt reminds me of going out and having street food in the evening.\nI like trying different flavours of pani when eating Panipuri.\nFor me, Panipuri is special because it is more about the fun of eating it together than just the food."
   },
  { id: 5, name: "Lakshmi", age: "42", food: "Badusha" 
    ,image: "/images/page_5.jpeg",
    prompt: "I like Badusha mainly because of its taste.\nWhen I eat it, it almost melts in my mouth, so the texture feels different.\nIt reminds me of tandoori masala papad or street food.\nEvery bite feels like the flavour is increasing.\nThe taste and texture together are what make it memorable."
  },
  {id: 6, name: "Vishruth", age: "17", food: "Punugulu" 
    ,image: "/images/page_6.jpeg",
    prompt: "I like Punugulu because they are crispy outside and soft inside.\nI usually enjoy them as an evening snack.\nThey taste especially good when they are hot and freshly made.\nI like eating them with chutney.\nThe crispy texture makes me want to keep eating them.\nThey remind me of snacks from small street-food shops.\nI enjoy having them with friends or family in the evening.\nFor me, the combination of hot Punugulu, chutney and the evening atmosphere makes the memory special.."
  },
  { id: 7, name: "Sakuntala", age: "45", food: "Dryfruit Laddu"

    ,image: "/images/page_7.jpeg",
    prompt: "I like dry fruit laddu because of the different dry fruits in it.\nIt has a rich and filling taste.\nI remember ingredients like sunflower seeds and different dry fruits.\nThe nuts and seeds give it a different texture.\nIt feels like a healthy snack to me.\nI like the combination of sweetness and dry fruitsIt is not something I eat every day.\nThe ingredients and the way it is prepared are what make it memorable."

   },
  { id: 8, name: "Ramarao", age: "55", food: "Mango Pickle" 
    ,image: "/images/page_8.jpeg",
    prompt: "Mango pickle is one of the foods I have grown up eating.\nI like it mainly because of its spicy and sour taste.\nThe raw mango gives it a strong sour flavour.\nI like it when there is enough oil and masala mixed with the mango.\nEven a small amount of pickle can make plain rice taste much better.\nI usually eat it with rice, dal or curd rice\nIt reminds me of homemade food and meals with my family   The combination of sour mango, spicy masala and oil is what makes it special to me."
  },
  { id: 9, name: "Chaitanya", age: "Age", food: "Vankaya Biryani"

    ,image: "/images/page_9.jpeg" ,
    prompt: "My grandmother used to make vankaya biryani.\nI like it mainly because she made it.\nIt has a very good and flavourful taste.\nOnion gives it a nice flavour.\nKothimeera also makes the taste better.\nWe don't make it regularly at home\nIt is usually made on special occasions.\nSo whenever I eat it, I remember my grandmother and those occasions."
  },
  { id: 10, name: "Shashi Vardhan", age: "Age", food: "Tandoori Masala Papad"
    ,image: "/images/page_10.jpeg",
    prompt: "I like Tandoori Masala Papad because it is crispy and spicy.\nI usually enjoy it as a starter before the main food.\nThe roasted taste gives it a different flavour.\nI like the masala on top because it makes the papad more interesting.\nThe combination of crispy papad, onion and masala tastes really good.\nIt reminds me of eating street food with friends.\nI like taking small bites because I can feel the crunch and masala together.\nIt is special to me because every bite has a different flavour."
   },
  { id: 11, name: "Krishna Kartheek", age: "Age", food: "Favorite Food" },
  { id: 12, name: "Sampreeth", age: "Age", food: "Favorite Food" },
  { id: 13, name: "Srikanth", age: "Age", food: "Favorite Food" },
  { id: 14, name: "Surya Haas", age: "Age", food: "Favorite Food" },
  { id: 15, name: "Swetha", age: "Age", food: "Favorite Food" },
  { id: 16, name: "Sathwik", age: "Age", food: "Favorite Food" },
  { id: 17, name: "Person 17", age: "Age", food: "Favorite Food" },
  { id: 18, name: "Person 18", age: "Age", food: "Favorite Food" },
  { id: 19, name: "Person 19", age: "Age", food: "Favorite Food" },
  { id: 20, name: "Person 20", age: "Age", food: "Favorite Food" },
];

const Page = forwardRef<HTMLDivElement, { children?: ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => (
    <div className={`flippable-page ${className}`.trim()} ref={ref}>
      <div className="flippable-page-inner">{children}</div>
    </div>
  )
);

Page.displayName = "Page";

export default function Book() {
  const [audioMap, setAudioMap] = useState<Record<number, { name: string; url: string }>>(
    createDefaultAudioMap
  );
  const [openDrawerId, setOpenDrawerId] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      Object.values(audioMap).forEach((audio) => {
        if (audio.url.startsWith("blob:")) {
          URL.revokeObjectURL(audio.url);
        }
      });
    };
  }, [audioMap]);

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>, personId: number) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setAudioMap((prev) => {
      const existing = prev[personId];
      if (existing && existing.url.startsWith("blob:")) {
        URL.revokeObjectURL(existing.url);
      }

      return {
        ...prev,
        [personId]: {
          name: file.name,
          url: URL.createObjectURL(file),
        },
      };
    });

    setOpenDrawerId(null);
  };

  type PageData =
    | { key: string; side: "cover-left"; type: "cover-blank" }
    | { key: string; side: "cover-right"; type: "cover" }
    | { key: string; side: "left" | "right"; person: BookPerson; type: "person" }
    | { key: string; side: "end-left" | "end-right"; type: "end" };

  const personPages: Array<Extract<PageData, { type: "person" }>> = bookPeople.flatMap(
    (person): Array<Extract<PageData, { type: "person" }>> => [
      {
        key: `${person.id}-left`,
        side: "left",
        person,
        type: "person",
      },
      {
        key: `${person.id}-right`,
        side: "right",
        person,
        type: "person",
      },
    ]
  );

  const closingPages: Array<Extract<PageData, { type: "end" }>> = [
    { key: "end-left", side: "end-left", type: "end" },
    { key: "end-right", side: "end-right", type: "end" },
  ];

  const pages: PageData[] = [
    { key: "cover-left", side: "cover-left", type: "cover-blank" },
    { key: "cover-right", side: "cover-right", type: "cover" },
    ...personPages,
    ...closingPages,
  ];

  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        style={{
        }}
        startPage={0}
        size="stretch"
        width={400}
        height={400}
        minWidth={260}
        maxWidth={700}
        minHeight={420}
        maxHeight={700}
        drawShadow={true}
        maxShadowOpacity={0.25}
        flippingTime={900}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        showCover={false}
        mobileScrollSupport={true}
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className="food-book"
      >
        {pages.map((page) => (
          <Page
            key={page.key}
            className={page.type === "cover-blank" ? "cover-blank-page" : ""}
          >
            {page.type === "cover-blank" ? (
              <div className="book-spread book-spread-transparent">
                <div className="opening-quote-box">
                  <span className="opening-quote-tag">Food Memories</span>
                  <p>“Every bite carries a memory,</p>
                  <p>every recipe holds a story,</p>
                  <p>and every memory tastes like home.”</p>
                </div>
              </div>
            ) : page.type === "cover" ? (
              <div className="book-spread book-cover-right">
                <div className="diary-cover">
                  <div className="diary-spine" />
                  <div className="diary-paper">
                    <span className="diary-tag">Family Diary</span>
                    <h4>Food Memories</h4>
                    <div className="diary-divider" />
                    <p>A collection of recipes, stories, and sweet family moments.</p>
                  </div>
                </div>
              </div>
            ) : page.type === "end" ? (
              page.side === "end-left" ? (
                <div className="book-spread book-spread-end-left">
                  <div className="end-page-box">
                    <span className="page-number">The End</span>
                    <h3>With love, laughter, and recipes that stay with us.</h3>
                    <p>May every meal remind us of the people who made it unforgettable.</p>
                  </div>
                </div>
              ) : (
                <div className="book-spread book-spread-transparent" />
              )
            ) : page.side === "left" ? (
              <div className="book-spread book-spread-left">
                <div className="book-side book-side-left">
                  <span className="page-number">Food Memory {page.person.id}</span>
                  <div className="field-group">
                    <label>Name</label>
                    <div className="field-box">{page.person.name}</div>
                  </div>
                  <div className="field-group">
                    <label>Age</label>
                    <div className="field-box">{page.person.age}</div>
                  </div>
                  <div className="field-group">
                    <label>Favorite Food</label>
                    <div className="field-box">{page.person.food}</div>
                  </div>
                  {page.person.image ? (
                    <div className="food-image-card">
                      <img
                        src={page.person.image}
                        alt={`${page.person.food} for ${page.person.name}`}
                        className="food-image"
                      />
                    </div>
                  ) : null}

                  <div className="person-audio-box">
                    {(() => {
                      const currentAudio =
                        audioMap[page.person.id] ??
                        (page.person.audio
                          ? { name: `${page.person.name} audio`, url: page.person.audio }
                          : null);

                      return currentAudio ? (
                        <>
                          <span className="audio-preview-label">Audio</span>
                          <audio controls src={currentAudio.url} className="audio-player" />
                          <small>{currentAudio.name}</small>
                        </>
                      ) : null;
                    })()}

                    <Drawer
                      open={openDrawerId === page.person.id}
                      onOpenChange={(open) => setOpenDrawerId(open ? page.person.id : null)}
                    >
                      <DrawerTrigger className="upload-audio-button">
                        {audioMap[page.person.id] || page.person.audio ? "Replace Audio" : "Upload Audio"}
                      </DrawerTrigger>

                      <DrawerContent className="audio-drawer-content">
                        <DrawerHeader>
                          <DrawerTitle>Upload audio for {page.person.name}</DrawerTitle>
                          <DrawerDescription>
                            Add a voice note or memory for this person.
                          </DrawerDescription>
                        </DrawerHeader>

                        <div className="drawer-body">
                          <input
                            id={`audio-upload-${page.person.id}`}
                            type="file"
                            accept="audio/*"
                            onChange={(event) => handleAudioUpload(event, page.person.id)}
                            className="hidden-input"
                          />
                          <label
                            htmlFor={`audio-upload-${page.person.id}`}
                            className="audio-upload-label"
                          >
                            Choose Audio File
                          </label>
                        </div>

                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </div>
              </div>
            ) : (
              <div className="book-spread book-spread-right">
                <div className="book-side book-side-right blank-page">
                  <span className="page-number page-number-alt">Memory</span>
                  <div className="blank-memory-box">{page.person.prompt}</div>
                </div>
              </div>
            )}
          </Page>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
