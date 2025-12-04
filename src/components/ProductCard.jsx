import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import brandLabel from '../assets/images/brand_label.jpg';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart({ ...product, weight: '250g' })); // Default weight
    };

    return (
        <Link to={`/product/${product.id}`} className="group block h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-200 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square bg-earth-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Brand Label Overlay */}
                    <div className="absolute bottom-2 right-2 w-12 h-16 opacity-90 shadow-sm rotate-[-5deg] z-10">
                        <img
                            src={brandLabel}
                            alt="90's Pickles"
                            className="w-full h-full object-contain rounded-sm"
                        />
                    </div>

                    {product.isBestSeller && (
                        <div className="absolute top-2 left-2 bg-pickle-yellow text-earth-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                            Best Seller
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-pickle-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <ShoppingBag size={18} />
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-pickle-green uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded-full">
                            {product.category}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500">
                            <Star size={14} fill="currentColor" />
                            <span className="text-xs font-bold text-earth-600">{product.rating}</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-earth-900 mb-1 group-hover:text-pickle-red transition-colors">
                        {product.name}
                    </h3>

                    <p className="text-earth-500 text-sm line-clamp-2 mb-4 flex-grow">
                        {product.description}
                    </p>

                    <div className="flex items-end justify-between mt-auto">
                        <div>
                            <span className="text-xs text-earth-400 block">Starts from</span>
                            <span className="text-xl font-bold text-earth-800">₹{product.price}</span>
                        </div>
                        <div className="text-xs text-earth-400 font-medium">
                            {product.weight}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
