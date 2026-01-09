import React from 'react';
import { Leaf, AlertCircle } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_TRANSACTIONS } from '../constants';
import { Transaction } from '../types';

const TransactionItem: React.FC<{ t: Transaction }> = ({ t }) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.isSustainable ? 'bg-olive-drab/20 text-olive-drab' : 'bg-white/10 text-white/30'}`}>
        <Leaf size={18} fill={t.isSustainable ? "currentColor" : "none"} />
      </div>
      <div>
        <h4 className="text-ivory font-medium">{t.merchant}</h4>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/50">{t.category}</span>
          {t.isRegret && (
              <span className="flex items-center gap-1 text-[10px] text-terracotta bg-terracotta/10 px-1.5 py-0.5 rounded">
                  <AlertCircle size={10} /> Regret
              </span>
          )}
        </div>
      </div>
    </div>
    <span className="text-ivory font-bold">-${t.amount.toFixed(2)}</span>
  </div>
);

export const SpendingScreen: React.FC = () => {
  // Group by date logic (simplified for mock)
  const today = MOCK_TRANSACTIONS.filter(t => t.date === 'Today');
  const yesterday = MOCK_TRANSACTIONS.filter(t => t.date === 'Yesterday');
  const older = MOCK_TRANSACTIONS.filter(t => !['Today', 'Yesterday'].includes(t.date));

  return (
    <div className="h-full px-6 pt-12 pb-24 overflow-y-auto bg-olive-slate text-ivory">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-ivory">Spending</h1>
        <p className="text-ivory/60">Vote with your wallet.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <span className="text-xs text-white/40 uppercase">Eco Score</span>
            <div className="text-2xl font-bold text-olive-drab mt-1">A-</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
             <span className="text-xs text-white/40 uppercase">Regret Rate</span>
             <div className="text-2xl font-bold text-terracotta mt-1">12%</div>
        </div>
      </div>

      <div className="space-y-6">
        {today.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Today</h3>
            <GlassCard variant="dark" className="px-4">
              {today.map(t => <TransactionItem key={t.id} t={t} />)}
            </GlassCard>
          </section>
        )}

        {yesterday.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Yesterday</h3>
            <GlassCard variant="dark" className="px-4">
              {yesterday.map(t => <TransactionItem key={t.id} t={t} />)}
            </GlassCard>
          </section>
        )}

         {older.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Previous</h3>
            <GlassCard variant="dark" className="px-4">
              {older.map(t => <TransactionItem key={t.id} t={t} />)}
            </GlassCard>
          </section>
        )}
      </div>
    </div>
  );
};