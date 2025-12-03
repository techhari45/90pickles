import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { products } from '../data/products';
import { Star, Minus, Plus, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [selectedWeight, setSelectedWeight] = useState('250g');

    if (!product) return <div className="text-center py-20">Product not found</div>;

    const weights = ['250g', '500g', '1kg'];
    const priceMultiplier = { '250g': 1, '500g': 2, '1kg': 4 };
    const currentPrice = Math.round(product.price * priceMultiplier[selectedWeight]);
    const currentOriginalPrice = Math.round(product.originalPrice * priceMultiplier[selectedWeight]);

    const handleAddToCart = () => {
        dispatch(addToCart({
            ...product,
            price: currentPrice,
            weight: selectedWeight,
            quantity
        }));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="bg-earth-100 rounded-2xl overflow-hidden shadow-inner">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                {/* Details Section */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-pickle-green/10 text-pickle-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {product.category}
                        </span>
                        {product.isBestSeller && (
                            <span className="bg-pickle-yellow/20 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Best Seller
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl font-serif font-bold text-earth-900 mb-4">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-gray-300"} />
                            ))}
                        </div>
                        <span className="text-earth-500 text-sm">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex items-end gap-4 mb-8">
                        <span className="text-4xl font-bold text-pickle-red">₹{currentPrice}</span>
                        <span className="text-xl text-earth-400 line-through mb-1">₹{currentOriginalPrice}</span>
                        <span className="text-green-600 font-bold text-sm mb-2">
                            {Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100)}% OFF
                        </span>
                    </div>

                    <p className="text-earth-600 leading-relaxed mb-8">
                        {product.description}
                    </p>

                    {/* Options */}
                    <div className="space-y-6 mb-8">
                        <div>
                            <label className="block text-sm font-bold text-earth-800 mb-2">Select Weight</label>
                            <div className="flex gap-3">
                                {weights.map(w => (
                                    <button
                                        key={w}
                                        onClick={() => setSelectedWeight(w)}
                                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${selectedWeight === w ? 'border-pickle-red bg-red-50 text-pickle-red' : 'border-earth-200 text-earth-600 hover:border-earth-300'}`}
                                    >
                                        {w}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-earth-800 mb-2">Quantity</label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-earth-300 rounded-lg bg-white">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-earth-50 text-earth-600">
                                        <Minus size={18} />
                                    </button>
                                    <span className="w-12 text-center font-bold text-earth-900">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-earth-50 text-earth-600">
                                        <Plus size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mb-12">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-pickle-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-red-200"
                        >
                            <ShoppingBag size={20} />
                            Add to Cart
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-earth-600">
                        <div className="flex items-center gap-3">
                            <Truck size={20} className="text-pickle-green" />
                            <span>Free delivery on orders above ₹999</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={20} className="text-pickle-green" />
                            <span>Secure payment & Quality check</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
