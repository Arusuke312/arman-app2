import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_GIGS } from '../constants';
import { Gig } from '../types';

export const AllowanceScreen: React.FC = () => {
  const [gigs, setGigs] = useState<Gig[]>(MOCK_GIGS);
  const [justCompleted, setJustCompleted] = useState<string | null>(null);

  const toggleGig = (id: string) => {
    const gig = gigs.find(g => g.id === id);
    if (!gig) return;

    if (!gig.isCompleted) {
        setJustCompleted(id);
        // Reset animation trigger after delay
        setTimeout(() => setJustCompleted(null), 1000);
    }

    setGigs(gigs.map(g => 
      g.id === id ? { ...g, isCompleted: !g.isCompleted } : g
    ));
  };

  const completedCount = gigs.filter(g => g.isCompleted).length;
  const totalPotential = gigs.reduce((acc, curr) => acc + curr.bounty, 0);
  const currentEarnings = gigs.filter(g => g.isCompleted).reduce((acc, curr) => acc + curr.bounty, 0);
  const progress = (currentEarnings / totalPotential) * 100;

  return (
    <div className="h-full px-6 pt-12 pb-24 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-olive-dark">Gig Board</h1>
        <p className="text-olive-slate/70">Complete contracts to earn allowance.</p>
      </div>

      {/* Payday Timer */}
      <GlassCard className="mb-8 p-6 bg-olive-dark text-ivory relative overflow-hidden" variant="dark">
        <div className="absolute right-0 top-0 w-32 h-32 bg-olive-drab/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <div className="flex justify-between items-start z-10 relative">
          <div>
            <span className="text-ivory/60 text-xs font-bold uppercase tracking-widest">Next Payday</span>
            <div className="text-4xl font-mono font-bold mt-1">2d 14h</div>
          </div>
          <Clock className="text-gold" size={24} />
        </div>
        <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
                <span className="text-ivory/80">Weekly Progress</span>
                <span className="text-gold font-bold">${currentEarnings} / ${totalPotential}</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gold transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }} 
                />
            </div>
        </div>
      </GlassCard>

      {/* Gigs List */}
      <div className="space-y-3">
        {gigs.map((gig) => (
          <GlassCard 
            key={gig.id} 
            className={`p-4 flex items-center justify-between transition-all duration-300 ${gig.isCompleted ? 'opacity-60 bg-olive-light/10' : ''}`}
            onClick={() => toggleGig(gig.id)}
          >
            <div className="flex items-center gap-4">
               <div className={`relative transition-colors duration-300 ${gig.isCompleted ? 'text-olive-drab' : 'text-olive-slate/30'}`}>
                    {gig.isCompleted ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                    {justCompleted === gig.id && (
                        <Sparkles className="absolute -top-1 -right-1 text-gold animate-ping" size={16} />
                    )}
               </div>
               <div>
                   <h3 className={`font-semibold text-olive-dark ${gig.isCompleted ? 'line-through text-olive-slate/50' : ''}`}>{gig.title}</h3>
                   <span className="text-xs text-olive-slate/60">Due {gig.dueDate}</span>
               </div>
            </div>
            <div className={`font-bold text-lg ${gig.isCompleted ? 'text-olive-drab' : 'text-olive-dark'}`}>
                ${gig.bounty}
            </div>
          </GlassCard>
        ))}
      </div>

      {completedCount === gigs.length && (
          <div className="mt-6 p-4 rounded-2xl bg-gold/10 border border-gold/30 text-center animate-pop">
              <span className="text-gold font-bold text-lg">🎉 All Gigs Complete!</span>
              <p className="text-sm text-olive-dark/70">1.05x Bonus Multiplier Active</p>
          </div>
      )}
    </div>
  );
};
