import React, { useMemo } from "react";
import { TrendingUp, ArrowUpRight, DollarSign, Calendar, User, CheckCircle } from "lucide-react";
import { useAuth } from "../../../../context/auth.context";

const Earnings = () => {
  const { user } = useAuth();

  // safe fallback if sessions are empty
  const sessions = user?.sessions || [];

  // Only include confirmed & completed sessions
  const completedSessions = useMemo(
    () => sessions.filter(s => s.status === "completed"),
    [sessions]
  );

  // Total earned
  const totalEarned = completedSessions.reduce((sum, s) => sum + (s.price || 0), 0);

  // This month earnings
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();
  const thisMonthSessions = completedSessions.filter(s => {
    const d = new Date(s.date);
    return d.getMonth() === thisMonth && d.getFullYear() === thisYear;
  });
  const thisMonthEarned = thisMonthSessions.reduce((sum, s) => sum + (s.price || 0), 0);

  // Avg per session
  const avgPerSession =
    completedSessions.length > 0 ? (totalEarned / completedSessions.length).toFixed(0) : 0;

  // Recent payments (latest 5)
  const recentPayments = [...completedSessions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

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
          <div className="group relative bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all">
            <div className="absolute top-4 right-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">This Month</div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              ₹{thisMonthEarned}
            </div>
            <div className="text-sm text-gray-500">
              {thisMonthSessions.length} sessions
            </div>
          </div>

          {/* Total Earned */}
          <div className="group relative bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all">
            <div className="absolute top-4 right-4 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Total Earned</div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              ₹{totalEarned}
            </div>
            <div className="text-sm text-gray-500">
              {completedSessions.length} completed sessions
            </div>
          </div>

          {/* Avg per Session */}
          <div className="group relative bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all">
            <div className="absolute top-4 right-4 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Avg per Session</div>
            <div className="text-4xl font-bold text-orange-500 mb-2">₹{avgPerSession}</div>
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
            {recentPayments.length === 0 ? (
              <div className="p-6 text-gray-500 text-sm">No payments yet.</div>
            ) : (
              recentPayments.map((s, i) => (
                <div key={s._id || i} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">
                          {s.mentee?.name || "Mentee"}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(s.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{s.title}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-2xl text-emerald-600">₹{s.price}</div>
                      <div className="flex items-center gap-1 text-sm text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium">Paid</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
