'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Apple, HeartHandshake, Handshake, TreePine } from 'lucide-react';

const iconMap: Record<string, any> = {
  Apple, HeartHandshake, Handshake, TreePine,
};

export default function ImpactPage({ metrics }: { metrics?: any[] }) {
  const monthlyData = [
    { name: 'Jan', meals: 4000, trees: 240 },
    { name: 'Feb', meals: 3000, trees: 139 },
    { name: 'Mar', meals: 2000, trees: 980 },
    { name: 'Apr', meals: 2780, trees: 390 },
    { name: 'May', meals: 1890, trees: 480 },
    { name: 'Jun', meals: 2390, trees: 380 },
    { name: 'Jul', meals: 3490, trees: 430 },
  ];

  const stats = (metrics || []).map((m: any) => ({
    num: m.value,
    label: m.label,
    Icon: iconMap[m.icon] || HeartHandshake,
    color: m.color || 'text-brand-dark',
  }));

  // Fallback if no metrics from CMS
  if (stats.length === 0) {
    stats.push(
      { num: '18,450+', label: 'Meals Shared', Icon: Apple, color: 'text-orange-500' },
      { num: '3,250+', label: 'People Helped', Icon: HeartHandshake, color: 'text-purple-500' },
      { num: '1,10,000+', label: 'Volunteer Hours', Icon: Handshake, color: 'text-blue-500' },
      { num: '2,150+', label: 'Trees Planted', Icon: TreePine, color: 'text-green-500' },
    );
  }

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Impact in Numbers</h1>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            Transparency is our core principle. Here&apos;s a real-time look at how your contributions are making a difference across various initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
           {stats.map((stat, idx) => (
             <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-50 ${stat.color}`}>
                  <stat.Icon size={32} />
                </div>
                <div>
                  <div className="font-bold text-3xl text-gray-900 mb-1">{stat.num}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
             </div>
           ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-serif font-bold text-2xl mb-8 text-gray-900">Meals Served (YTD)</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorMeals" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 600}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 600}} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="meals" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorMeals)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
           </div>

           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-serif font-bold text-2xl mb-8 text-gray-900">Trees Planted</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData} barSize={40} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 600}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 600}} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} cursor={{fill: '#f3f4f6'}} />
                    <Bar dataKey="trees" fill="#22c55e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
