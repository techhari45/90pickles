import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
    const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 4);

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            {/* Hero Section - Image Only */}
            <section className="relative h-[500px] md:h-[600px] overflow-hidden">
                <img
                    src={`${import.meta.env.BASE_URL}images/home_hero_bg.jpg`}
                    alt="Pickle Background"
                    className="w-full h-full object-cover object-center"
                />
                {/* Subtle gradient at bottom to blend */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-earth-50 to-transparent" />
            </section>

            {/* Hero Content Section */}
            <section className="text-center px-4 max-w-4xl mx-auto -mt-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-earth-100"
                >
                    <span className="block text-pickle-yellow font-serif text-xl md:text-2xl mb-4 italic font-bold">
                        Authentic Homemade Taste
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-earth-900">
                        Taste the Tradition of <br /> <span className="text-pickle-red">Village Pickles</span>
                    </h1>
                    <p className="text-lg md:text-xl text-earth-600 mb-8 max-w-2xl mx-auto">
                        Handcrafted with love using traditional recipes and premium ingredients. No preservatives, just pure nostalgia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/shop" className="bg-pickle-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-red-200">
                            Shop Now <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="bg-earth-100 hover:bg-earth-200 text-earth-800 border border-earth-200 px-8 py-4 rounded-full font-bold text-lg transition-all">
                            Our Story
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Categories Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Shop by Category</h2>
                    <div className="w-24 h-1 bg-pickle-yellow mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link to="/shop?category=veg" className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src={`${import.meta.env.BASE_URL}images/veg_pickles_category.png`}
                            alt="Veg Pickles"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-3xl font-serif font-bold text-white mb-2">Veg Pickles</h3>
                            <p className="text-gray-200 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                Mango, Lemon, Gongura, and more traditional delights.
                            </p>
                            <span className="text-pickle-yellow font-bold flex items-center gap-2">Explore <ArrowRight size={16} /></span>
                        </div>
                    </Link>

                    <Link to="/shop?category=non-veg" className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src={`${import.meta.env.BASE_URL}images/non_veg_pickles_category.png`}
                            alt="Non-Veg Pickles"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-3xl font-serif font-bold text-white mb-2">Non-Veg Pickles</h3>
                            <p className="text-gray-200 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                Chicken, Prawns, and Mutton pickles made with authentic spices.
                            </p>
                            <span className="text-pickle-yellow font-bold flex items-center gap-2">Explore <ArrowRight size={16} /></span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-earth-100/50 py-16 rounded-3xl">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-2">Best Sellers</h2>
                        <p className="text-earth-600">Customer favorites that you must try.</p>
                    </div>
                    <Link to="/shop" className="hidden md:flex items-center gap-2 text-pickle-red font-bold hover:text-earth-900 transition-colors">
                        View All <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/shop" className="inline-flex items-center gap-2 text-pickle-red font-bold hover:text-earth-900 transition-colors">
                        View All <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Features / Trust Badges */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-earth-100">
                        <div className="w-16 h-16 bg-pickle-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 text-pickle-yellow">
                            <Star size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-earth-900 mb-2">Premium Quality</h3>
                        <p className="text-earth-500">Made with high-quality ingredients and traditional methods.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-earth-100">
                        <div className="w-16 h-16 bg-pickle-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-pickle-green">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-earth-900 mb-2">100% Natural</h3>
                        <p className="text-earth-500">No artificial preservatives or colors. Just pure taste.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-earth-100">
                        <div className="w-16 h-16 bg-pickle-red/20 rounded-full flex items-center justify-center mx-auto mb-4 text-pickle-red">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        </div>
                        <h3 className="text-xl font-bold text-earth-900 mb-2">Fast Delivery</h3>
                        <p className="text-earth-500">Secure packaging and quick delivery to your doorstep.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
