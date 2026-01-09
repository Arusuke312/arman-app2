import React from 'react';
import { Home, DollarSign, PieChart, TrendingUp } from 'lucide-react';
import { AppScreen } from '../types';

interface BottomNavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  // Don't show nav on Start screen
  if (currentScreen === AppScreen.START) return null;

  const navItems = [
    { id: AppScreen.DASHBOARD, icon: Home, label: 'Home' },
    { id: AppScreen.ALLOWANCE, icon: DollarSign, label: 'Earn' },
    { id: AppScreen.SPENDING, icon: PieChart, label: 'Spend' },
    { id: AppScreen.GOALS, icon: TrendingUp, label: 'Grow' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 px-6 z-50 flex justify-center">
      <div className="bg-olive-dark/95 backdrop-blur-xl text-ivory rounded-full px-6 py-3 shadow-2xl flex items-center gap-8 border border-white/10">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-gold transform -translate-y-1' : 'text-ivory/60 hover:text-ivory'}`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-medium ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity absolute -bottom-5 w-max`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
