import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import Filter from '../components/Filter';
import NoBooksFound from '../components/NoBooksFound';

type Book = {
  title: string;
  author: string;
  description: string;
  price: number;
  category: string;
  publicationDate: string;
  coverImage: string;
};

const booksData: Book[] = [

  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A classic novel of racial injustice in the American South.',
    price: 12.99,
    category: 'Classic',
    publicationDate: '1960-07-11',
    coverImage: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A story of wealth and tragedy in 1920s America.',
    price: 10.99,
    category: 'Classic',
    publicationDate: '1925-04-10',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    description: 'An epic tale of the quest to capture the white whale.',
    price: 34.99,
    category: 'Adventure',
    publicationDate: '1851-10-18',
    coverImage: 'https://cloud.firebrandtech.com/api/v2/image/111/9780785839781/CoverArtHigh/XL',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A romantic novel that also critiques social issues.',
    price: 38.99,
    category: 'Romance',
    publicationDate: '1813-01-28',
    coverImage: 'https://m.media-amazon.com/images/I/41K1F3Thx4L._SY780_.jpg',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'A futuristic dystopian society governed by science and technology.',
    price: 61.99,
    category: 'Dystopian',
    publicationDate: '1932-08-31',
    coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1580425803i/28875910.jpg',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A story about teenage rebellion and alienation.',
    price: 10.49,
    category: 'Classic',
    publicationDate: '1951-07-16',
    coverImage: 'https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'The precursor to "The Lord of the Rings" trilogy, featuring a reluctant hero and a dangerous quest.',
    price: 15.99,
    category: 'Fantasy',
    publicationDate: '1937-09-21',
    coverImage: 'https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    description: 'A novel set in a future where books are banned and "firemen" burn any that are found.',
    price: 29.99,
    category: 'Dystopian',
    publicationDate: '1953-10-19',
    coverImage: 'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781451673265_9781451673265_hr.jpg',
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    description: 'An ancient Greek epic poem about the hero Odysseus and his journey home after the Trojan War.',
    price: 13.49,
    category: 'Epic Poetry',
    publicationDate: '700 BC',
    coverImage: 'https://www.gutenberg.org/files/3160/3160-h/images/cover.jpg',
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    description: 'A psychological drama about a man who commits murder and struggles with his conscience.',
    price: 94.99,
    category: 'Psychological Fiction',
    publicationDate: '1866-01-01',
    coverImage: 'https://prodimage.images-bn.com/pimages/9781915932204_p0_v1_s1200x630.jpg',
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    description: 'A novel about an orphaned girl who grows up facing hardship and love.',
    price: 10.99,
    category: 'Romance',
    publicationDate: '1847-10-16',
    coverImage: 'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416500247_9781416500247_hr.jpg',
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel set in a totalitarian society.',
    price: 9.99,
    category: 'Dystopian',
    publicationDate: '1949-06-08',
    coverImage: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'A novel about a woman who explores different versions of her life in a magical library.',
    price: 15.99,
    category: 'Fiction',
    publicationDate: '2020-08-13',
    coverImage: 'https://m.media-amazon.com/images/I/71ls-I6A5KL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    description: 'A gripping science fiction novel about a lone astronaut who must save Earth from disaster.',
    price: 18.99,
    category: 'Science Fiction',
    publicationDate: '2021-05-04',
    coverImage: 'https://m.media-amazon.com/images/I/81zD9kaVW9L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    description: 'A mystery and coming-of-age novel set in the marshes of North Carolina.',
    price: 16.49,
    category: 'Mystery',
    publicationDate: '2024-08-14',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg',
  },
  {
    title: 'The Vanishing Half',
    author: 'Brit Bennett',
    description: 'A multi-generational story about twin sisters who lead vastly different lives.',
    price: 17.99,
    category: 'Historical Fiction',
    publicationDate: '2020-06-02',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1577090827l/51791252.jpg',
  },
  {
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    description: 'A novel about an artificial friend who observes the world around her and dreams of being loved.',
    price: 14.99,
    category: 'Dystopian',
    publicationDate: '2023-03-02',
    coverImage: 'https://m.media-amazon.com/images/I/61tqFlvlU3L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'The Last House on Needless Street',
    author: 'Catriona Ward',
    description: 'A psychological thriller about a man living in isolation and the secrets he hides.',
    price: 16.99,
    category: 'Thriller',
    publicationDate: '2023-09-28',
    coverImage: 'https://m.media-amazon.com/images/I/915ZEVEob-L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Malibu Rising',
    author: 'Taylor Jenkins Reid',
    description: 'A story about a family’s tumultuous life leading up to a dramatic event.',
    price: 15.99,
    category: 'Contemporary Fiction',
    publicationDate: '2021-06-01',
    coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618293107l/55404546.jpg',
  },
  {
    title: 'The Guncle',
    author: 'Steven Rowley',
    description: 'A heartwarming and humorous novel about an eccentric gay uncle raising his orphaned niece and nephew.',
    price: 13.99,
    category: 'Comedy',
    publicationDate: '2021-05-25',
    coverImage: 'https://m.media-amazon.com/images/I/710kd-3FbzL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'American Dirt',
    author: 'Jeanine Cummins',
    description: 'A powerful novel about a mother and son fleeing drug cartel violence in Mexico.',
    price: 18.49,
    category: 'Drama',
    publicationDate: '2024-01-21',
    coverImage: 'https://m.media-amazon.com/images/I/811HtIChV9L.jpg',
  },
  {
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    description: 'A historical novel about a woman’s struggle for survival and hope during the Great Depression.',
    price: 17.49,
    category: 'Historical Fiction',
    publicationDate: '2021-02-02',
    coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594925043l/53138081.jpg',
  },
  {
    title: 'The Push',
    author: 'Ashley Audrain',
    description: 'A psychological thriller about motherhood and the challenges of raising a troubled child.',
    price: 16.49,
    category: 'Psychological Thriller',
    publicationDate: '2021-01-05',
    coverImage: 'https://m.media-amazon.com/images/I/81E6ZuCAr-L._AC_UF1000,1000_QL80_.jpg',
  },

];

const BookList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>('all');
  const [category, setCategory] = useState<string>('all');
  const [publishDate, setPublishDate] = useState<string>('all');


  const uniqueCategories = Array.from(new Set(booksData.map(book => book.category)));
  const categoriesWithAll = ['all', ...uniqueCategories]; 

  const filteredBooks = booksData
    .filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => {
      let min = 0;
      let max = Infinity; 
      if (priceRange === 'all') return true;
      if (priceRange.includes('-')) {
        [min, max] = priceRange.split('-').map(Number);
      } else if (priceRange === '50+') {
        min = 50;
        max = Infinity;
      } 
   
      return book.price >= (min || 0) && (max ? book.price <= max : book.price > min);
    })
    .filter(book => category === 'all' || book.category === category)
    .filter(book => {
      if (publishDate === 'all') return true;
      const publicationDate = new Date(book.publicationDate);
      const now = new Date();
      const dateDiff = now.getTime() - publicationDate.getTime();
      const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
      switch (publishDate) {
        case 'last-year': return daysDiff <= 365;
        case 'last-2-years': return daysDiff <= 730;
        case 'last-3-years': return daysDiff <= 1095;
        default: return true;
      }
    });
    const resetFilters = () => {
      setSearchTerm('');
      setPriceRange('all');
      setCategory('all');
      setPublishDate('all');

    };

  return (
    <div className="container mx-auto py-12">
    <h1 className="text-3xl font-bold text-center mb-8">Book Collection</h1>
    <div className="mb-8 text-center">
      <input
        type="text"
        className="border p-2 w-3/4 md:w-1/4 rounded-md"
        placeholder="Search for books by title or author..."
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
    <div className="flex flex-col lg:flex-row gap-9">
      <div className="w-full lg:w-1/4">
        <Filter
             priceRange={priceRange}
             setPriceRange={setPriceRange}
             category={category}
             setCategory={setCategory}
             publishDate={publishDate}
             setPublishDate={setPublishDate} 
             uniqueCategories={categoriesWithAll}
             resetFilters={resetFilters}
        /> 
      </div>
      <div className="w-full lg:w-3/4 ">
      {filteredBooks.length === 0 ? (
            <NoBooksFound  />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book, index) => (
                <BookCard
                  key={index}
                  coverImage={book.coverImage}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  price={book.price}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  </div>
  );
};

export default BookList;
