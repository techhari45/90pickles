import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import loginBg from '../assets/images/login_bg.png';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login
        const user = {
            name: 'Hari Prasad',
            email: email,
            role: email.includes('admin') ? 'admin' : 'user',
        };
        dispatch(login({ user, token: 'dummy-token' }));
        if (user.role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={loginBg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="max-w-md w-full space-y-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-earth-200 relative z-10">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-serif font-bold text-earth-900">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-earth-600">
                        {isLogin ? 'Sign in to access your orders' : 'Join us for authentic tastes'}
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-earth-300 placeholder-earth-400 text-earth-900 rounded-t-md focus:outline-none focus:ring-pickle-red focus:border-pickle-red focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-earth-300 placeholder-earth-400 text-earth-900 rounded-b-md focus:outline-none focus:ring-pickle-red focus:border-pickle-red focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pickle-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pickle-red transition-colors"
                        >
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            setEmail('admin@90pickles.com');
                            setPassword('admin123');
                        }}
                        className="w-full flex justify-center py-2 px-4 border border-earth-300 rounded-md shadow-sm text-xs font-medium text-earth-700 bg-white hover:bg-earth-50 focus:outline-none"
                    >
                        Fill Admin
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setEmail('customer@90pickles.com');
                            setPassword('customer123');
                        }}
                        className="w-full flex justify-center py-2 px-4 border border-earth-300 rounded-md shadow-sm text-xs font-medium text-earth-700 bg-white hover:bg-earth-50 focus:outline-none"
                    >
                        Fill Customer
                    </button>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-pickle-red hover:text-red-700 font-medium"
                    >
                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
