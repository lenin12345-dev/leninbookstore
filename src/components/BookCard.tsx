import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, description, price, coverImage }) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
<Card className="bg-white p-2 rounded-lg shadow-md max-w-sm flex flex-col">
  <div className="flex items-start mb-3 h-50 ">
    <img 
      src={coverImage} 
      alt={title} 
      className="h-48 w-32 object-cover rounded-lg shadow-md mr-4 transition-transform duration-300 ease-in-out transform hover:scale-105" // Adjusted image height for consistency
    />
    <div className="flex flex-col justify-between flex-grow">
      <CardTitle className="text-md font-bold mb-1">{title}</CardTitle>
      <p className="text-xs text-gray-600 mb-1">by {author}</p>
      <p className="text-md font-semibold text-blue-500 mb-1">${price?.toFixed(2)}</p>
    </div>
  </div>
  

  <CardContent className="p-2 flex-grow flex flex-col justify-between">
    {showDescription && (
      <p className="text-gray-700 text-xs mb-2">{description}</p>
    )}

    <Button className="w-full mt-auto" onClick={() => setShowDescription(!showDescription)}>
      {showDescription ? 'Hide Description' : 'Show Description'}
    </Button>
  </CardContent>
</Card>


  );
};

export default BookCard;
