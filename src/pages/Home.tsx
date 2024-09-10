import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home: React.FC = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      coverImage:
        "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage:
        "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const bestsellers = [
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      coverImage:
        "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      coverImage: "https://m.media-amazon.com/images/I/41K1F3Thx4L._SY780_.jpg",
    },
    {
      id: 7,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
    },
    {
      id: 8,
      title: "The Vanishing Half",
      author: "Brit Bennett",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1577090827l/51791252.jpg",
    },
  ];

  const newArrivals = [
    {
      id: 7,
      title: "The Midnight Library",
      author: "Matt Haig",
      coverImage:
        "https://m.media-amazon.com/images/I/71ls-I6A5KL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 8,
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584633432i/50623864.jpg",
    },
    {
      id: 9,
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      coverImage:
        "https://m.media-amazon.com/images/I/61tqFlvlU3L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to BookStore
      </h1>
      <p className="text-lg text-center mb-6">
        Discover the best books across various genres!
      </p>

      {/* Bestsellers Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-4">Bestsellers</h2>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-4xl" 
          >
            <CarouselContent className="flex space-x-4">
              {" "}
         
              {bestsellers.map((book, index) => (
                   <Link to="/books">
                <CarouselItem key={index} className="flex-none w-60 h-85">
                  {" "}
            
                  <div className="p-1 h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <Card key={book.id} className="w-full h-full">
                      {" "}
                     
                      <CardHeader>
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="h-65 w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="flex flex-col justify-between h-20">
                        <CardTitle>{book.title}</CardTitle>
                        <p className="text-sm text-gray-500">{book.author}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                </Link>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-4">
          New Arrivals
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {newArrivals.map((book) => (
            <div key={book.id} className="transition-transform duration-300 ease-in-out transform hover:scale-105">

              <Link to="/books">
            <Card  className="w-60">
              <CardHeader>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="h-60 w-full object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{book.title}</CardTitle>
                <p className="text-sm text-gray-500">{book.author}</p>
              </CardContent>
            </Card>
            </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/books">
          <Button className="mx-auto">Explore Our Collection</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
