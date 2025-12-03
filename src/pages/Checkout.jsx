import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { items, totalAmount } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for order submission
        alert('Order Placed Successfully! (This is a demo)');
        navigate('/');
    };

    if (items.length === 0) {
        return <div className="text-center py-20">Cart is empty</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-serif font-bold text-earth-900 mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                    <h2 className="text-xl font-bold text-earth-800 mb-6">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-earth-700 mb-1">Full Name</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-pickle-red focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-earth-700 mb-1">Phone Number</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-pickle-red focus:border-transparent outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Email Address</label>
                            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-pickle-red focus:border-transparent outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Address</label>
                            <textarea required name="address" value={formData.address} onChange={handleChange} rows="3" className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-pickle-red focus:border-transparent outline-none"></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-earth-700 mb-1">City</label>
                                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-pickle-red focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-earth-700 mb-1">ZIP Code</label>
                                <input required type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-pickle-red focus:border-transparent outline-none" />
                            </div>
                        </div>

                        <div className="pt-6">
                            <h2 className="text-xl font-bold text-earth-800 mb-4">Payment Method</h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 p-4 border border-earth-200 rounded-lg cursor-pointer hover:bg-earth-50">
                                    <input type="radio" name="payment" value="cod" defaultChecked className="text-pickle-red focus:ring-pickle-red" />
                                    <span className="font-medium text-earth-900">Cash on Delivery (COD)</span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border border-earth-200 rounded-lg cursor-pointer hover:bg-earth-50 opacity-60">
                                    <input type="radio" name="payment" value="online" disabled className="text-pickle-red focus:ring-pickle-red" />
                                    <span className="font-medium text-earth-900">Online Payment (Coming Soon)</span>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-pickle-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors mt-4">
                            Place Order
                        </button>
                    </form>
                </div>

                {/* Summary */}
                <div className="bg-earth-50 p-6 rounded-xl h-fit border border-earth-200">
                    <h3 className="text-xl font-serif font-bold text-earth-900 mb-6">Order Summary</h3>
                    <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                        {items.map((item) => (
                            <div key={`${item.id}-${item.weight}`} className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-earth-800">{item.name}</p>
                                    <p className="text-sm text-earth-500">{item.weight} x {item.quantity}</p>
                                </div>
                                <p className="font-bold text-earth-900">₹{item.totalPrice}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-earth-200 pt-4 flex justify-between text-xl font-bold text-earth-900">
                        <span>Total</span>
                        <span>₹{totalAmount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
