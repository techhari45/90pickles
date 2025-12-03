import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <nav className="bg-earth-50 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-serif font-bold text-earth-800">
                            90 <span className="text-pickle-red">Pickles</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-earth-800 hover:text-pickle-red font-medium transition-colors">Home</Link>
                        <Link to="/shop" className="text-earth-800 hover:text-pickle-red font-medium transition-colors">Shop</Link>
                        <Link to="/about" className="text-earth-800 hover:text-pickle-red font-medium transition-colors">Our Story</Link>
                        {isAuthenticated && user?.role === 'admin' && (
                            <Link to="/admin" className="text-pickle-red font-bold hover:text-earth-900 transition-colors">Admin Panel</Link>
                        )}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-earth-700 hover:text-pickle-red transition-colors">
                            <Search size={22} />
                        </button>
                        <Link to="/cart" className="relative text-earth-700 hover:text-pickle-red transition-colors">
                            <ShoppingCart size={22} />
                            {cartQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-pickle-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartQuantity}
                                </span>
                            )}
                        </Link>

                        {isAuthenticated ? (
                            <div className="relative group">
                                <button className="text-earth-700 hover:text-pickle-red transition-colors flex items-center gap-2">
                                    <User size={22} />
                                    <span className="text-sm font-medium">{user?.name}</span>
                                </button>
                                <div className="absolute right-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block border border-earth-200">
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50">Profile</Link>
                                    <Link to="/orders" className="block px-4 py-2 text-sm text-earth-700 hover:bg-earth-50">My Orders</Link>
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-earth-50">Logout</button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login" className="text-earth-700 hover:text-pickle-red font-medium transition-colors">
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <Link to="/cart" className="relative text-earth-700 mr-4">
                            <ShoppingCart size={22} />
                            {cartQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-pickle-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartQuantity}
                                </span>
                            )}
                        </Link>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-earth-800 focus:outline-none">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-earth-50 border-t border-earth-200">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <Link to="/" className="block px-3 py-2 text-base font-medium text-earth-800 hover:bg-earth-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/shop" className="block px-3 py-2 text-base font-medium text-earth-800 hover:bg-earth-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link to="/about" className="block px-3 py-2 text-base font-medium text-earth-800 hover:bg-earth-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
                        {isAuthenticated ? (
                            <>
                                <Link to="/profile" className="block px-3 py-2 text-base font-medium text-earth-800 hover:bg-earth-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Profile</Link>
                                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-earth-100 rounded-md">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" className="block px-3 py-2 text-base font-medium text-earth-800 hover:bg-earth-100 rounded-md" onClick={() => setIsMenuOpen(false)}>Login</Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
