import React, { useState, useEffect } from 'react';
import { StartScreen } from './screens/StartScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { AllowanceScreen } from './screens/AllowanceScreen';
import { SpendingScreen } from './screens/SpendingScreen';
import { GoalsScreen } from './screens/GoalsScreen';
import { BottomNav } from './components/BottomNav';
import { AppScreen, UserState } from './types';
import { INITIAL_USER_STATE } from './constants';
import { Flame } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.START);
  const [userState, setUserState] = useState<UserState>(INITIAL_USER_STATE);
  const [showToast, setShowToast] = useState(false);

  // Background color logic based on screen
  const getBackgroundColor = () => {
    if (currentScreen === AppScreen.START) return 'bg-olive-slate';
    if (currentScreen === AppScreen.SPENDING) return 'bg-olive-slate'; // Dark mode
    return 'bg-beige'; // Light mode default
  };

  const handleLogin = () => {
    setCurrentScreen(AppScreen.DASHBOARD);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.START:
        return <StartScreen onLogin={handleLogin} />;
      case AppScreen.DASHBOARD:
        return <DashboardScreen userState={userState} />;
      case AppScreen.ALLOWANCE:
        return <AllowanceScreen />;
      case AppScreen.SPENDING:
        return <SpendingScreen />;
      case AppScreen.GOALS:
        return <GoalsScreen />;
      default:
        return <DashboardScreen userState={userState} />;
    }
  };

  return (
    <div className={`w-full h-screen ${getBackgroundColor()} transition-colors duration-500 overflow-hidden relative font-sans`}>
      
      {/* Daily Streak Toast Notification */}
      {showToast && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 animate-pop w-[90%] max-w-sm">
          <div className="bg-olive-dark text-ivory px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-olive-light/20">
            <div className="p-2 bg-gold/20 rounded-full">
              <Flame className="text-gold fill-gold animate-pulse" size={20} />
            </div>
            <div>
              <h4 className="font-bold">Daily Streak Active!</h4>
              <p className="text-xs text-ivory/70">You're on a {userState.streakDays} day roll.</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="h-full w-full max-w-md mx-auto relative bg-transparent shadow-2xl overflow-hidden md:rounded-[40px] md:h-[95vh] md:mt-[2.5vh] md:border-8 md:border-olive-dark">
         {renderScreen()}
         
         {/* Bottom Navigation */}
         <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      </main>

    </div>
  );
}
