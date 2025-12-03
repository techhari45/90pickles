import React from 'react';
import { TrendingUp, Package, Users, ShoppingBag, Plus, Edit, Trash2 } from 'lucide-react';
import { products } from '../data/products';

const AdminDashboard = () => {
    // Mock Data for Dashboard
    const stats = [
        { title: 'Total Revenue', value: '₹45,200', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
        { title: 'Total Orders', value: '124', icon: ShoppingBag, color: 'bg-blue-100 text-blue-600' },
        { title: 'Total Products', value: products.length, icon: Package, color: 'bg-orange-100 text-orange-600' },
        { title: 'Total Customers', value: '89', icon: Users, color: 'bg-purple-100 text-purple-600' },
    ];

    const recentOrders = [
        { id: '#ORD-001', customer: 'Ravi Kumar', date: '2023-10-25', amount: '₹500', status: 'Delivered' },
        { id: '#ORD-002', customer: 'Priya Sharma', date: '2023-10-26', amount: '₹1,200', status: 'Processing' },
        { id: '#ORD-003', customer: 'Amit Patel', date: '2023-10-27', amount: '₹750', status: 'Shipped' },
        { id: '#ORD-004', customer: 'Sneha Reddy', date: '2023-10-27', amount: '₹300', status: 'Pending' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-earth-900">Admin Dashboard</h1>
                <button className="flex items-center gap-2 bg-pickle-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-sm">
                    <Plus size={20} /> Add New Product
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-earth-200 flex items-center gap-4">
                        <div className={`p-3 rounded-full ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-earth-500 font-medium">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-earth-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-earth-200 overflow-hidden">
                    <div className="p-6 border-b border-earth-100 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-earth-900">Recent Orders</h2>
                        <button className="text-sm text-pickle-red font-medium hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-earth-50 text-earth-600 text-xs uppercase font-semibold">
                                <tr>
                                    <th className="px-6 py-4">Order ID</th>
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-earth-100">
                                {recentOrders.map((order, index) => (
                                    <tr key={index} className="hover:bg-earth-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-earth-900">{order.id}</td>
                                        <td className="px-6 py-4 text-earth-700">{order.customer}</td>
                                        <td className="px-6 py-4 text-earth-500 text-sm">{order.date}</td>
                                        <td className="px-6 py-4 font-bold text-earth-900">{order.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium 
                                                ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                        order.status === 'Shipped' ? 'bg-purple-100 text-purple-700' :
                                                            'bg-yellow-100 text-yellow-700'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Product Overview / Quick Stats */}
                <div className="bg-white rounded-xl shadow-sm border border-earth-200 p-6">
                    <h2 className="text-lg font-bold text-earth-900 mb-4">Product Overview</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-earth-50 rounded-lg">
                            <span className="text-earth-700 font-medium">Low Stock Items</span>
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">3</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-earth-50 rounded-lg">
                            <span className="text-earth-700 font-medium">Out of Stock</span>
                            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-bold">0</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-earth-50 rounded-lg">
                            <span className="text-earth-700 font-medium">Categories</span>
                            <span className="bg-earth-200 text-earth-800 px-2 py-1 rounded text-xs font-bold">3</span>
                        </div>
                    </div>

                    <h2 className="text-lg font-bold text-earth-900 mt-8 mb-4">Top Selling Products</h2>
                    <ul className="space-y-3">
                        {products.filter(p => p.isBestSeller).slice(0, 3).map(product => (
                            <li key={product.id} className="flex items-center gap-3">
                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-md object-cover" />
                                <div>
                                    <p className="text-sm font-medium text-earth-900">{product.name}</p>
                                    <p className="text-xs text-earth-500">₹{product.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Pickle-wise Sales */}
            <div className="bg-white rounded-xl shadow-sm border border-earth-200 overflow-hidden mt-8">
                <div className="p-6 border-b border-earth-100">
                    <h2 className="text-lg font-bold text-earth-900">Pickle-wise Sales</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-earth-50 text-earth-600 text-xs uppercase font-semibold">
                            <tr>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Total Orders</th>
                                <th className="px-6 py-4">Total Revenue</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-earth-100">
                            {products.map((product) => {
                                // Mock random sales data
                                const orders = Math.floor(Math.random() * 50) + 10;
                                const revenue = orders * product.price;
                                return (
                                    <tr key={product.id} className="hover:bg-earth-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-md object-cover" />
                                                <span className="font-medium text-earth-900">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-earth-700">{product.category}</td>
                                        <td className="px-6 py-4 text-earth-700">₹{product.price}</td>
                                        <td className="px-6 py-4 font-bold text-earth-900">{orders}</td>
                                        <td className="px-6 py-4 font-bold text-pickle-red">₹{revenue.toLocaleString()}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
