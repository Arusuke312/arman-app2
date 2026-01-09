export enum AppScreen {
  START = 'START',
  DASHBOARD = 'DASHBOARD',
  ALLOWANCE = 'ALLOWANCE',
  SPENDING = 'SPENDING',
  GOALS = 'GOALS'
}

export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  category: string;
  isSustainable: boolean; // Eco-tag
  isRegret: boolean;
}

export interface Gig {
  id: string;
  title: string;
  bounty: number;
  isCompleted: boolean;
  dueDate: string; // "Today", "Tomorrow"
}

export interface Goal {
  id: string;
  title: string;
  currentAmount: number;
  targetAmount: number;
  image: string; // Placeholder URL
  isInvested: boolean;
}

export interface UserState {
  balance: number;
  savings: number;
  streakDays: number;
  unlockedFeatures: string[];
  name: string;
}
