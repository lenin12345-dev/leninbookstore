// components/Filter.tsx
import React, { useState } from 'react';
import { Select, SelectItem, SelectTrigger, SelectValue,SelectContent } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FilterProps = {
  priceRange: string;
  setPriceRange: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  publishDate: string;
  setPublishDate: (value: string) => void;
  uniqueCategories:Array;
  resetFilters: ()=>void;
};


const Filter: React.FC <FilterProps> = ({
  priceRange,
  setPriceRange,
  category,
  setCategory,
  publishDate,
  setPublishDate,
  uniqueCategories,
  resetFilters
})=> {

 console.log('uniqueCategories',uniqueCategories)
  return (
    <Card className="p-4 bg-gray-100 rounded-lg shadow-md">
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardTitle className="text-lg font-bold">Filter Books</CardTitle>
        <Button onClick={resetFilters} className="bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Reset Filters
      </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price</label>
          <Select
            value={priceRange}
            onValueChange={setPriceRange}
            className="w-full"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Price Range" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="0-10">$0 - $10</SelectItem>
            <SelectItem value="10-20">$10 - $20</SelectItem>
            <SelectItem value="20-30">$20 - $30</SelectItem>
            <SelectItem value="30-50">$30 - $50</SelectItem>
            <SelectItem value="50+">$50+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <Select
            value={category}
            onValueChange={setCategory}
            className="w-full"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
        {uniqueCategories.map(cat => (
          <SelectItem key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</SelectItem>
        ))}
      </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Publish Date</label>
          <Select
            value={publishDate}
            onValueChange={setPublishDate}
            className="w-full"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Publish Date" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
            <SelectItem value="last-2-years">Last 2 years</SelectItem>
            <SelectItem value="last-3-years">Last 3 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default Filter;
