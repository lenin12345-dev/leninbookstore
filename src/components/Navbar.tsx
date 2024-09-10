import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">BookStore</Link>
        </h1>
        <div>
          <Link to="/books">
            <Button className="ml-4">Browse Books</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
