import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter } from 'lucide-react';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category') || 'all';
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const filteredProducts = categoryFilter === 'all'
        ? products
        : products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase() || (categoryFilter === 'bestsellers' && p.isBestSeller));

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className={`md:w-64 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-200 sticky top-24">
                        <h3 className="text-lg font-serif font-bold text-earth-900 mb-4">Categories</h3>
                        <ul className="space-y-3">
                            {categories.map(cat => (
                                <li key={cat.id}>
                                    <button
                                        onClick={() => setSearchParams({ category: cat.id })}
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${categoryFilter === cat.id ? 'bg-pickle-red text-white font-medium' : 'text-earth-700 hover:bg-earth-100'}`}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-serif font-bold text-earth-900">
                            {categoryFilter === 'all' ? 'All Pickles' : categories.find(c => c.id === categoryFilter)?.name || 'Shop'}
                        </h1>
                        <button
                            className="md:hidden flex items-center gap-2 text-earth-700 border border-earth-300 px-4 py-2 rounded-lg"
                            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                        >
                            <Filter size={18} /> Filters
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-earth-500 text-lg">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
