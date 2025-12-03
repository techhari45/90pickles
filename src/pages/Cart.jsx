import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
    const { items, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (items.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-3xl font-serif font-bold text-earth-900 mb-4">Your Cart is Empty</h2>
                <p className="text-earth-500 mb-8">Looks like you haven't added any pickles yet.</p>
                <Link to="/shop" className="inline-block bg-pickle-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-serif font-bold text-earth-900 mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Cart Items */}
                <div className="flex-grow space-y-6">
                    {items.map((item) => (
                        <div key={`${item.id}-${item.weight}`} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-sm border border-earth-200">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-lg bg-gray-50" />

                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="text-lg font-bold text-earth-900">{item.name}</h3>
                                <p className="text-earth-500 text-sm mb-2">Weight: {item.weight}</p>
                                <p className="text-pickle-red font-bold">₹{item.price}</p>
                            </div>

                            <div className="flex items-center border border-earth-300 rounded-lg bg-earth-50">
                                <button
                                    onClick={() => dispatch(updateQuantity({ id: item.id, weight: item.weight, quantity: item.quantity - 1 }))}
                                    className="p-2 hover:bg-earth-200 text-earth-600"
                                    disabled={item.quantity <= 1}
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-10 text-center font-bold text-earth-900">{item.quantity}</span>
                                <button
                                    onClick={() => dispatch(updateQuantity({ id: item.id, weight: item.weight, quantity: item.quantity + 1 }))}
                                    className="p-2 hover:bg-earth-200 text-earth-600"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="text-right min-w-[80px]">
                                <p className="font-bold text-earth-900 mb-2">₹{item.totalPrice}</p>
                                <button
                                    onClick={() => dispatch(removeFromCart({ id: item.id, weight: item.weight }))}
                                    className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 justify-end"
                                >
                                    <Trash2 size={16} /> Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:w-96 flex-shrink-0">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-200 sticky top-24">
                        <h3 className="text-xl font-serif font-bold text-earth-900 mb-6">Order Summary</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-earth-600">
                                <span>Subtotal</span>
                                <span>₹{totalAmount}</span>
                            </div>
                            <div className="flex justify-between text-earth-600">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="border-t border-earth-200 pt-4 flex justify-between text-lg font-bold text-earth-900">
                                <span>Total</span>
                                <span>₹{totalAmount}</span>
                            </div>
                        </div>

                        <Link to="/checkout" className="w-full bg-pickle-red hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                            Proceed to Checkout <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
