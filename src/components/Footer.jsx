import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-earth-800 text-earth-100 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold text-earth-50 mb-4">
                            90 <span className="text-pickle-yellow">Pickles</span>
                        </h3>
                        <p className="text-earth-200 text-sm leading-relaxed mb-4">
                            Authentic homemade pickles made with traditional recipes and love. We bring the taste of grandma's kitchen to your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-earth-300 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-earth-300 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-earth-300 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/shop" className="text-earth-300 hover:text-pickle-yellow transition-colors">Shop Pickles</a></li>
                            <li><a href="/about" className="text-earth-300 hover:text-pickle-yellow transition-colors">Our Story</a></li>
                            <li><a href="/contact" className="text-earth-300 hover:text-pickle-yellow transition-colors">Contact Us</a></li>
                            <li><a href="/faq" className="text-earth-300 hover:text-pickle-yellow transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Categories</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/shop?category=veg" className="text-earth-300 hover:text-pickle-yellow transition-colors">Veg Pickles</a></li>
                            <li><a href="/shop?category=non-veg" className="text-earth-300 hover:text-pickle-yellow transition-colors">Non-Veg Pickles</a></li>
                            <li><a href="/shop?category=bestsellers" className="text-earth-300 hover:text-pickle-yellow transition-colors">Best Sellers</a></li>
                            <li><a href="/shop?category=new" className="text-earth-300 hover:text-pickle-yellow transition-colors">New Arrivals</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-pickle-yellow mt-0.5" />
                                <span className="text-earth-300">123 Pickle Street, Spice Village, Andhra Pradesh, India - 500001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-pickle-yellow" />
                                <span className="text-earth-300">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-pickle-yellow" />
                                <span className="text-earth-300">hello@90pickles.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-earth-700 mt-12 pt-6 text-center text-sm text-earth-400">
                    <p>&copy; {new Date().getFullYear()} 90 Pickles. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
