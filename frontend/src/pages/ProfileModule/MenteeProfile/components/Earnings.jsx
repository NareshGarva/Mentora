import React from 'react';
import { TrendingUp, ArrowUpRight, DollarSign, Calendar, User, CheckCircle } from 'lucide-react';

const Earnings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Earnings Overview
            </h1>
            <p className="text-gray-600 mt-1">Track your financial performance</p>
          </div>
          <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-xl border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">View Analytics</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* This Month */}
          <div className="group relative bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 border border-gray-200 hover:border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute top-4 right-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">This Month</div>
            <div className="text-4xl font-bold text-blue-600 mb-2">$4,200</div>
            <div className="flex items-center gap-1 text-sm">
              <ArrowUpRight className="w-4 h-4 text-green-500" />
              <span className="text-green-600 font-medium">+15%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </div>

          {/* Total Earned */}
          <div className="group relative bg-white hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 border border-gray-200 hover:border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute top-4 right-4 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Total Earned</div>
            <div className="text-4xl font-bold text-gray-900 mb-2">$12,450</div>
            <div className="text-sm text-gray-500">Since joining</div>
          </div>

          {/* Avg per Session */}
          <div className="group relative bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 border border-gray-200 hover:border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute top-4 right-4 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Avg per Session</div>
            <div className="text-4xl font-bold text-orange-500 mb-2">$150</div>
            <div className="text-sm text-gray-500">Hourly rate</div>
          </div>
        </div>

        {/* Recent Payments */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Recent Payments</h2>
            <p className="text-gray-600 text-sm mt-1">Your latest transactions</p>
          </div>
          
          <div className="divide-y divide-gray-100">
            {/* Payment 1 */}
            <div className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Emma Davis</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>2024-01-10</span>
                      <span>•</span>
                      <span>Strategy Planning</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-bold text-2xl text-emerald-600">$150</div>
                    <div className="flex items-center gap-1 text-sm text-emerald-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Paid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment 2 */}
            <div className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Mike Chen</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>2024-01-08</span>
                      <span>•</span>
                      <span>Career Pivot Advice</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-bold text-2xl text-emerald-600">$150</div>
                    <div className="flex items-center gap-1 text-sm text-emerald-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Paid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;