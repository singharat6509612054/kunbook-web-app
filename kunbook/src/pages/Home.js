import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import { 
  BookOpenIcon, 
  SearchIcon, 
  StarIcon, 
  DownloadIcon 
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
    <div className="mb-4">
      <Icon className="h-10 w-10 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Home = () => {
  const features = [
    {
      icon: BookOpenIcon,
      title: 'Vast Library',
      description: 'Access thousands of e-books across multiple genres.'
    },
    {
      icon: SearchIcon,
      title: 'Easy Discovery',
      description: 'Find your next favorite book with intelligent recommendations.'
    },
    {
      icon: StarIcon,
      title: 'User Reviews',
      description: 'Make informed choices with detailed user reviews.'
    },
    {
      icon: DownloadIcon,
      title: 'Offline Reading',
      description: 'Download books and read anytime, anywhere.'
    }
  ];

  return (
    <MainLayout>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Discover Your Next Great Read
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          KunBook brings the world of literature to your fingertips. 
          Explore, read, and enjoy e-books like never before.
        </p>
        
        <div className="mt-8 space-x-4">
          <Link 
            to="/books" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse Books
          </Link>
          <Link 
            to="/categories" 
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
          >
            Explore Categories
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose KunBook?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;