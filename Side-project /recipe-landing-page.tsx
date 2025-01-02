import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronRight, Clock, Users } from 'lucide-react';

const RecipeLandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredRecipes = [
    {
      title: "Homemade Pizza",
      time: "45 mins",
      servings: 4,
      image: "/api/placeholder/600/400"
    },
    {
      title: "Classic Pasta Carbonara",
      time: "30 mins",
      servings: 2,
      image: "/api/placeholder/600/400"
    },
    {
      title: "Chocolate Chip Cookies",
      time: "25 mins",
      servings: 12,
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">CulinaryDelight</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Recipes</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Categories</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">About</a>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Recipes</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Categories</a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
          backgroundImage: "url('/api/placeholder/1920/1080')"
        }}>
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="text-white">
                <h1 className="text-5xl font-semibold">Discover Delicious Recipes</h1>
                <p className="mt-4 text-lg">Find and share everyday cooking inspiration on CulinaryDelight.</p>
                <button className="mt-8 bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition duration-300">
                  Explore Recipes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Recipes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Recipes</h2>
            <p className="mt-4 text-xl text-gray-600">Try our most popular recipes</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRecipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{recipe.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Serves {recipe.servings}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition duration-300 flex items-center justify-center">
                    View Recipe
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeLandingPage;
