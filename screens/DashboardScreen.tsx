import React from 'react';
import { Scan, Flame, Lock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { GlassCard } from '../components/GlassCard';
import { UserState } from '../types';
import { COLORS } from '../constants';

interface DashboardScreenProps {
  userState: UserState;
}

const data = [
  { value: 1200 }, { value: 1220 }, { value: 1215 }, 
  { value: 1250 }, { value: 1280 }, { value: 1345 }
];

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ userState }) => {
  return (
    <div className="h-full px-6 pt-12 pb-24 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-olive-slate text-lg font-medium">Good Morning,</h2>
          <h1 className="text-olive-dark text-3xl font-bold">{userState.name}</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-olive-dark/10 flex items-center justify-center border border-olive-dark/20">
          <img src="https://picsum.photos/100/100" alt="Profile" className="w-full h-full rounded-full object-cover p-0.5" />
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Net Worth - Span 2 */}
        <GlassCard className="col-span-2 p-6 h-48 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <span className="text-olive-slate/60 font-medium text-sm">Total Net Worth</span>
            <div className="text-4xl font-bold text-olive-dark mt-1">
              ${(userState.balance + userState.savings).toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-olive-drab text-sm mt-1 font-medium">
              <ArrowUpRight size={16} />
              <span>+4.2% this week</span>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-24 opacity-50">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS.oliveDrab} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={COLORS.oliveDrab} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={['dataMin - 100', 'dataMax + 50']} />
                  <Area type="monotone" dataKey="value" stroke={COLORS.oliveDrab} strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Scan UPI - Span 1 */}
        <button className="col-span-1 rounded-3xl bg-gold text-white p-5 flex flex-col items-center justify-center gap-2 shadow-lg shadow-gold/30 active:scale-95 transition-transform relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Scan size={32} />
            <span className="font-bold text-lg">Scan UPI</span>
        </button>

        {/* Streak - Span 1 */}
        <GlassCard className="col-span-1 p-5 flex flex-col items-center justify-center gap-1 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-gold/20 rounded-full blur-xl" />
          <Flame size={28} className="text-gold animate-pulse" fill={COLORS.gold} />
          <span className="text-2xl font-bold text-olive-dark">{userState.streakDays}</span>
          <span className="text-xs text-olive-slate/60 font-medium uppercase tracking-wider">Day Streak</span>
        </GlassCard>

        {/* Quick Save - Span 1 */}
        <GlassCard className="col-span-1 p-5 flex flex-col justify-center items-center text-center gap-2 border-dashed border-olive-dark/30 bg-ivory/50">
          <div className="w-10 h-10 rounded-full bg-olive-light/20 flex items-center justify-center text-olive-dark">
            <ArrowDownRight size={20} />
          </div>
          <span className="text-sm font-medium text-olive-slate">Quick Save</span>
        </GlassCard>

        {/* Next Reward - Span 1 */}
        <GlassCard className="col-span-1 p-5 flex flex-col justify-center items-center gap-2 bg-olive-slate/5">
           <Lock size={24} className="text-olive-slate/40" />
           <span className="text-xs text-olive-slate/50 font-medium text-center">Level 5 Unlocks "Crypto Lite"</span>
           <div className="w-full h-1.5 bg-olive-slate/10 rounded-full mt-1 overflow-hidden">
             <div className="h-full bg-gold w-3/4 rounded-full" />
           </div>
        </GlassCard>
        
        {/* Recent Transaction Summary - Span 2 */}
        <GlassCard className="col-span-2 p-5 flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-xs text-olive-slate/60 uppercase font-bold tracking-wide">Last Transaction</span>
                <span className="text-olive-dark font-medium mt-1">Whole Foods Market</span>
            </div>
            <span className="text-olive-dark font-bold">-$12.50</span>
        </GlassCard>

      </div>
    </div>
  );
};
