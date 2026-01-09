import React, { useState } from 'react';
import { TrendingUp, Plus } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_GOALS } from '../constants';
import { Goal } from '../types';

export const GoalsScreen: React.FC = () => {
  return (
    <div className="h-full px-6 pt-12 pb-24 overflow-y-auto">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-olive-dark">Goals</h1>
          <p className="text-olive-slate/70">Plant seeds for the future.</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-olive-dark text-ivory flex items-center justify-center shadow-lg active:scale-95 transition-transform">
          <Plus size={24} />
        </button>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex gap-4 overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory">
        {MOCK_GOALS.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
        
        {/* Add New Placeholder */}
        <div className="min-w-[280px] h-[400px] rounded-3xl border-2 border-dashed border-olive-dark/20 flex flex-col items-center justify-center text-olive-dark/40 snap-center shrink-0">
            <Plus size={48} />
            <span className="font-medium mt-2">New Goal</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-olive-dark mb-4">Investment Insights</h3>
        <GlassCard className="p-6">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/20 rounded-xl text-gold">
                    <TrendingUp size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-olive-dark">The Power of Compound Interest</h4>
                    <p className="text-sm text-olive-slate/70 mt-1 leading-relaxed">
                        By investing your goal funds in the S&P 500, you could reach your College Fund target <span className="text-olive-drab font-bold">2 years earlier</span> than with a standard savings account.
                    </p>
                </div>
            </div>
        </GlassCard>
      </div>
    </div>
  );
};

const GoalCard: React.FC<{ goal: Goal }> = ({ goal }) => {
    const [isBoosted, setIsBoosted] = useState(goal.isInvested);
    const percentage = Math.min(100, (goal.currentAmount / goal.targetAmount) * 100);
    
    // Simulate investment growth
    const projectedValue = isBoosted ? goal.currentAmount * 1.08 : goal.currentAmount;
    const projectedLabel = isBoosted ? "+8% APY" : "0.5% APY";

    return (
        <div className="min-w-[280px] snap-center shrink-0 relative group">
            <div className="h-[400px] rounded-3xl overflow-hidden relative shadow-xl shadow-olive-dark/10 bg-white">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img src={goal.image} alt={goal.title} className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-slate via-olive-slate/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-ivory">
                    <h3 className="text-2xl font-bold mb-1">{goal.title}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-medium">${goal.currentAmount.toLocaleString()}</span>
                        <span className="text-sm opacity-60">of ${goal.targetAmount.toLocaleString()}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-white/20 rounded-full mb-6 overflow-hidden">
                        <div className="h-full bg-gold transition-all duration-500" style={{ width: `${percentage}%` }} />
                    </div>

                    {/* Investment Toggle Area */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-gold">
                                {isBoosted ? 'Boost Active 🚀' : 'Boost Inactive'}
                            </span>
                            <button 
                                onClick={() => setIsBoosted(!isBoosted)}
                                className={`w-10 h-6 rounded-full transition-colors duration-300 relative ${isBoosted ? 'bg-gold' : 'bg-white/30'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isBoosted ? 'left-5' : 'left-1'}`} />
                            </button>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="opacity-80">Projected:</span>
                            <span className={`font-bold ${isBoosted ? 'text-gold' : 'text-ivory'}`}>
                                ${projectedValue.toFixed(0)} <span className="text-[10px] font-normal opacity-70">({projectedLabel})</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
